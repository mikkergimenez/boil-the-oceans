export default {
  axeSharpness: {
    id: 'axeSharpness',
    text: {
      beforeLink: "With",
      link: "sharper axes, ",
      afterLink: "we could chop faster."
    },
    name: "Axe Sharpness",
    baseCost: 15,
    multiplier: 1.15,
    costs: "energy",
    incomeRate: 0.1,
    industry: "lumber",
  },
  sawTeam: {
    id: 'sawTeam',
    text: {
      beforeLink: "But we should be investing in the newer technologies, like these saws!  The",
      link: "two person teams ",
      afterLink: "we can form will perform as efficiently as five persons did before!",
    },
    name: "Saw Team",
    peopleCost: 2,
    baseCost: 100,
    multiplier: 1.15,
    costs: "energy",
    incomeRate: 0.5,
    industry: "lumber",
  },
  sawMill: {
    id: 'sawMill',
    text: {
      beforeLink: "Unfortunately, the bigger our operation, the harder it is to haul wood to be cut to size.  We should",
      link: "construct buildings",
      afterLink: "near the forest, and cut the wood there.",
    },
    name: "Saw Mill",
    peopleCost: 16,
    baseCost: 500,
    multiplier: 1.15,
    costs: "energy",
    incomeRate: 4,
    industry: "lumber",
  },
  bellPit: {
    id: 'bellPit',
    text: {
      beforeLink: "",
      link: "Dig straight down",
      afterLink: "there's coal down there.  We'll lower someone down to mine it.",
    },
    name: "Bell Pit",
    baseCost: 3000,
    multiplier: 1.15,
    costs: "energy",
    incomeRate: 10,
    industry: "coal",
  },
  driftMine: {
    id: 'driftMine',
    text: {
      beforeLink: "The coal we can get digging straight down is limited, but ",
      link: "see that seam over there? ",
      afterLink: "We should dig a tunnel into the hill, starting at that point."
    },
    name: "Drift Mine",
    baseCost: 10000,
    multiplier: 1.15,
    costs: "energy",
    incomeRate: 40,
    industry: "coal",
  },
  oilWell: {
    id: 'oilWell',
    text: {
      beforeLink: "Black gold... Oil... There's oceans of it down there.  ",
      link: "This derrick ",
      afterLink: "will draw dark from the depths."
    },
    name: "Oil Well",
    baseCost: 40000,
    multiplier: 1.15,
    costs: "energy",
    incomeRate: 100,
    industry: "oil",
  },
  oilPlatform: {
    id: 'oilPlatform',
    text: {
      beforeLink: "Oil at land, oil at sea.  By floating a platform out into the ",
      link: "gulf ",
      afterLink: "we can drill down beneath earth's crust."
    },
    name: "Oil Field",
    baseCost: 200000,
    multiplier: 1.15,
    costs: "energy",
    incomeRate: 400,
    industry: "oil",
  },
  solarFarm: {
    id: 'solarFarm',
    text: {
      beforeLink: "Feel that?  The warmth of the sun on our face. ",
      link: "These panels can harness it's ",
      afterLink: "raw energy."
    },
    name: "Solar Farm",
    baseCost: 1666666,
    multiplier: 1.15,
    costs: "energy",
    incomeRate: 6666,
    industry: "renewable",
  },
  windMill: {
    id: 'windMill',
    text: {
      beforeLink: "The wind flowing across the hills, there's more than grain we can process with this. ",
      link: "We'll build giant windmills, ",
      afterLink: "with arms that scratch the earth."
    },
    name: "Wind Mill",
    baseCost: 123456789,
    multiplier: 1.15,
    costs: "energy",
    incomeRate: 98765,
    industry: "renewable",
  },
  tidalGenerator: {
    id: 'tidalGenerator',
    text: {
      beforeLink: "The tides ebb and flow with the waxing and waning of the moon.  We can ",
      link: "use this power to spin turbines, ",
      afterLink: "that will generate energy we can use to continue our boil"
    },
    name: "Tidal Generator",
    baseCost: 3999999999,
    multiplier: 1.15,
    costs: "energy",
    incomeRate: 999999,
    industry: "renewable",
  },
  nuclearReactor: {
    id: 'nuclearReactor',
    text: {
      beforeLink: "need more",
      link: "link",
      afterLink: ""
    },
    name: "Nuclear Reactor",
    baseCost: 75000000000,
    multiplier: 1.15,
    costs: "energy",
    incomeRate: 10000000,
    industry: "nuclear",
  },
  nuclearPlant: {
    id: 'nuclearPlant',
    text: {
      beforeLink: "need more",
      link: "link",
      afterLink: ""
    },
    name: "Nuclear Plant",
    baseCost: 500000000000,
    multiplier: 1.15,
    costs: "energy",
    incomeRate: 100000000, // Add one more 0?
    industry: "nuclear",
  },
  coldFusion: {
    id: 'coldFusion',
    text: {
      beforeLink: "need more",
      link: "link",
      afterLink: ""
    },
    name: "Cold Fusion",
    baseCost: 34000000000000,
    multiplier: 1.15,
    costs: "energy",
    incomeRate: 1000000000, // Add two more 0's?
    industry: "nuclear",
  }
}
