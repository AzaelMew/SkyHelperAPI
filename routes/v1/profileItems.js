//CREDIT: https://github.com/Senither/hypixel-skyblock-facade (Modified)
const { isUuid } = require('../../utils/uuid');
const { makeRequest, wrap } = require('../../utils/request');
const { parseProfileItems, parseHypixel } = require('../../utils/hypixel');
let num =  1
let api = "0897c9a2-68d5-4040-a0a4-deaa283b1495"
module.exports = wrap(async function (req, res) {
    if (num == 0){
        api = "0897c9a2-68d5-4040-a0a4-deaa283b1495"
        num = 1
    }
    else if (num == 1){
        api = "60ab3b23-ab19-4761-b0e6-523ede97e0b7"
        num = 0
    }
    const profileid = req.params.profileid;
    let uuid = req.params.uuid;
    if (!isUuid(uuid)) {
        const mojang_response = await makeRequest(res, `https://api.ashcon.app/mojang/v2/user/${uuid}`);
        if (mojang_response?.data?.uuid) {
            uuid = mojang_response.data.uuid.replace(/-/g, '');
        }
    }

    const playerRes = await makeRequest(res, `https://api.hypixel.net/player?key=${api}&uuid=${uuid}`);
    const player = parseHypixel(playerRes, uuid, res);

    const profileRes = await makeRequest(res, `https://api.hypixel.net/skyblock/profiles?key=${api}&uuid=${uuid}`);
    const profile = await parseProfileItems(player, profileRes, uuid, profileid, res);

    return res.status(200).json({ status: 200, data: profile });
});
