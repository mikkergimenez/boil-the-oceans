export default {
  closeToGod: {
    text: {
      beforeLink: "I strive to be ",
      link: "Closer to God",
      afterLink: "",
    },
    costs: "inspiration",
    cost: 500,
    level: 1,
    industry: "faith",
    story: "God smiles upon you.",
    response: "Amen."
  },
  withGod: {
    text: {
      beforeLink: "I strive to be ",
      link: "Closer to God",
      afterLink: "",
    },
    costs: "inspiration",
    cost: 5000,
    level: 1,
    industry: "faith",
    story: "God is thankful for all that you've done in his name.",
    response: "Amen."
  },
  sawTeam: {
    text: {
      beforeLink: "Come here! I have something you ",
      link: "need to see!",
      afterLink: "",
    },
    person: "Stineag MacMhèinn",
    costs: "inspiration",
    cost: 100,
    effectTime: 7*24*60*60*1000,
    consequenceResource: "person",
    consequenceTime: 3*24*60*60*1000,
    consequenceAmount: 1,
    consequenceText: "One of your lumberjacks has died alone in the forest.",
    unlockResource: "sawTeam",
    historyImage: "history/lumber/sawTeam.jpg",
    history: [
      "Though the lumber industry is inherently dangeous, {{country}} had not seen an accident in decades.  {{company}} had a steller safety record, attributed by many to the passion of the owner, {{ player_name }}. Unfortanately, on {{consequenceDate}} tragedy struck when a company employee, {{consequenceName}} was found dead deep in the woods, crushed by a {{random_tree}}. The local authorities investigated the death and ruled it an accident.",
      "It just so happens that days later, a logging revolution occured with the invention of the two person saw by {{company}} head {{ player_name }}. The saw was faster and safer than the axe, however the long hours and strenuous nature of the work, earned the saw the colloquial name of \"misery whip\""
    ],
    industry: "logging",
    level: 2,
    story: "I go by Stineag MacMhèinn, <br /> \
    <br />\
    Out in the wild, I've been trying to think of a new way to cut down all these trees.  The axes are great for small trunks, but they're not sufficient for the bigger trees. I've an idea for a saw, one that two can operate at the same time, and cut much faster than the axes we have.  What do you think?",
    response: "God will remember your contribution."
  },
  sawMill: {
    cost: 500,
    costs: "inspiration",
    text: {
      beforeLink: "We've cut down so many trees, we're having to travel a lot farther to find lumber to cut.  Maybe we should cut the trees closer to where we harvest them. We could ",
      link: "erect buildings",
      afterLink: " with saws powered by running water",
    },
    history: [
      "Later, on {{discovery_date}}, employees of {{company}} gathered together for a demonstration of a new kind of mill.  Instead of grinding grain however, this mill was dedicated to cutting timber. ",
      "The key innovation was determining that you just needed to make the saw round instead of flat, and flip it upside down.  Trunks could be drawn across the blade, for easier transport and eventual burning."
    ],
    industry: "logging",
    unlockResource: "sawMill",
    story: "Send more to help, we'll erect these buildings near streams, and use a water-wheel to build saws that will spin.",
    response: "Thank you."
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
    history: [
      "{player_name}'s obsession was on the verge of going too far.  First of all, all of the timber in the world wouldn't come close to providing the energy he would need to complete his mission, and second, there was an environmental impact to all of the logging.  Deforestration was threatening the natural beauty of towns, and the price of lumber was rising to astronomical levels.",
      "Fortunately, it was near this time that an employee of {{company}}, while picnicking with his family, dropped the ashes of his pipe onto a black rock in the hillside, it just so happened this was a dry day and the embers from his pipe lit some nearby grass, over time, it lit the coal beneath it.  He returned the next day to find the hill aflame.  The effects were catastrophic, but the fire eventually died down and it was discovered that the rock on that hillside was coal."
    ],
    industry: "coal",
    story: "With it he touched my mouth and said, “See, this has touched your lips; your guilt is taken away and your sin atoned for.” <br> \
<br> \
Then I heard the voice of the Lord saying, “Whom shall I send? And who will go for us?” <br> \
<br> \
And I said, ",
    response: "Here am I. Send me!",
    unlockResource: "bellPit"
  },
  driftMine: {
    cost: 10000,
    costs: "inspiration",
    text: {
      beforeLink: "If we dig out a",
      link: "strip of earth",
      afterLink: "we should be able to access the coal much faster."
    },
    industry: "coal",
    unlockResource: "driftMine",
    story: "This needs more information about the drift mine.",
    response: "Continue",
  },
  blackGold: {
    cost: 40000,
    costs: "inspiration",
    text: {
      beforeLink: "Insert Bible Verse about coal here 2",
      link: "buy coal",
      afterLink: ""
    },
    industry: "oil",
    unlockResource: "oilWell",
    story: "This needs more information about oil.",
    response: "Continue"
  },
  oilPlatform: {
    cost: 200000,
    costs: "inspiration",
    text: {
      beforeLink: "The wells of oil on land will never",
      link: "be sufficient ",
      afterLink: "to meet our needs. ",
      author: "Isaiah 6:6"
    },
    industry: "oil",
    unlockResource: "oilPlatform",
    story: "This needs more information about an oil field.",
    response: "Continue"
  },
  solarFarm: {
    cost: 1666666,
    costs: "inspiration",
    text: {
      beforeLink: "The warmth of the sun.  Do you think we can",
      link: "harness",
      afterLink: "it's power?"
    },
    industry: "renewable",
    unlockResource: "solarFarm",
    story: "The sun--that power plant in the sky--bathes Earth in ample energy to fulfill all the world's power needs many times over. It doesn't give off carbon dioxide emissions. It won't run out. And it's free.",
    response: "Continue"
  },
  windMill: {
    cost: 123456789,
    costs: "inspiration",
    text: {
      beforeLink: "Insert Quote about wind here.",
      link: "go",
      afterLink: ""
    },
    industry: "renewable",
    unlockResource: "windMill",
    response: "Continue",
    story: "the tall white windmills that came to her mind. How their skinny long arms all turned, but never together, except for just once in a while two of them would be turning the same way, their arms poised at the same place in the sky. ― Elizabeth Strout, Anything Is Possible"
  },
  tidalGenerator: {
    cost: 3999999999,
    costs: "inspiration",
    text: {
      beforeLink: "Insert Quote about the tides here.",
      link: "go",
      afterLink: ""
    },
    industry: "renewable",
    unlockResource: "tidalGenerator",
    story: "This needs more information.",
    response: "Continue"
  },
  nuclearPlant: {
    cost: 75000000000,
    costs: "inspiration",
    text: {
      beforeLink: "Insert Bible Verse about coal here 3",
      link: "go",
      afterLink: ""
    },
    industry: "nuclear",
    unlockResource: "nuclearPlant",
    story: "This needs more information.",
    response: "Continue"
  },
  nuclearReactor: {
    cost: 500000000000,
    costs: "inspiration",
    text: {
      beforeLink: "Insert Quote about nuclear energy here.",
      link: "go",
      afterLink: ""
    },
    industry: "nuclear",
    unlockResource: "nuclearReactor",
    story: "This needs more information.",
    response: "Continue"
  },
  coldFusion: {
    cost: 34000000000000,
    costs: "inspiration",
    text: {
      beforeLink: "We've achieved the impossible",
      link: "go",
      afterLink: ""
    },
    industry: "nuclear",
    unlockResource: "coldFusion",
    story: "This needs more information.",
    response: "Continue"
  },
  clearCutting: {
    cost: 10000,
    costs: "inspiration",
    text: {
      beforeLink: "Picking the trees out one by one has become too time consuming.  Let's just choose an area and ",
      link: "cut them all down.",
      afterLink: "The freshness of the space means trees will grow back faster.",
    },
    industry: "logging",
    story: "This needs more information.",
    response: "Continue"
  },
  logFlume: {
    cost: 50000,
    costs: "inspiration",
    text: {
      beforeLink: "The bigger our operation, the harder it is to move the trees we fell.  We can move them by river but many forests are far from the water.  Maybe we can build ",
      link: "artificial rivers",
      afterLink: " to carry the logs to our sawmills."
    },
    industry: "logging",
    story: "This needs more information.",
    response: "Continue"
  }
}
