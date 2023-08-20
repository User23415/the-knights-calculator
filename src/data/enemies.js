import EnemyIcons from '@/assets/enemy-icons/index';
import EnemyAssets from '@/assets/enemies/index';
import CONTENTPACKS from '@/constants/content';
import ENEMYTYPES from '@/constants/enemy';

const enemies = [
  {
    name: 'aluba',
    health: { total: 1 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.aluba,
    image: EnemyAssets.aluba,
  },
  {
    name: 'ambloom',
    health: { total: 12 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.ambloom,
    image: EnemyAssets.ambloom,
  },
  {
    name: 'armoured squit',
    health: { total: 40 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.armouredSquit,
    image: EnemyAssets.armouredSquit,
  },
  {
    name: 'aspid hatchling',
    health: { total: 5 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.aspidHatchling,
    image: EnemyAssets.aspidHatchling,
  },
  {
    name: 'aspid hunter',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.aspidHunter,
    image: EnemyAssets.aspidHunter,
  },
  {
    name: 'aspid mother',
    health: { total: 20 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.aspidMother,
    image: EnemyAssets.aspidMother,
  },
  {
    name: 'baldur',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.baldur,
    image: EnemyAssets.baldur,
  },
  {
    name: 'battle obble',
    health: { total: 70 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.battleObble,
    image: EnemyAssets.battleObble,
  },
  {
    name: 'belfy',
    health: { total: 5 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.belfly,
    image: EnemyAssets.belfly,
  },
  {
    name: 'bluggsac',
    health: { total: 20 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.bluggsac,
    image: EnemyAssets.bluggsac,
  },
  {
    name: 'boofly',
    health: { total: 40 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.boofly,
    image: EnemyAssets.boofly,
  },
  {
    name: 'carver hatcher',
    health: { total: 35 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.carverHatcher,
    image: EnemyAssets.carverHatcher,
  },
  {
    name: 'corpse creeper',
    health: {
      total: 33,
      phase: {
        1: 18,
        2: 15,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.corpseCreeper,
    image: EnemyAssets.corpseCreeper,
  },
  {
    name: 'cowardly husk',
    health: { total: 20 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.cowardlyHusk,
    image: EnemyAssets.cowardlyHusk,
  },
  {
    name: 'crawlid',
    health: { total: 8 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.crawlid,
    image: EnemyAssets.crawlid,
  },
  {
    name: 'crystal crawler',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.crystalCrawler,
    image: EnemyAssets.crystalCrawler,
  },
  {
    name: 'crystal hunter',
    health: { total: 25 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.crystalHunter,
    image: EnemyAssets.crystalHunter,
  },
  {
    name: 'crystallised husk',
    health: { total: 35 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.crystallisedHusk,
    image: EnemyAssets.crystallisedHusk,
  },
  {
    name: 'death loodle',
    health: { total: 45 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.deathLoodle,
    image: EnemyAssets.deathLoodle,
  },
  {
    name: 'deephunter',
    health: { total: 18 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.deephunter,
    image: EnemyAssets.deephunter,
  },
  {
    name: 'deepling',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.deepling,
    image: EnemyAssets.deepling,
  },
  {
    name: 'dirtcarver',
    health: { total: 20 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.dirtcarver,
    image: EnemyAssets.dirtcarver,
  },
  {
    name: 'duranda',
    health: { total: 30 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.duranda,
    image: EnemyAssets.duranda,
  },
  {
    name: 'durandoo',
    health: { total: 30 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.durandoo,
    image: EnemyAssets.durandoo,
  },
  {
    name: 'elder baldur',
    health: { total: 60 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.elderBaldur,
    image: EnemyAssets.elderBaldur,
  },

  {
    name: 'entombed husk',
    health: { total: 45 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.entombedHusk,
    image: EnemyAssets.entombedHusk,
  },
  {
    name: 'flukefey',
    health: { total: 13 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.flukefey,
    image: EnemyAssets.flukefey,
  },
  {
    name: 'flukemon',
    health: {
      total: 55,
      phase: {
        1: 25,
        2: 30,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.flukemon,
    image: EnemyAssets.flukemon,
  },
  {
    name: 'flukemunga',
    health: { total: 150 },
    origin: CONTENTPACKS.GODMASTER,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.flukemunga,
    image: EnemyAssets.flukemunga,
  },
  {
    name: 'folly',
    health: { total: 13 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.folly,
    image: EnemyAssets.folly,
  },
  {
    name: 'fool eater',
    health: { total: 16 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.foolEater,
    image: EnemyAssets.foolEater,
  },
  {
    name: 'fungified husk',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.fungifiedHusk,
    image: EnemyAssets.fungifiedHusk,
  },
  {
    name: 'fungling',
    health: { total: 10 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.fungling,
    image: EnemyAssets.fungling,
  },
  {
    name: 'fungoon',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.fungoon,
    image: EnemyAssets.fungoon,
  },
  {
    name: 'furious vengefly',
    health: { total: 40 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.furiousVengefly,
    image: EnemyAssets.furiousVengefly,
  },
  {
    name: 'glimback',
    health: { total: 35 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.glimback,
    image: EnemyAssets.glimback,
  },
  {
    name: 'gluttonous husk',
    health: { total: 30 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.gluttonousHusk,
    image: EnemyAssets.gluttonousHusk,
  },
  {
    name: 'great hopper',
    health: { total: 130 },
    origin: CONTENTPACKS.MAIN,
    type: [ENEMYTYPES.STANDARD, ENEMYTYPES.MINI_BOSS],
    icon: EnemyIcons.greatHopper,
    image: EnemyAssets.greatHopper,
  },
  {
    name: 'great husk sentry',
    health: { total: 170 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.greatHuskSentry,
    image: EnemyAssets.greatHuskSentry,
  },
  {
    name: 'grimmkin novice',
    health: {
      total: 50,
      nail: {
        0: 50,
        1: 90,
        2: 120,
        3: 140,
        4: 160,
      },
    },
    origin: CONTENTPACKS.THE_GRIMM_TROUPE,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.grimmkinNovice,
    image: EnemyAssets.grimmkinNovice,
  },
  {
    name: 'grimmkin master',
    health: {
      total: 75,
      nail: {
        0: 75,
        1: 120,
        2: 180,
        3: 210,
        4: 240,
      },
    },
    origin: CONTENTPACKS.THE_GRIMM_TROUPE,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.grimmkinMaster,
    image: EnemyAssets.grimmkinMaster,
  },
  {
    name: 'grimmkin nightmare',
    health: {
      total: 100,
      nail: {
        0: 100,
        1: 180,
        2: 240,
        3: 280,
        4: 320,
      },
    },
    origin: CONTENTPACKS.THE_GRIMM_TROUPE,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.grimmkinNightmare,
    image: EnemyAssets.grimmkinNightmare,
  },
  {
    name: 'grub mimic',
    health: { total: 45 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.grubMimic,
    image: EnemyAssets.grubMimic,
  },
  {
    name: 'gruzzer',
    health: { total: 8 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.gruzzer,
    image: EnemyAssets.gruzzer,
  },
  {
    name: 'gulka',
    health: { total: 10 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.gulka,
    image: EnemyAssets.gulka,
  },
  {
    name: 'heavy fool',
    health: { total: 90 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.heavyFool,
    image: EnemyAssets.heavyFool,
  },
  {
    name: 'heavy sentry',
    health: { total: 35 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.heavySentry,
    image: EnemyAssets.heavySentry,
  },
  {
    name: 'hive guardian',
    health: { total: 100 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.hiveGuardian,
    image: EnemyAssets.hiveGuardian,
  },
  {
    name: 'hive soldier',
    health: { total: 65 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.hiveSoldier,
    image: EnemyAssets.hiveSoldier,
  },
  {
    name: 'hiveling',
    health: { total: 18 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.hiveling,
    image: EnemyAssets.hiveling,
  },
  {
    name: 'hopper',
    health: { total: 50 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.hopper,
    image: EnemyAssets.hopper,
  },
  {
    name: 'hopping zoteling',
    health: { total: 20 },
    origin: CONTENTPACKS.HIDDEN_DREAMS,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.hoppingZoteling,
    image: EnemyAssets.hoppingZoteling,
  },
  {
    name: 'husk bully',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.huskBully,
    image: EnemyAssets.huskBully,
  },
  {
    name: 'husk dandy',
    health: { total: 20 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.huskDandy,
    image: EnemyAssets.huskDandy,
  },
  {
    name: 'husk guard',
    health: { total: 70 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.huskGuard,
    image: EnemyAssets.huskGuard,
  },
  {
    name: 'husk hive',
    health: { total: 60 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.huskHive,
    image: EnemyAssets.huskHive,
  },
  {
    name: 'husk hornhead',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.huskHornhead,
    image: EnemyAssets.huskHornhead,
  },
  {
    name: 'husk miner',
    health: { total: 25 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.huskMiner,
    image: EnemyAssets.huskMiner,
  },
  {
    name: 'husk sentry',
    health: {
      total: 25,
      nail: {
        0: 25,
        1: 28,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.huskSentry,
    image: EnemyAssets.huskSentry,
  },
  {
    name: 'husk warrior',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.huskWarrior,
    image: EnemyAssets.huskWarrior,
  },
  {
    name: 'hwurmp',
    health: { total: 25 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.hwurmp,
    image: EnemyAssets.hwurmp,
  },
  {
    name: 'infected balloon',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.infectedBalloon,
    image: EnemyAssets.infectedBalloon,
  },
  {
    name: 'kingsmould',
    health: { total: 170 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.kingsmould,
    image: EnemyAssets.kingsmould,
  },
  {
    name: 'lance sentry',
    health: { total: 25 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.lanceSentry,
    image: EnemyAssets.lanceSentry,
  },
  {
    name: 'leaping husk',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.leapingHusk,
    image: EnemyAssets.leapingHusk,
  },
  {
    name: 'lesser mawlek',
    health: { total: 60 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.lesserMawlek,
    image: EnemyAssets.lesserMawlek,
  },
  {
    name: 'lifseed',
    health: { total: 1 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.lifeseed,
    image: EnemyAssets.lifeseed,
  },
  {
    name: 'lightseed',
    health: { total: 1 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.lightseed,
    image: EnemyAssets.lightseed,
  },
  {
    name: 'little weaver',
    health: { total: 30 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.littleWeaver,
    image: EnemyAssets.littleWeaver,
  },
  {
    name: 'loodle',
    health: { total: 30 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.loodle,
    image: EnemyAssets.loodle,
  },
  {
    name: 'maggot',
    health: { total: 1 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.maggot,
    image: EnemyAssets.maggot,
  },
  {
    name: 'mantis petra',
    health: { total: 45 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.mantisPetra,
    image: EnemyAssets.mantisPetra,
  },
  {
    name: 'mantis traitor',
    health: { total: 74 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.mantisTraitor,
    image: EnemyAssets.mantisTraitor,
  },
  {
    name: 'mantis warrior',
    health: { total: 20 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.mantisWarrior,
    image: EnemyAssets.mantisWarrior,
  },
  {
    name: 'mantis youth',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.mantisYouth,
    image: EnemyAssets.mantisYouth,
  },
  {
    name: 'maskfly',
    health: { total: 1 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.maskfly,
    image: EnemyAssets.maskfly,
  },
  {
    name: 'mawlurk',
    health: { total: 135 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.mawlurk,
    image: EnemyAssets.mawlurk,
  },
  {
    name: 'menderbug',
    health: { total: 1 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.menderbug,
    image: EnemyAssets.menderbug,
  },
  {
    name: 'mistake',
    health: { total: 13 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.mistake,
    image: EnemyAssets.mistake,
  },
  {
    name: 'moss charger',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.massiveMossCharger,
    image: EnemyAssets.massiveMossCharger,
  },
  {
    name: 'moss knight',
    health: { total: 50 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.mossknight,
    image: EnemyAssets.mossknight,
  },
  {
    name: 'mosscreep',
    health: { total: 10 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.mosscreep,
    image: EnemyAssets.mosscreep,
  },
  {
    name: 'mossfly',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.mossfly,
    image: EnemyAssets.mossfly,
  },
  {
    name: 'mosskin',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.mosskin,
    image: EnemyAssets.mosskin,
  },
  {
    name: 'mossy vagabond',
    health: { total: 25 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.mossyVagabond,
    image: EnemyAssets.mossyVagabond,
  },
  {
    name: 'obble',
    health: { total: 10 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.obble,
    image: EnemyAssets.obble,
  },
  {
    name: 'ooma',
    health: { total: 1 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.ooma,
    image: EnemyAssets.ooma,
  },
  {
    name: 'pale lurker',
    health: {
      total: 200,
      nail: {
        0: 200,
        1: 240,
        2: 290,
        3: 340,
        4: 400,
      },
    },
    origin: CONTENTPACKS.GODMASTER,
    type: ENEMYTYPES.MINI_BOSS,
    icon: EnemyIcons.paleLurker,
    image: EnemyAssets.paleLurker,
  },
  {
    name: 'pilflip',
    health: { total: 30 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.pilflip,
    image: EnemyAssets.pilflip,
  },
  {
    name: 'primal aspid',
    health: { total: 35 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.primalAspid,
    image: EnemyAssets.primalAspid,
  },
  {
    name: 'royal retainer',
    health: { total: 5 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.royalRetainer,
    image: EnemyAssets.royalRetainer,
  },
  {
    name: 'shadow creeper',
    health: { total: 20 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.shadowCreeper,
    image: EnemyAssets.shadowCreeper,
  },
  {
    name: 'shardmite',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.shardmite,
    image: EnemyAssets.shardmite,
  },
  {
    name: 'sharp baldur',
    health: { total: 65 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.sharpBaldur,
    image: EnemyAssets.sharpBaldur,
  },
  {
    name: 'shielded fool',
    health: { total: 65 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.shieldedFool,
    image: EnemyAssets.shieldedFool,
  },
  {
    name: 'shrumal ogre',
    health: { total: 80 },
    origin: CONTENTPACKS.MAIN,
    type: [ENEMYTYPES.STANDARD, ENEMYTYPES.MINI_BOSS],
    icon: EnemyIcons.shrumalOgre,
    image: EnemyAssets.shrumalOgre,
  },
  {
    name: 'shrumal warrior',
    health: { total: 20 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.shrumalWarrior,
    image: EnemyAssets.shrumalWarrior,
  },
  {
    name: 'shrumeling',
    health: { total: 5 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.shrumeling,
    image: EnemyAssets.shrumeling,
  },
  {
    name: 'sibling',
    health: { total: 20 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.sibling,
    image: EnemyAssets.sibling,
  },
  {
    name: 'slobbering husk',
    health: { total: 30 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.slobberingHusk,
    image: EnemyAssets.slobberingHusk,
  },
  {
    name: 'soul twister',
    health: { total: 35 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.soulTwister,
    image: EnemyAssets.soulTwister,
  },
  {
    name: 'spiny husk',
    health: { total: 44 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.spinyHusk,
    image: EnemyAssets.spinyHusk,
  },
  {
    name: 'sporg',
    health: { total: 25 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.sporg,
    image: EnemyAssets.sporg,
  },
  {
    name: 'squit',
    health: { total: 10 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.squit,
    image: EnemyAssets.squit,
  },
  {
    name: 'stalking devout',
    health: { total: 100 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.stalkingDevout,
    image: EnemyAssets.stalkingDevout,
  },
  {
    name: 'sturdy fool',
    health: { total: 80 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.sturdyFool,
    image: EnemyAssets.sturdyFool,
  },
  {
    name: 'tiktik',
    health: { total: 8 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.tiktik,
    image: EnemyAssets.tiktik,
  },
  {
    name: 'uoma',
    health: { total: 1 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.uoma,
    image: EnemyAssets.uoma,
  },
  {
    name: 'vengefly',
    health: { total: 8 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.vengefly,
    image: EnemyAssets.vengefly,
  },
  {
    name: 'violent husk',
    health: { total: 40 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.violentHusk,
    image: EnemyAssets.violentHusk,
  },
  {
    name: 'volatile gruzzer',
    health: { total: 40 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.volatileGruzzer,
    image: EnemyAssets.volatileGruzzer,
  },
  {
    name: 'volatile mosskin',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.volatileMosskin,
    image: EnemyAssets.volatileMosskin,
  },
  {
    name: 'volatile zoteling',
    health: { total: 30 },
    origin: CONTENTPACKS.HIDDEN_DREAMS,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.volatileZoteling,
    image: EnemyAssets.volatileZoteling,
  },
  {
    name: 'volt twister',
    health: { total: 80 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.voltTwister,
    image: EnemyAssets.voltTwister,
  },
  {
    name: 'wandering husk',
    health: { total: 15 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.wanderingHusk,
    image: EnemyAssets.wanderingHusk,
  },
  {
    name: 'winged fool',
    health: { total: 70 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.wingedFool,
    image: EnemyAssets.wingedFool,
  },
  {
    name: 'winged sentry',
    health: { total: 25 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.wingedSentry,
    image: EnemyAssets.wingedSentry,
  },
  {
    name: 'winged zoteling',
    health: { total: 20 },
    origin: CONTENTPACKS.HIDDEN_DREAMS,
    type: ENEMYTYPES.STANDARD,
    icon: EnemyIcons.wingedZoteling,
    image: EnemyAssets.wingedZoteling,
  },
  {
    name: 'broken vessel',
    health: { total: 525 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.brokenVessel,
    image: EnemyAssets.brokenVessel,
  },
  {
    name: 'brooding mawlek',
    health: { total: 300 },
    origin: CONTENTPACKS.MAIN,
    type: [ENEMYTYPES.BOSS, ENEMYTYPES.MINI_BOSS],
    icon: EnemyIcons.broodingMawlek,
    image: EnemyAssets.broodingMawlek,
  },
  {
    name: 'collector',
    alias: 'the collector',
    health: {
      total: 750,
      nail: {
        0: 750,
        1: 750,
        2: 750,
        3: 800,
        4: 850,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.theCollector,
    image: EnemyAssets.theCollector,
  },
  {
    name: 'crystal guardian',
    health: { total: 280 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.crystalGuardian,
    image: EnemyAssets.crystalGuardian,
  },
  {
    name: 'dung defender',
    health: {
      total: 700,
      nail: {
        0: 700,
        1: 750,
        2: 800,
        3: 850,
        4: 900,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.dungDefender,
    image: EnemyAssets.dungDefender,
  },
  {
    name: 'elder hu',
    health: {
      total: 250,
      nail: {
        0: 250,
        1: 420,
        2: 550,
        3: 600,
        4: 650,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: [ENEMYTYPES.BOSS, ENEMYTYPES.DREAM],
    icon: EnemyIcons.elderHu,
    image: EnemyAssets.elderHu,
  },
  {
    name: 'false knight',
    health: {
      total: 355,
      phase: {
        1: 65 + 40,
        2: 65 + 40,
        3: 65 + 40,
        4: 40,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.falseKnight,
    image: EnemyAssets.falseKnight,
  },
  {
    name: 'flukemarm',
    health: { total: 350 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.flukemarm,
    image: EnemyAssets.flukemarm,
  },
  {
    name: 'galien',
    health: {
      total: 230,
      nail: {
        0: 230,
        1: 368,
        2: 479,
        3: 570,
        4: 640,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: [ENEMYTYPES.BOSS, ENEMYTYPES.DREAM],
    icon: EnemyIcons.galien,
    image: EnemyAssets.galien,
  },
  {
    name: 'god tamer',
    health: {
      total: 1050,
      split: [
        {
          name: 'tamer',
          health: 600,
        },
        {
          name: 'beast',
          health: 450,
        },
      ],
    },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.godTamer,
    image: EnemyAssets.godTamer,
  },
  {
    name: 'gorb',
    health: {
      total: 200,
      nail: {
        0: 200,
        1: 320,
        2: 416,
        3: 500,
        4: 570,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: [ENEMYTYPES.BOSS, ENEMYTYPES.DREAM],
    icon: EnemyIcons.gorb,
    image: EnemyAssets.gorb,
  },
  {
    name: 'great nailsage sly',
    health: {
      total: 1050,
      phase: {
        1: 800,
        2: 250,
      },
    },
    origin: CONTENTPACKS.GODMASTER,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.greatNailsageSly,
    image: EnemyAssets.greatNailsageSly,
  },
  {
    name: 'grey prince zote',
    health: {
      total: 1200,
      phase: {
        1: 1200,
        2: 1300,
        3: 1400,
        4: 1500,
        5: 1500,
        6: 1500,
        7: 1500,
        8: 1500,
        9: 1500,
        10: 1500,
      },
    },
    origin: CONTENTPACKS.HIDDEN_DREAMS,
    type: [ENEMYTYPES.BOSS, ENEMYTYPES.DREAM],
    icon: EnemyIcons.greyPrinceZote,
    image: EnemyAssets.greyPrinceZote,
  },
  {
    name: 'grimm',
    alias: 'troupe master grimm',
    health: {
      total: 800,
      nail: {
        0: 800,
        1: 800,
        2: 800,
        3: 930,
        4: 1000,
      },
    },
    origin: CONTENTPACKS.THE_GRIMM_TROUPE,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.troupeMasterGrimm,
    image: EnemyAssets.troupeMasterGrimm,
  },
  {
    name: 'gruz mother',
    health: { total: 90, variant: 140 },
    origin: CONTENTPACKS.MAIN,
    type: [ENEMYTYPES.BOSS, ENEMYTYPES.MINI_BOSS],
    icon: EnemyIcons.gruzMother,
    image: EnemyAssets.gruzMother,
  },
  {
    name: 'hive knight',
    health: {
      total: 800,
      nail: {
        0: 800,
        1: 800,
        2: 800,
        3: 850,
        4: 920,
      },
    },
    origin: CONTENTPACKS.LIFEBLOOD,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.hiveKnight,
    image: EnemyAssets.hiveKnight,
  },
  {
    name: 'hollow knight',
    alias: 'the hollow knight',
    health: {
      total: 1250,
      phase: {
        1: 250,
        2: 350,
        3: 400,
        4: 250,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.theHollowKnight,
    image: EnemyAssets.theHollowKnight,
  },
  {
    name: 'hornet',
    health: { total: 225, variant: 700 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.hornet,
    image: EnemyAssets.hornet,
  },
  {
    name: 'mantis lords',
    health: {
      total: 530,
      phase: {
        1: 210,
        2: 320,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.mantisLords,
    image: EnemyAssets.mantisLords,
  },
  {
    name: 'massive moss charger',
    health: { total: 100 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.MINI_BOSS,
    icon: EnemyIcons.massiveMossCharger,
    image: EnemyAssets.massiveMossCharger,
  },
  {
    name: 'markoth',
    health: {
      total: 250,
      nail: {
        0: 250,
        1: 400,
        2: 520,
        3: 624,
        4: 705,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: [ENEMYTYPES.BOSS, ENEMYTYPES.DREAM],
    icon: EnemyIcons.markoth,
    image: EnemyAssets.markoth,
  },
  {
    name: 'marmu',
    health: {
      total: 200,
      nail: {
        0: 200,
        1: 320,
        2: 416,
        3: 500,
        4: 570,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: [ENEMYTYPES.BOSS, ENEMYTYPES.DREAM],
    icon: EnemyIcons.marmu,
    image: EnemyAssets.marmu,
  },
  {
    name: 'nightmare king grimm',
    health: { total: 1500 },
    origin: CONTENTPACKS.THE_GRIMM_TROUPE,
    type: [ENEMYTYPES.BOSS, ENEMYTYPES.DREAM],
    icon: EnemyIcons.nightmareKingGrimm,
    image: EnemyAssets.nightmareKingGrimm,
  },
  {
    name: 'no eyes',
    health: {
      total: 200,
      nail: {
        0: 200,
        1: 320,
        2: 416,
        3: 500,
        4: 570,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: [ENEMYTYPES.BOSS, ENEMYTYPES.DREAM],
    icon: EnemyIcons.noEyes,
    image: EnemyAssets.noEyes,
  },
  {
    name: 'nosk',
    health: { total: 680 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.nosk,
    image: EnemyAssets.nosk,
  },
  {
    name: 'oblobbles',
    health: {
      total: 560,
      variant: 620,
      phase: {
        1: 260,
        2: 360,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.oblobble,
    image: EnemyAssets.oblobble,
  },
  {
    name: 'oro & mato',
    alias: 'brothers oro & mato',
    health: {
      total: 2100,
      phase: {
        1: 500,
        2: 1600,
      },
    },
    origin: CONTENTPACKS.GODMASTER,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.brothersOroMato,
    image: EnemyAssets.brothersOroMato,
  },
  {
    name: 'pure vessel',
    health: { total: 1600 },
    origin: CONTENTPACKS.GODMASTER,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.pureVessel,
    image: EnemyAssets.pureVessel,
  },
  {
    name: 'radiance',
    alias: 'the radiance',
    health: {
      total: 1700,
      phase: {
        1: 350,
        2: 400,
        3: 250,
        4: 700,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.theRadiance,
    image: EnemyAssets.theRadiance,
  },
  {
    name: 'sheo',
    alias: 'paintmaster sheo',
    health: { total: 950 },
    origin: CONTENTPACKS.GODMASTER,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.paintmasterSheo,
    image: EnemyAssets.paintmasterSheo,
  },
  {
    name: 'soul master',
    health: {
      total: 385,
      phase: {
        1: 275,
        2: 110,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.soulMaster,
    image: EnemyAssets.soulMaster,
  },
  {
    name: 'soul warrior',
    health: { total: 180, variant: 300 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.MINI_BOSS,
    icon: EnemyIcons.soulWarrior,
    image: EnemyAssets.soulWarrior,
  },
  {
    name: 'traitor lord',
    health: { total: 800 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.traitorLord,
    image: EnemyAssets.traitorLord,
  },
  {
    name: 'uumuu',
    health: { total: 300 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.uumuu,
    image: EnemyAssets.uumuu,
  },
  {
    name: 'vengefly king',
    health: { total: 55, variant: 100 },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.MINI_BOSS,
    icon: EnemyIcons.vengeflyKing,
    image: EnemyAssets.vengeflyKing,
  },
  {
    name: 'watcher knight',
    health: {
      total: 1320,
      nail: {
        0: 1320,
        1: 1320,
        2: 1320,
        3: 1440,
        4: 1560,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.watcherKnight,
    image: EnemyAssets.watcherKnight,
  },
  {
    name: 'white defender',
    health: {
      total: 1600,
    },
    origin: CONTENTPACKS.HIDDEN_DREAMS,
    type: [ENEMYTYPES.BOSS, ENEMYTYPES.DREAM],
    icon: EnemyIcons.whiteDefender,
    image: EnemyAssets.whiteDefender,
  },
  {
    name: 'xero',
    health: {
      total: 200,
      nail: {
        0: 200,
        1: 320,
        2: 416,
        3: 500,
        4: 570,
      },
    },
    origin: CONTENTPACKS.MAIN,
    type: [ENEMYTYPES.BOSS, ENEMYTYPES.DREAM],
    icon: EnemyIcons.xero,
    image: EnemyAssets.xero,
  },
  {
    name: 'zote',
    alias: 'zote the mighty',
    health: {
      total: 200,
    },
    origin: CONTENTPACKS.MAIN,
    type: ENEMYTYPES.BOSS,
    icon: EnemyIcons.zoteTheMighty,
    image: EnemyAssets.zoteTheMighty,
  },
];

export default enemies;
