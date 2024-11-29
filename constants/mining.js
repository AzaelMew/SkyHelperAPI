module.exports = {
    getHotM: function getHotM(experience) {
        let level = 0;
        let maxLevel = 10
        let experienceGroup = [0, 3000, 9000, 25000, 60000, 100000, 150000, 210000, 290000, 400000];
        for (let toRemove of experienceGroup) {
            experience -= toRemove;
            if (experience < 0) {
                return Math.min(level + (1 - (experience * -1) / toRemove), maxLevel);
            }
            level++;
        }
        return Math.min(level, maxLevel);
    },
    forgeItemTimes: {
        //REFINE ORE
        REFINED_DIAMOND: { duration: 28800000, name: 'Refined Diamond' }, //8h
        REFINED_MITHRIL: { duration: 21600000, name: 'Refined Mithril' }, //6h
        REFINED_TITANIUM: { duration: 43200000, name: 'Refined Titanium' }, //12h
        FUEL_TANK: { duration: 36000000, name: 'Fuel Tank' }, //10h
        BEJEWELED_HANDLE: { duration: 1800000, name: 'Bejeweled Handle' }, //30min
        DRILL_ENGINE: { duration: 108000000, name: 'Drill Engine' }, //1d 6h 30h
        GOLDEN_PLATE: { duration: 21600000, name: 'Golden Plate' }, //6h
        MITHRIL_PLATE: { duration: 64800000, name: 'Mithril Plate' }, //18h
        GEMSTONE_MIXTURE: { duration: 14400000, name: 'Gemstone Mixture' }, //4h
        PERFECT_JADE_GEM: { duration: 72000000, name: 'Perfect Jade Gemstone' }, //20h
        PERFECT_AMBER_GEM: { duration: 72000000, name: 'Perfect Amber Gemstone' }, //20h
        PERFECT_TOPAZ_GEM: { duration: 72000000, name: 'Perfect Topaz Gemstone' }, //20h
        PERFECT_SAPPHIRE_GEM: { duration: 72000000, name: 'Perfect Sapphire Gemstone' }, //20h
        PERFECT_AMETHYST_GEM: { duration: 72000000, name: 'Perfect Amethyst Gemstone' }, //20h
        PERFECT_JASPER_GEM: { duration: 72000000, name: 'Perfect Jasper Gemstone' }, //20h
        PERFECT_RUBY_GEM: { duration: 72000000, name: 'Perfect Ruby Gemstone' }, //20h
        //ITEM CASTING
        MITHRIL_PICKAXE: { duration: 2700000, name: 'Mithril Pickaxe' }, //45min
        BEACON_2: { duration: 72000000, name: 'Beacon 2' }, //20h
        TITANIUM_TALISMAN: { duration: 50400000, name: 'Titanium Talisman' }, //14h
        DIAMONITE: { duration: 21600000, name: 'Diamonite' }, //6h
        POWER_CRYSTAL: { duration: 7200000, name: 'Power Crystal' }, //2h 
        REFINED_MITHRIL_PICKAXE: { duration: 79200000, name: 'Refined Mithril Pickaxe' }, //22h
        MITHRIL_DRILL_1: { duration: 14400000, name: 'Mithril Drill SX-R226' }, //4h
        MITHRIL_FUEL_TANK: { duration: 36000000, name: 'Mithril-Infused Fuel Tank' }, //10h
        MITHRIL_DRILL_ENGINE: { duration: 54000000, name: 'Mithril-Plated Drill Engine' }, //15h
        BEACON_3: { duration: 108000000, name: 'Beacon 3' }, //1d 6h 30h
        TITANIUM_RING: { duration: 72000000, name: 'Titanium Ring' }, //20h
        PURE_MITHRIL: { duration: 43200000, name: 'Pure Mithril' }, //12h
        ROCK_GEMSTONE: { duration: 79200000, name: 'Rock Gemstone' }, //22h
        PETRIFIED_STARFALL: { duration: 50400000, name: 'Pertrified Starfall' }, //14h
        GOBLIN_OMELETTE_PESTO: { duration: 72000000, name: 'Pesto Goblin Omelette' }, //20h
        AMMONITE: { duration: 1036800000, name: 'Ammonite' },//12d 
        GEMSTONE_DRILL_1: { duration: 3600000, name: 'Ruby Drill TX-15' }, //1h
        MITHRIL_DRILL_2: { duration: 30000, name: 'Mithril Drill SX-R326' }, //30sec
        TITANIUM_DRILL_ENGINE: { duration: 108000000, name: 'Titanium-Plated Drill Engine' }, //1d 6h 30h
        GOBLIN_OMELETTE: { duration: 64800000, name: 'Goblin Omelette' }, //18h
        BEACON_4: { duration: 144000000, name: 'Beacon 4' }, //1d 16h 40h
        TITANIUM_ARTIFACT: { duration: 129600000, name: 'Titanium Artifact' }, //1d 12h 36h
        HOT_STUFF: { duration: 86400000, name: 'Hot Stuff' }, //1d
        GOBLIN_OMELETTE_SUNNY_SIDE: { duration: 72000000, name: 'Sunny Side Goblin Omelette' }, //20h
        GEMSTONE_DRILL_2: { duration: 30000, name: 'Gemstone Drill LT-522' }, //30sec
        TITANIUM_DRILL_1: { duration: 230400000, name: 'Titanium Drill DR-X355' }, //2d 16h 64h
        TITANIUM_DRILL_2: { duration: 30000, name: 'Titanium Drill DR-X455' }, //30sec
        TITANIUM_DRILL_3: { duration: 30000, name: 'Titanium Drill DR-X555' }, //30sec
        TITANIUM_FUEL_TANK: { duration: 90000000, name: 'Titanium-Infused Fuel Tank' }, //1d 1h 25h
        BEACON_5: { duration: 180000000, name: 'Beacon 5' }, //2d 2h 50h
        TITANIUM_RELIC: { duration: 259200000, name: 'Titanium Relic' }, //3d 72h
        GOBLIN_OMELETTE_SPICY: { duration: 72000000, name: 'Spicy Goblin Omelette' }, //20h
        GEMSTONE_CHAMBER: { duration: 14400000, name: 'Gemstone Chamber' }, //4h
        GEMSTONE_DRILL_3: { duration: 30000, name: 'Topaz Drill KGR-12' }, //30sec
        RUBY_POLISHED_DRILL_ENGINE: { duration: 72000000, name: 'Ruby-polished Drill Engine' }, //20h
        GEMSTONE_FUEL_TANK: { duration: 108000000, name: 'Gemstone Fuel Tank' }, //1d 6h 30h
        GOBLIN_OMELETTE_BLUE_CHEESE: { duration: 72000000, name: 'Blue Cheese Goblin Omelette' }, //20h
        TITANIUM_DRILL_4: { duration: 30000, name: 'Titanium Drill DR-X655' }, //30sec
        GEMSTONE_DRILL_4: { duration: 30000, name: 'Jasper Drill 10' }, //30sec
        SAPPHIRE_POLISHED_DRILL_ENGINE: { duration: 108000000, name: 'Sapphire-polished Drill Engine' }, //1d 6h 30h
        AMBER_MATERIAL: { duration: 25200000, name: 'Amber Material' }, //7h
        DIVAN_HELMET: { duration: 82800000, name: 'Helmet Of Divan' }, //23h
        DIVAN_CHESTPLATE: { duration: 82800000, name: 'Chestplate Of Divan' }, //23h
        DIVAN_LEGGINGS: { duration: 82800000, name: 'Leggings Of Divan' }, //23h
        DIVAN_BOOTS: { duration: 82800000, name: 'Boots Of Divan' }, //23h
        AMBER_POLISHED_DRILL_ENGINE: { duration: 180000000, name: 'Amber-polished Drill Engine' }, //2d 2h 50h
        PERFECTLY_CUT_FUEL_TANK: { duration: 180000000, name: 'Perfectly-Cut Fuel Tank' }, //2d 2h 50h
        DIVAN_DRILL: { duration: 216000000, name: 'Divan\'s Drill' }, //2d 12h 60h,
        CRYSTAL_HOLLOWS_TRAVEL_SCROLL: { duration: 36000000, name: 'Travel Scroll to the Crystal Hollows' }, //10h
        FORGE_TRAVEL_SCROLL: { duration: 18000000, name: 'Travel Scroll to the Dwarven Forge' }, //5h
    }
}