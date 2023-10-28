export default [
  {
    id: 1,
    title: "Niagara Falls",
    description: "Niagara Falls is a breathtaking trio of waterfalls (Horseshoe Falls, American Falls, and Bridal Veil Falls) along the Niagara River. Witness the immense power and beauty of cascading water.",
    location: "Niagara Falls, Ontario, Canada, and Niagara Falls, New York, USA.",
    coords: {
      latitude: 43.087476458441856,
      longitude: -79.0727622427473
    },
    howToGet: "You can fly into Buffalo Niagara International Airport (BUF) or Toronto Pearson International Airport (YYZ). From there, you can take a taxi or shuttle to the falls.",
    time: "Late spring to early fall offers the best weather. Summer is popular, but crowds are larger. Winter can be magical if you don't mind the cold.",
    swimming: "Swimming is not allowed near the falls due to strong currents and safety concerns.",
    images: [
      require("../assets/niagara1.png"),
      require("../assets/niagara2.png"),
      require("../assets/NiagaraFalls1.png"),
      require("../assets/NiagaraFalls2.png"),
    ]
  },
  {
    id: 2,
    title: "Victoria Falls",
    description: "Known as the \"Smoke that Thunders,\" Victoria Falls is one of the largest and most spectacular waterfalls in the world. The spray creates rainbows in the mist.",
    location: "Livingstone, Zambia, and Victoria Falls, Zimbabwe.",
    coords: {
      latitude: -17.925306214289407,
      longitude: 25.858608698234402
    },
    howToGet: "Fly into Livingstone Airport (Zambia) or Victoria Falls Airport (Zimbabwe). The falls are a short drive from both airports.",
    time: "Visit during the dry season from May to October for the best waterfall views and activities.",
    swimming: "Swimming in the Devil's Pool (Zambian side) is possible during low water periods under the guidance of local guides.",
    images: [
      require("../assets/VictoriaFalls1.png"),
      require("../assets/VictoriaFalls2.png"),
    ]
  },
  {
    id: 3,
    title: "Iguazu Falls",
    description: "Iguazu Falls consists of 275 individual falls spread over nearly 2 miles. The surrounding rainforest adds to its allure.",
    location: "Iguazu National Park, Argentina, and Brazil.",
    coords: {
      latitude: -25.69059728764771,
      longitude: -54.44075355608646
    },
    howToGet: "Fly into Cataratas del Iguazú International Airport (Argentina) or Foz do Iguaçu International Airport (Brazil). Both are near the falls.",
    time: "Visit from April to September for pleasant weather and fewer crowds.",
    swimming: "Swimming is not permitted within the falls but is available in some nearby natural pools.",
    images: [
      require("../assets/Brazil1.png"),
      require("../assets/Brazil2.png"),
    ]
  },
  {
    id: 4,
    title: "Great Barrier Reef",
    description: "The Great Barrier Reef is the world's largest coral reef system, teeming with marine life and vibrant coral formations.",
    location: "Queensland, Australia.",
    coords: {
      latitude:-14.387698501321793,
      longitude:144.73454570776087
    },
    howToGet: "Fly into Cairns Airport and take a boat tour to the reef from there.",
    time: "May to November offers the best underwater visibility and weather conditions.",
    swimming: "Yes, swimming and snorkeling are popular activities, allowing you to explore the colorful marine world.",
    images: [
      require("../assets/Queensland1.png"),
      require("../assets/Queensland2.png"),
    ]
  },
  {
    id: 5,
    title: "Plitvice Lakes National Park",
    description: "This national park is a series of cascading lakes and waterfalls surrounded by lush forests. Wooden walkways provide easy access.",
    location: "Plitvice Lakes, Croatia.",
    coords: {
      latitude:44.865563863980526,
      longitude:15.58199043960694
    },
    howToGet: "Accessible by bus or car from major cities like Zagreb and Split.",
    time: "Late spring to early autumn when the weather is pleasant and the park is at its most beautiful.",
    swimming: "Swimming is not allowed in the lakes but is permitted in designated areas nearby.",
    images: [
      require("../assets/PlitviceLakes,Croatia1.png"),
      require("../assets/PlitviceLakes,Croatia2.png"),
      require("../assets/PlitviceLakes,Croatia3.png"),
      require("../assets/PlitviceLakes,Croatia4.png"),
    ]
  },
  {
    id: 6,
    title: "The Blue Hole",
    description: "The Blue Hole is a natural sinkhole in the sea, known for its crystal-clear waters and underwater arch. It's a diver's paradise.",
    location: "Gozo, Malta.",
    coords: {
      latitude:28.572672527571537,
      longitude:34.536963209255134
    },
    howToGet: "Take a ferry from Malta to Gozo, then drive to the Blue Hole.",
    time: "Visit between April and October for the best diving conditions.",
    swimming: "Yes, swimming and diving are popular here.",
    images: [
      require("../assets/Gozo,Malta1.png"),
      require("../assets/Gozo,Malta2.png"),
    ]
  },
  {
    id: 7,
    title: "Santorini",
    description: "Known for its stunning caldera views, Santorini features beautiful beaches, clear waters, and iconic white-washed buildings.",
    location: "Cyclades, Greece.",
    coords: {
      latitude:36.41983490521984,
      longitude:25.445347057051332
    },
    howToGet: "Fly into Santorini Airport or take a ferry from Athens or other Greek islands.",
    time: "Late spring to early autumn for warm weather and fewer crowds.",
    swimming: "Yes, the island offers various beaches for swimming.",
    images: [
      require("../assets/Cyclades,Greece1.png"),
      require("../assets/Cyclades,Greece2.png"),
    ]
  },
  {
    id: 8,
    title: "Lake Baikal",
    description: "Lake Baikal is the world's deepest freshwater lake and contains unique species of flora and fauna. It's surrounded by picturesque Siberian landscapes.",
    location: "Siberia, Russia.",
    coords: {
      latitude:52.98175819795802,
      longitude:107.71775391473851
    },
    howToGet: "Fly into Irkutsk Airport and then take a bus or train to Lake Baikal.",
    time: "Summer (June to August) is ideal for hiking and enjoying the lake.",
    swimming: "Yes, but the water is cold even in summer.",
    images: [
      require("../assets/Siberia,Russia1.png"),
      require("../assets/Siberia,Russia2.png"),
    ]
  },
  {
    id: 9,
    title: "Ha Long Bay",
    description: "Ha Long Bay is known for its emerald waters and thousands of limestone karsts rising from the sea, creating a surreal seascape.",
    location: "Quang Ninh Province, Vietnam.",
    coords: {
      latitude:20.84119959907961,
      longitude:107.07134697824932
    },
    howToGet: "Fly into Hanoi and then take a bus or cruise to Ha Long Bay.",
    time: "October to April for pleasant weather and fewer storms.",
    swimming: "Yes, you can swim in the bay, but be cautious of strong currents.",
    images: [
      require("../assets/QuangNinhProvince,Vietnam1.png"),
      require("../assets/QuangNinhProvince,Vietnam2.png"),
    ]
  },
  {
    id: 10,
    title: "Angel Falls",
    description: "Angel Falls is the world's highest uninterrupted waterfall, plunging from the Auyán-Tepui plateau in a dramatic fashion.",
    location: "Canaima National Park, Venezuela.",
    coords: {
      latitude:5.970135338749236,
      longitude:-62.53620770596917
    },
    howToGet: "Fly to Canaima Airport and then take a boat or hike to Angel Falls.",
    time: "Visit during the rainy season (June to November) when the falls are at their most spectacular.",
    swimming: "Swimming is not recommended due to strong currents and the remote location.",
    images: [
      require("../assets/CanaimaNationalPark,Venezuela1.png"),
      require("../assets/CanaimaNationalPark,Venezuela2.png"),
    ]
  },
  {
    id: 11,
    title: "Amoudi Bay",
    description: "This charming fishing village is famous for its stunning sunset views, crystal-clear waters, and seafood restaurants.",
    location: "Santorini, Greece.",
    coords: {
      latitude:36.462814320552816,
      longitude:25.367369316925952
    },
    howToGet: "Reach Amoudi Bay by car or a short walk from Oia on Santorini.",
    time: "Summer for the best weather and to enjoy the waterfront dining.",
    swimming: "Yes, it's a great spot for swimming and cliff jumping.",
    images: [
      require("../assets/Santorini,Greece1.png"),
      require("../assets/Santorini,Greece2.png"),
    ]
  },
  {
    id: 12,
    title: "Havasu Falls",
    description: "Havasu Falls is a stunning turquoise waterfall within the Grand Canyon, surrounded by red rock formations and lush vegetation.",
    location: "Havasu Canyon, Grand Canyon, Arizona, USA.",
    coords: {
      latitude:36.25539040816697,
      longitude:-112.69799107027221
    },
    howToGet: "Hike or take a helicopter from Hualapai Hilltop to Havasu Falls.",
    time: "Spring and autumn when the weather is mild and the campground is open.",
    swimming: "Yes, swimming is allowed and refreshing in the hot desert climate.",
    images: [
      require("../assets/HavasuCanyonUSA1.png"),
      require("../assets/HavasuCanyonUSA2.png"),
    ]
  },
  {
    id: 13,
    title: "Blue Lagoon",
    description: "The Blue Lagoon is a small, shallow bay with crystal-clear waters, perfect for swimming and snorkeling.",
    location: "Comino Island, Malta.",
    coords: {
      latitude:36.009882229813236,
      longitude:14.324755721488994
    },
    howToGet: "Take a ferry from Malta to Comino Island.",
    time: "Summer for warm water and sunny weather.",
    swimming: "Absolutely, it's one of the best spots for swimming and snorkeling in Malta.",
    images: [
      require("../assets/CominoIsland,Malta1.png"),
      require("../assets/CominoIsland,Malta2.png"),
    ]
  },
  {
    id: 14,
    title: "Pamukkale",
    description: "Pamukkale is famous for its terraces of white mineral-rich thermal waters, formed by centuries of calcium deposits.",
    location: "Denizli Province, Turkey.",
    coords: {
      latitude:37.916398153135326,
      longitude:29.117235411184286
    },
    howToGet: "Fly into Denizli Cardak Airport and then take a short drive to Pamukkale.",
    time: "Spring and autumn for pleasant weather.",
    swimming: "You can bathe in some of the thermal pools at Pamukkale, which are said to have healing properties.",
    images: [
      require("../assets/DenizliProvince,Turkey1.png"),
      require("../assets/DenizliProvince,Turkey2.png"),
    ]
  },
  {
    id: 15,
    title: "The Blue Grotto",
    description: "The Blue Grotto is a sea cave with dazzling blue waters, illuminated by sunlight passing through an underwater cavity.",
    location: "Capri, Italy.",
    coords: {
      latitude:37.916398153135326,
      longitude:29.117235411184286
    },
    howToGet: "Take a boat tour from the Marina Grande in Capri.",
    time: "Midday when the sunlight creates the brightest blue effect.",
    swimming: "Swimming inside the grotto is not allowed, but you can swim in the surrounding waters.",
    images: [
      require("../assets/Capri,Italy1.png"),
      require("../assets/Capri,Italy2.png"),
    ]
  },
  {
    id: 16,
    title: "The Maldives",
    description: "The Maldives is a tropical paradise consisting of over 1,000 coral islands, known for its overwater bungalows, clear turquoise waters, and vibrant marine life.",
    location: "Indian Ocean.",
    coords: {
      latitude:4.31473658045713,
      longitude:73.29050066523237
    },
    howToGet: "Fly into Velana International Airport in Malé, the capital of the Maldives.",
    time: "December to April for dry, sunny weather.",
    swimming: "Excellent for swimming and snorkeling in coral reefs.",
    images: [
      require("../assets/IndianOcean1.png"),
      require("../assets/IndianOcean2.png"),
    ]
  },
  {
    id: 17,
    title: "Antelope Canyon",
    description: "Antelope Canyon is a slot canyon known for its narrow, twisting passageways and stunning play of light and shadows on the sandstone walls.",
    location: "Page, Arizona, USA.",
    coords: {
      latitude:36.90251778798687,
      longitude:-111.41247766341722
    },
    howToGet: "Drive to Page, Arizona, and take a guided tour to Antelope Canyon.",
    time: "Spring and summer when sunlight beams through the openings.",
    swimming: "No swimming; it's a unique photography and hiking destination.",
    images: [
      require("../assets/Page,Arizona,USA1.png"),
      require("../assets/Page,Arizona,USA2.png"),
    ]
  },
  {
    id: 18,
    title: "Havasu Canyon",
    description: "Havasu Canyon features stunning blue-green waterfalls, including Havasu Falls, Mooney Falls, and Beaver Falls, within the Grand Canyon.",
    location: "Grand Canyon, Arizona, USA.",
    coords: {
      latitude:36.30933670785527,
      longitude:-112.76130686607051
    },
    howToGet: "Hike or take a helicopter from Hualapai Hilltop to Havasu Canyon.",
    time: "Spring and autumn for milder temperatures.",
    swimming: "Yes, swimming is allowed and encouraged in the pristine pools.",
    images: [
      require("../assets/GrandCanyon,Arizona,USA1.png"),
      require("../assets/GrandCanyon,Arizona,USA2.png"),
    ]
  },
  {
    id: 19,
    title: "Amalfi Coast",
    description: "The Amalfi Coast is a picturesque coastline with dramatic cliffs, charming villages, and crystal-clear waters of the Tyrrhenian Sea.",
    location: "Campania, Italy.",
    coords: {
      latitude:40.633419997912696,
      longitude:14.602875608763865
    },
    howToGet: "Fly into Naples International Airport and drive or take a bus along the Amalfi Coast.",
    time: "Late spring to early autumn for pleasant weather and fewer tourists.",
    swimming: "There are numerous beaches and hidden coves for swimming.",
    images: [
      require("../assets/Campania,Italy1.png"),
      require("../assets/Campania,Italy2.png"),
    ]
  },
  {
    id: 20,
    title: "Seljalandsfoss",
    description: "Seljalandsfoss is a mesmerizing waterfall that you can walk behind, providing a unique perspective of the cascading water.",
    location: "South Region, Iceland.",
    coords: {
      latitude:63.61572705731351,
      longitude:-19.988577353598824
    },
    howToGet: "Drive along the Ring Road in Iceland to reach Seljalandsfoss.",
    time: "Summer when daylight is extended and paths are less icy.",
    swimming: "Swimming is not allowed due to strong currents, but the waterfall's beauty is worth the visit.",
    images: [
      require("../assets/SouthRegion,Iceland1.png"),
      require("../assets/SouthRegion,Iceland2.png"),
    ]
  },
]
