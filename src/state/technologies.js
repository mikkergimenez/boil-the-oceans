export default {
  closeToGod: {
    text: {
      beforeLink: "I strive to be",
      link: "Closer to God",
      afterLink: "",
    },
    costs: "inspiration",
    cost: 500,
    level: 1,
    industry: "faith",
  },
  sawTeam: {
    text: {
      beforeLink: "Come here! I have something you ",
      link: "need to see!",
      afterLink: "",
    },
    costs: "inspiration",
    cost: 100,
    effectTime: 7*24*60*60*1000,
    consequenceResource: "person",
    consequenceTime: 3*24*60*60*1000,
    consequenceAmount: 1,
    consequenceText: "One of your lumberjacks has died alone in the forest.",
    unlockResource: "sawTeam",
    history: "Though the lumber industry is inherently dangeous, {{company}} had a steller safety record, until {{consequenceDate}}, when {{consequenceName}} was found dead in the forest , crushed by a giant {{random_tree}}.  Days later however, a logging revolution occured with the invention fo the two person saw.",
    industry: "logging",
    level: 2
  },
  sawMill: {
    cost: 500,
    costs: "inspiration",
    text: {
      beforeLink: "We've cut down so many trees, we're having to travel a lot farther to find lumber to cut.  Maybe we should cut the trees closer to where we harvest them.  We could ",
      link: "erect buildings",
      afterLink: " with saws powered by running water",
    },
    industry: "logging",
    unlockResource: "sawMill"
  },
  coal: {
    cost: 3000,
    costs: "inspiration",
    text: {
      beforeLink: "Then one of the seraphim flew to me with ",
      link: "a burning coal ",
      afterLink: "in his hand, which he had taken from the altar with tongs.",
      author: "Isaiah 6:6"
    },
    industry: "coal",
    unlockResource: "bellPit"
  },
  stripMine: {
    cost: 10000,
    costs: "inspiration",
    text: {
      beforeLink: "If we dig out a",
      link: "strip of earth",
      afterLink: "we should be able to access the coal much faster."
    },
    industry: "coal",
    unlockResource: "stripMine"
  },
  blackGold: {
    cost: 40000,
    costs: "inspiration",
    text: {
      beforeLink: "Insert Bible Verse about coal here 2",
      link: "",
      afterLink: ""
    },
    industry: "oil",
    unlockResource: "oilWell"
  },
  oilField: {
    cost: 200000,
    costs: "inspiration",
    text: {
      beforeLink: "Insert bible verse about oil here ",
      link: "",
      afterLink: "",
      author: "Isaiah 6:6"
    },
    industry: "oil",
    unlockResource: "oilField"
  },
  solarFarm: {
    cost: 1666666,
    costs: "inspiration",
    text: {
      beforeLink: "Insert Quote about the sun here.",
      link: "",
      afterLink: ""
    },
    industry: "renewable",
    unlockResource: "solarFarm"
  },
  windMill: {
    cost: 123456789,
    costs: "inspiration",
    text: {
      beforeLink: "Insert Quote about wind here.",
      link: "",
      afterLink: ""
    },
    industry: "renewable",
    unlockResource: "windMill"
  },
  tidalGenerator: {
    cost: 3999999999,
    costs: "inspiration",
    text: {
      beforeLink: "Insert Quote about the tides here.",
      link: "",
      afterLink: ""
    },
    industry: "renewable",
    unlockResource: "tidalGenerator"
  },
  nuclearPlant: {
    cost: 75000000000,
    costs: "inspiration",
    text: {
      beforeLink: "Insert Bible Verse about coal here 3",
      link: "",
      afterLink: ""
    },
    industry: "nuclear",
    unlockResource: "nuclearPlant"
  },
  nuclearReactor: {
    cost: 500000000000,
    costs: "inspiration",
    text: {
      beforeLink: "Insert Quote about nuclear energy here.",
      link: "",
      afterLink: ""
    },
    industry: "nuclear",
    unlockResource: "nuclearReactor"
  },
  coldFusion: {
    cost: 34000000000000,
    costs: "inspiration",
    text: {
      beforeLink: "We've achieved the impossible",
      link: "",
      afterLink: ""
    },
    industry: "nuclear",
    unlockResource: "coldFusion"
  },
  clearCutting: {
    cost: 10000,
    costs: "inspiration",
    text: {
      beforeLink: "Picking the trees out one by one has become too time consuming.  Let's just choose an area and ",
      link: "cut them all down.",
      afterLink: "The freshness of the space means trees will grow back faster.",
    },
    industry: "logging"
  },
  logFlume: {
    cost: 50000,
    costs: "inspiration",
    text: {
      beforeLink: "The bigger our operation, the harder it is to move the trees we fell.  We can move them by river but many forests are far from the water.  Maybe we can build ",
      link: "artificial rivers",
      afterLink: " to carry the logs to our sawmills."
    },
    industry: "logging"
  }
}
