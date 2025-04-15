/**
 * @param { import("knex").Knex } knex
 */
exports.seed = async function (knex) {

  await knex('places').del()

  await knex('places').insert([
    {
      name: "George Street",
      picture: "George-Street.jpg",
      location: "Downtown St. John's",
      description: "George Street is two blocks of bars, pubs, restaurants - and nothing else. It's the centre of the entertainment district and its unique reputation has spread far and wide. It has inspired songs and stories, and has been a magnet for musicians and their fans for decades."
    },
    {
      name: "Signal Hill",
      picture: "Signal-Hill.jpg",
      location: "St. John's",
      description: "Signal Hill is a National Historic Site where Marconi received the first transatlantic wireless signal in 1901. It's also a popular hiking and lookout spot with sweeping views of St. John's harbour and the Atlantic Ocean."
    },
    {
      name: "Cape Spear",
      picture: "Cape-Spear.jpg",
      location: "East of St. John's",
      description: "Cape Spear is the easternmost point in North America and home to Newfoundland’s oldest surviving lighthouse. Visitors go to see the crashing waves, watch the sunrise, and feel like they're on the edge of the world."
    },
    {
      name: "The Battery",
      picture: "The-Battery.jpg",
      location: "St. John's",
      description: "The Battery is a neighbourhood within St. John's that sits on the entrance to the harbour, on the slopes of Signal Hill. It's sometimes described as an outport within the city and is noted for its steep slopes, and colourful houses. You'll want to take it in on foot, as it's very narrow and difficult to manuever with a vehicle."
    },
    {
      name: "Downtown",
      picture: "Downtown-SJ.jpg",
      location: "St. John's",
      description: "Downtown St. John's is the historic core, and central business district of the city. Located north of the harbour, it's the business, entertainment, and tourism centre with office buildings, hotels, restaurants, and colourful rainbow houses scattered throughout the area on several different streets."
    },
    {
      name: "Fogo Island",
      picture: "Fogo-Island.jpg",
      location: "Five and a half hours northwest of St. John's",
      description: "Fogo Island is the largest island of Newfoundland and Labrador's lengthy coast. While the province is often seen as a destination for outdoor adventurers and cultural explorers, Fogo Island has become a unique, stand-out destination for lovers of art and architecture. Central to that shift is the Fogo Island Inn, a luxury hotel set next to the sea along the rocky coastline featuring rooftop hot tubs, a library and decor based on local traditions."
    },
    {
      name: "Bonavista",
      picture: "Bonavista.jpg",
      location: "Three and a half hours from St. John's",
      description: "The small fishing town of Bonavista is etched in history as the historic site of Cabot's landing, where Italian explorer Giovanni Caboto first discovered North America in 1497. Today, Bonavista is a quaint town of colourful homes along rocky shores and pebbled beaches. There are numerous heritage attractions in the area, from old buildings and museums to classic coastal lighthouses, but the oldest thing a visitor will see on their visit is the 20,000-year-old icebergs as they float on by."
    },
    {
      name: "Gros Morne",
      picture: "Gros-Morne.jpg",
      location: "nearby Deer Lake, on Newfoundland's west coast",
      description: "Gros Morne National Park is a world heritage site located on the west coast of Newfoundland. It's the second largest national park in Atlantic Canada. The park takes its name from Newfoundland's second-highest mountain peak located within the park. Gros Morne is a member of the Long Range Mountains, an outlying range of the Appalachian Mountains, stretching the length of the island's west coast. It is the eroded remnants of a mountain range formed 1.2 billion years ago. The Gros Morne National Park Reserve was established in 1973, but it wasn't until October 1, 2005 that the National Parks Act was applied to the reserve, thereby making it a Canadian National Park."
    },
    {
      name: "Dildo",
      picture: "Dildo-NL.jpg",
      location: "One hour west of St. John's",
      description: "First of all, get your head out of the gutter! Secondly, this is a real place. Nestled in Trinity Bay this picturesque town has always been a go-to destination for visitors. There's no shortage of people wanting their picture with the Welcome to Dildo sign or with the wooden statue of the town's mascot: Captain Dildo. It's hard to say who's more famous, the good captain or Jimmy Kimmel - the American late-night talk show host and also Dildo's honourary mayor who helped bring attention to the area back in 2019. Kimmel declared Dildo to be the sister city of Hollywood, even going so far as to build a Hollywood-style sign that now looks over the town."
    },
    {
      name: "Saint Pierre",
      picture: "Saint-Pierre.jpg",
      location: "Off the coast of Newfoundland",
      description: "Did you know that France is just off the coast of Newfoundland? Technically, that's true! Saint-Pierre and Miquelon is the last piece of French territory in North America. The 242-square-kilometre archipelago consists of eight islands collectively known as Saint-Pierre and Miquelon. The people who live there are citizens of France and even though you can reach the islands by ferry, the euro is the currency and you'll need an adapter for the electrical sockets."
    }
  ]);
};
