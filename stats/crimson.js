const crimson = require('../constants/crimson.js');

module.exports = async (profile) => {
    if (profile && profile.nether_island_player_data) {
        const crimsonIsland = {
            factions: crimson.factions,
            matriarch: crimson.matriarch,
            kuudra_completed_tiers: crimson.kuudra_completed_tiers,
            dojo: crimson.dojo,
        }

        if (profile.nether_island_player_data.selected_faction) {
        crimsonIsland.factions.selected_faction = profile.nether_island_player_data.selected_faction
        }
        if (profile.nether_island_player_data.mages_reputation) {
        crimsonIsland.factions.mages_reputation = profile.nether_island_player_data.mages_reputation
        }
        if (profile.nether_island_player_data.barbarians_reputation) {
        crimsonIsland.factions.barbarians_reputation = profile.nether_island_player_data.barbarians_reputation
        }
        
        if (profile.nether_island_player_data.matriarch) {
            crimsonIsland.matriarch.pearls_collected = profile.nether_island_player_data.matriarch.pearls_collected
            crimsonIsland.matriarch.last_attempt = profile.nether_island_player_data.matriarch.last_attempt
        }

        if (profile.nether_island_player_data.kuudra_completed_tiers) {
            crimsonIsland.kuudra_completed_tiers.none = 0
            crimsonIsland.kuudra_completed_tiers.hot = 0
            crimsonIsland.kuudra_completed_tiers.burning = 0
            crimsonIsland.kuudra_completed_tiers.fiery = 0
            crimsonIsland.kuudra_completed_tiers.infernal = 0
            Object.keys(profile.nether_island_player_data.kuudra_completed_tiers).forEach((key) => {
                crimsonIsland.kuudra_completed_tiers[key] = 0
                crimsonIsland.kuudra_completed_tiers[key] = profile?.nether_island_player_data?.kuudra_completed_tiers[key] || 0
            })
        }
        
        
        if (profile.nether_island_player_data.dojo) {
            Object.keys(profile.nether_island_player_data.dojo).forEach((key) => {
                crimsonIsland.dojo[key.toUpperCase()] = profile.nether_island_player_data.dojo[key]
            })
        }

        return crimsonIsland;

    } else {
        return {
            factions: crimson.factions,
            matriarch: crimson.matriarch,
            kuudra_completed_tiers: crimson.kuudra_completed_tiers,
            dojo: crimson.dojo,
        };
    }
};
