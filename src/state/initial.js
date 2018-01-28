export default {
  game: {
    started: false,
    technologyStory: {
      shown: false,
      id: ""
    },
    companyFounding: "",
    flashMessage: ""
  },
  date: '',
  resources: {
    energy: 0,
    people: 1, // This should be one again when we merge
    inspiration: 0,
    buildings: {

    },
    technologies: {

    },

    unlockedReligion: ["people"],

    purchasedReligion: {
      people: {
        count: 1
      },
      evangelist: {
        count: 0
      },
      bishop: {
        count: 0
      }
    },

    purchasedTechnologies: [], // {name, date}

    unlockedBuildings: [],
    purchasedBuildings: {
      axeSharpness: {
        count: 1
      }
    }
  }
}

// Cursor	                15	            0.1
// Grandma                100	            0.5
// Farm                   500             4
// Factory                3,000	          10
// Mine                   10,000	        40
// Shipment               40,000	        100
// Alchemy Lab            200,000	        400
// Portal                 1,666,666	      6,666
// Time Machine           123,456,789	    98,765
// Antimatter Condenser   3,999,999,999	  999,999
// Prism                  75,000,000,000	10,000,000
