const NodeCache = require('node-cache');
const axios = require('axios')

const { isUuid } = require('../../utils/uuid');
const { makeRequest, wrap } = require('../../utils/request');
const { parseHypixel, parseProfiles } = require('../../utils/hypixel');


// Create a cache instance with a 60-second TTL (time-to-live)
const cache = new NodeCache({ stdTTL: 300, checkperiod: 120 });

module.exports = wrap(async function (req, res) {

    let uuid = req.params.uuid;
    if (!isUuid(uuid)) {
        const mojang_response = await makeRequest(res, `https://api.ashcon.app/mojang/v2/user/${uuid}`);
        if (mojang_response?.data?.uuid) {
            uuid = mojang_response.data.uuid.replace(/-/g, '');
       } 
    }
    const cachedData = cache.get(uuid);
    if (cachedData) {
        // If cached data is found, return it instead of making an API request
        console.log("found cached data: " + uuid)
        return res.status(200).json({ status: 200, data: cachedData });
    }

    console.log("no cache found: " + uuid)
    //const playerRes = await makeRequest(res, `https://api.hypixel.net/v2/player?key=${process.env.HYPIXEL_API_KEY}&uuid=${uuid}`);
    //const player = parseHypixel(playerRes, uuid, res);
    
    const profileRes = await axios.get(`https://api.hypixel.net/v2/skyblock/profiles?key=${process.env.HYPIXEL_API_KEY}&uuid=${uuid}`);
    const profile = await parseProfiles(profileRes, uuid, res);
    cache.set(uuid, profile);

    return res.status(200).json({ status: 200, data: profile });
});
