// Curated list of wildlife you have a reasonable chance of seeing on the Isle of Skye.
// Tag vocabularies:
//   group:    'bird' | 'mammal' | 'sea' | 'reptile' | 'insect'
//   habitats: 'sea' | 'cliff' | 'loch' | 'moor' | 'woodland' | 'mountain' | 'village' | 'sky'
//   size:     'tiny' (smaller than a sparrow) | 'small' (sparrow–pigeon) | 'medium' (pigeon–cat)
//           | 'large' (cat–dog) | 'huge' (bigger than a person / car-sized at sea)
//   colours: 'black' | 'white' | 'grey' | 'brown' | 'orange' | 'blue' | 'yellow' | 'red' | 'multi'
//   features: see CHARACTERISTICS below
window.SPECIES = [
  // ── BIRDS OF PREY ───────────────────────────────────────────────
  {
    id: 'golden-eagle', name: 'Golden eagle', latin: 'Aquila chrysaetos', emoji: '🦅',
    group: 'bird', habitats: ['moor','mountain','sky'], size: 'huge', colours: ['brown'],
    features: ['hooked-beak','soaring'],
    description: 'A massive dark-brown raptor with a golden nape, broad fingered wings, and a long tail. Soars over remote ridges.',
    where: 'High moor and mountain glens. Try the Cuillin, the Trotternish Ridge, or quiet inland passes — scan the skylines.',
    fact: 'A pair holds a territory of up to 200 km² and may use the same eyrie for decades.'
  },
  {
    id: 'white-tailed-eagle', name: 'White-tailed eagle', latin: 'Haliaeetus albicilla', emoji: '🦅',
    group: 'bird', habitats: ['sea','cliff','sky'], size: 'huge', colours: ['brown','white'],
    features: ['hooked-beak','white-tail','soaring'],
    description: '"Flying barn door" — the UK\'s biggest bird of prey. Massive plank-like wings and a short bright-white wedge tail.',
    where: 'Sea-lochs and coastal cliffs. Portree harbour boat trips and Loch na Keal regularly turn them up.',
    fact: 'Reintroduced to Scotland from Norway in the 1970s after being hunted to extinction here.'
  },
  {
    id: 'buzzard', name: 'Common buzzard', latin: 'Buteo buteo', emoji: '🦅',
    group: 'bird', habitats: ['moor','woodland','sky','village'], size: 'large', colours: ['brown'],
    features: ['hooked-beak','soaring'],
    description: 'The eagle you almost certainly saw. Broad-winged, brown, often perched on a fencepost or telegraph pole.',
    where: 'Everywhere. Roadside posts, pylons, soaring over fields. The default raptor on Skye.',
    fact: 'Their mewing "pee-yow" call is often mistaken for a bigger species.'
  },
  {
    id: 'hen-harrier', name: 'Hen harrier', latin: 'Circus cyaneus', emoji: '🦅',
    group: 'bird', habitats: ['moor','sky'], size: 'large', colours: ['grey','brown','white'],
    features: ['hooked-beak'],
    description: 'Slim, low-flying raptor that glides on raised V-shaped wings over open moor. Males pale grey, females brown with white rump.',
    where: 'Quiet moorland — watch for one drifting low over heather, almost touching it.',
    fact: 'Performs a sky-dance courtship: tumbling rollercoaster dives above the territory.'
  },
  {
    id: 'peregrine', name: 'Peregrine falcon', latin: 'Falco peregrinus', emoji: '🦅',
    group: 'bird', habitats: ['cliff','sky','sea'], size: 'medium', colours: ['grey'],
    features: ['hooked-beak'],
    description: 'Compact, anchor-shaped silhouette. Slate-grey back, pale barred underside, black moustache mark.',
    where: 'Sea cliffs and rocky outcrops. Often noticed only when it scatters a flock of pigeons.',
    fact: 'The fastest animal on earth — clocked over 240 mph in a stoop.'
  },
  {
    id: 'kestrel', name: 'Kestrel', latin: 'Falco tinnunculus', emoji: '🦅',
    group: 'bird', habitats: ['moor','village','sky'], size: 'small', colours: ['brown','orange'],
    features: ['hooked-beak','hovering'],
    description: 'Small russet falcon that hovers, head perfectly still, scanning the grass below.',
    where: 'Roadside verges, rough grassland. The classic hovering raptor.',
    fact: 'Can see ultraviolet light — vole urine trails glow to them like roads.'
  },

  // ── SEABIRDS ────────────────────────────────────────────────────
  {
    id: 'puffin', name: 'Atlantic puffin', latin: 'Fratercula arctica', emoji: '🐧',
    group: 'bird', habitats: ['cliff','sea'], size: 'small', colours: ['black','white','orange'],
    features: ['colourful-beak'],
    description: 'Unmistakable: stout black-and-white seabird with a huge triangular orange-and-yellow beak and a clown\'s face.',
    where: 'Sea cliffs April–early August. Boat trips from Elgol or Portree, or further afield to the Shiants/Treshnish.',
    fact: 'They dig their own burrows up to a metre deep and return to the same one each year.'
  },
  {
    id: 'razorbill', name: 'Razorbill', latin: 'Alca torda', emoji: '🐦',
    group: 'bird', habitats: ['cliff','sea'], size: 'small', colours: ['black','white'],
    features: [],
    description: 'Penguin-like seabird, jet black above and white below, with a thick blunt black bill marked by a white stripe.',
    where: 'Same cliffs as guillemots and puffins. Often seen rafting on the sea below colonies.',
    fact: 'The closest living relative of the extinct great auk.'
  },
  {
    id: 'guillemot', name: 'Common guillemot', latin: 'Uria aalge', emoji: '🐦',
    group: 'bird', habitats: ['cliff','sea'], size: 'small', colours: ['brown','white'],
    features: [],
    description: 'Chocolate-brown above, white below, with a slim pointed bill. Packed onto cliff ledges in noisy crowds.',
    where: 'Tall sea cliffs in summer. Look for the dense rows along narrow ledges.',
    fact: 'Lays a single pear-shaped egg straight onto bare rock — the shape stops it rolling off.'
  },
  {
    id: 'fulmar', name: 'Fulmar', latin: 'Fulmarus glacialis', emoji: '🐦',
    group: 'bird', habitats: ['cliff','sea','sky'], size: 'medium', colours: ['white','grey'],
    features: ['stiff-wings'],
    description: 'Looks gull-ish but glides on stiff straight wings, never flapping. Tubular nostrils on top of the bill.',
    where: 'Anywhere along the coast. Cliffs everywhere. Watch for the rigid arcing flight.',
    fact: 'Defends its nest by projectile-vomiting foul stomach oil at intruders.'
  },
  {
    id: 'gannet', name: 'Northern gannet', latin: 'Morus bassanus', emoji: '🐦',
    group: 'bird', habitats: ['sea','sky'], size: 'large', colours: ['white','yellow'],
    features: ['long-wings'],
    description: 'Big brilliant-white seabird with black wingtips, a creamy-yellow head, and a sharp dagger bill. Plunge-dives like an arrow.',
    where: 'Offshore. Watch from the coast for the spectacular vertical dives into shoals.',
    fact: 'Has air sacs under its skin to cushion 100 km/h impacts with the sea.'
  },
  {
    id: 'kittiwake', name: 'Kittiwake', latin: 'Rissa tridactyla', emoji: '🐦',
    group: 'bird', habitats: ['cliff','sea'], size: 'medium', colours: ['white','grey'],
    features: [],
    description: 'Small dainty gull with grey wings tipped in pure ink-black ("dipped-in-ink") and dark legs.',
    where: 'Nests on cliff ledges in noisy colonies — listen for the loud "kitti-WAKE!" call.',
    fact: 'The most ocean-going of our gulls; spends winters far out in the North Atlantic.'
  },
  {
    id: 'shag', name: 'European shag', latin: 'Gulosus aristotelis', emoji: '🐦',
    group: 'bird', habitats: ['cliff','sea'], size: 'large', colours: ['black'],
    features: ['iridescent','long-neck'],
    description: 'All-black with an oily green sheen and a tufted crest in breeding plumage. Often stands wing-out drying.',
    where: 'Rocky islets and coastal cliffs. Look low on the water as it hunts.',
    fact: 'Smaller and slimmer than a cormorant, and almost always coastal — not freshwater.'
  },
  {
    id: 'black-guillemot', name: 'Black guillemot', latin: 'Cepphus grylle', emoji: '🐦',
    group: 'bird', habitats: ['sea','cliff'], size: 'small', colours: ['black','white','red'],
    features: ['red-feet'],
    description: 'Sooty black with a bold white wing-patch and scarlet feet and mouth. Locally called "tystie".',
    where: 'Harbours and rocky coasts year-round. Portree harbour is a good shout.',
    fact: 'Often nests in cracks and gaps in stone harbour walls.'
  },
  {
    id: 'arctic-tern', name: 'Arctic tern', latin: 'Sterna paradisaea', emoji: '🐦',
    group: 'bird', habitats: ['sea','sky','coast'], size: 'small', colours: ['white','grey','red'],
    features: ['forked-tail','red-beak'],
    description: 'Silvery-grey with a black cap, blood-red bill, and long forked tail streamers — a "sea swallow".',
    where: 'Coastal beaches and islands in summer. Will dive-bomb you near colonies.',
    fact: 'Makes the longest migration of any animal — pole to pole, ~70,000 km a year.'
  },

  // ── WATERFOWL & WADERS ─────────────────────────────────────────
  {
    id: 'eider', name: 'Eider duck', latin: 'Somateria mollissima', emoji: '🦆',
    group: 'bird', habitats: ['sea','coast'], size: 'medium', colours: ['black','white','brown'],
    features: ['webbed-feet'],
    description: 'Bulky sea duck. Males pied black-and-white with a peach blush. Females rich barred brown.',
    where: 'Sheltered bays and sea-lochs. Listen for the male\'s soft "ooo-OOH" coo.',
    fact: 'Their down — plucked from the female\'s breast — is the warmest natural insulator known.'
  },
  {
    id: 'merganser', name: 'Red-breasted merganser', latin: 'Mergus serrator', emoji: '🦆',
    group: 'bird', habitats: ['sea','loch'], size: 'medium', colours: ['multi'],
    features: ['webbed-feet'],
    description: 'Long slim "saw-bill" duck. Males have a bottle-green spiky head, white collar and rusty breast; females rufous-headed.',
    where: 'Sea-lochs and freshwater lochs. Often in small parties diving for fish.',
    fact: 'Their serrated bills grip slippery prey — they\'re built like a feathered fishing spear.'
  },
  {
    id: 'red-throated-diver', name: 'Red-throated diver', latin: 'Gavia stellata', emoji: '🦆',
    group: 'bird', habitats: ['loch','sea'], size: 'large', colours: ['grey','red'],
    features: ['long-neck'],
    description: 'Sleek low-floating waterbird. Grey neck with a rich red throat-patch in summer; tilts head upwards.',
    where: 'Quiet hill lochans in summer for breeding; sea-lochs in winter.',
    fact: 'Known in Gaelic as "learga", with a wailing flight call once thought to foretell rain.'
  },
  {
    id: 'grey-heron', name: 'Grey heron', latin: 'Ardea cinerea', emoji: '🐦',
    group: 'bird', habitats: ['loch','sea','coast'], size: 'large', colours: ['grey','white'],
    features: ['long-legs','long-neck','dagger-beak'],
    description: 'Tall hunched grey-and-white bird with a long dagger bill. Stands frozen in shallow water.',
    where: 'Loch edges, river mouths, kelp beds at low tide.',
    fact: 'Flies with neck folded in an S-shape, not stretched like a stork or crane.'
  },
  {
    id: 'oystercatcher', name: 'Oystercatcher', latin: 'Haematopus ostralegus', emoji: '🐦',
    group: 'bird', habitats: ['coast','sea'], size: 'medium', colours: ['black','white','orange'],
    features: ['long-legs','dagger-beak'],
    description: 'Pied black-and-white wader with a long, vivid orange bill and pink legs. Noisy "kleep-kleep" call.',
    where: 'Rocky shores and grassy fields near the coast. Very common.',
    fact: 'Individuals specialise — some hammer mussels open, others prise; chicks learn the family technique.'
  },
  {
    id: 'curlew', name: 'Curlew', latin: 'Numenius arquata', emoji: '🐦',
    group: 'bird', habitats: ['moor','coast'], size: 'large', colours: ['brown'],
    features: ['long-legs','curved-beak'],
    description: 'Largest UK wader. Mottled brown with a very long, smoothly down-curved bill.',
    where: 'Moor in summer, estuary mud in winter. The bubbling spring call is unforgettable.',
    fact: 'The Gaelic name "guilbneach" — listen for the rising "cur-lee" cry that gives them their name.'
  },

  // ── OTHER BIRDS ────────────────────────────────────────────────
  {
    id: 'raven', name: 'Raven', latin: 'Corvus corax', emoji: '🐦‍⬛',
    group: 'bird', habitats: ['moor','cliff','sky','mountain'], size: 'large', colours: ['black'],
    features: ['iridescent'],
    description: 'Huge all-black corvid with a heavy bill, shaggy throat, and a wedge-shaped tail. Deep "cronk" call.',
    where: 'Mountain crags and remote moor. Often seen tumbling acrobatically on the wind.',
    fact: 'Pairs mate for life and can live over 20 years in the wild.'
  },
  {
    id: 'hooded-crow', name: 'Hooded crow', latin: 'Corvus cornix', emoji: '🐦',
    group: 'bird', habitats: ['moor','village','coast'], size: 'medium', colours: ['grey','black'],
    features: [],
    description: 'Crow-sized with a smart pale-grey body and a black hood, wings and tail. Replaces the carrion crow in NW Scotland.',
    where: 'Pretty much everywhere on Skye. Roadsides, beaches, villages.',
    fact: 'Drops shellfish onto rocks from a height to crack them open.'
  },
  {
    id: 'cuckoo', name: 'Cuckoo', latin: 'Cuculus canorus', emoji: '🐦',
    group: 'bird', habitats: ['moor','woodland'], size: 'medium', colours: ['grey'],
    features: [],
    description: 'Looks a little like a sparrowhawk in flight — slim grey bird with barred underparts and a long tail.',
    where: 'Moorland edges in May and June. You\'ll usually hear the famous call before you see it.',
    fact: 'Meadow pipits raise most of Skye\'s cuckoo chicks without realising.'
  },
  {
    id: 'skylark', name: 'Skylark', latin: 'Alauda arvensis', emoji: '🐦',
    group: 'bird', habitats: ['moor'], size: 'small', colours: ['brown'],
    features: [],
    description: 'Streaky brown ground bird with a small crest. Often heard before seen — singing while hovering high overhead.',
    where: 'Rough grassland and moor. The ceaseless song from a tiny dot in the sky.',
    fact: 'Can sing continuously for several minutes while ascending vertically.'
  },
  {
    id: 'meadow-pipit', name: 'Meadow pipit', latin: 'Anthus pratensis', emoji: '🐦',
    group: 'bird', habitats: ['moor'], size: 'small', colours: ['brown'],
    features: [],
    description: 'Small streaky brown-olive bird with a thin "seep-seep" call as it flits between heather clumps.',
    where: 'The default little brown bird of Skye moors.',
    fact: 'The unwitting host parent for most of Skye\'s cuckoo chicks.'
  },
  {
    id: 'stonechat', name: 'Stonechat', latin: 'Saxicola rubicola', emoji: '🐦',
    group: 'bird', habitats: ['moor'], size: 'small', colours: ['black','orange','white'],
    features: [],
    description: 'Robin-sized. Males have a black head, white collar and rust-orange breast. Perches conspicuously on gorse tops.',
    where: 'Heath and gorsey scrub. The call sounds like two pebbles knocked together.',
    fact: 'They are one of the very few small birds you can reliably watch out in the open on the moor.'
  },
  {
    id: 'wheatear', name: 'Wheatear', latin: 'Oenanthe oenanthe', emoji: '🐦',
    group: 'bird', habitats: ['moor','mountain','coast'], size: 'small', colours: ['grey','white','orange'],
    features: ['white-tail'],
    description: 'Smart small bird with a grey back, peachy breast, and a startling white rump that flashes as it flies.',
    where: 'Stony ground anywhere — moorland, mountain tops, even rocky shores.',
    fact: 'Migrates from sub-Saharan Africa each spring, one of the longest migrations of any small bird.'
  },

  // ── LAND MAMMALS ───────────────────────────────────────────────
  {
    id: 'red-deer', name: 'Red deer', latin: 'Cervus elaphus', emoji: '🦌',
    group: 'mammal', habitats: ['moor','mountain','woodland'], size: 'huge', colours: ['brown'],
    features: ['antlers'],
    description: 'Britain\'s largest land mammal. Rich red-brown in summer, greyer in winter. Stags carry big branched antlers.',
    where: 'Open hillside almost anywhere. Herds graze freely across the Trotternish and the Cuillin foothills.',
    fact: 'Stags shed and regrow their antlers every year — antler bone grows faster than any other mammal tissue.'
  },
  {
    id: 'roe-deer', name: 'Roe deer', latin: 'Capreolus capreolus', emoji: '🦌',
    group: 'mammal', habitats: ['woodland','moor'], size: 'large', colours: ['brown'],
    features: ['antlers','white-tail'],
    description: 'Smaller, daintier deer than the red. Foxy-red in summer, with a bold white rump patch. Bucks have small straight antlers.',
    where: 'Forest edges and scrubby ground. Often glimpsed at dawn or dusk.',
    fact: 'They have delayed implantation — fawns from a summer mating aren\'t born until the next May.'
  },
  {
    id: 'highland-cow', name: 'Highland cow', latin: 'Bos taurus', emoji: '🐂',
    group: 'mammal', habitats: ['moor','village'], size: 'huge', colours: ['orange','brown'],
    features: ['horned','shaggy'],
    description: 'Shaggy ginger cattle with a long fringe and huge sweeping horns. Calm, photogenic, and used to people.',
    where: 'Roadside fields and rough grazing. Several semi-wild herds wander free on Skye.',
    fact: 'Their double-layered coat means they don\'t need barns even in winter — the outer layer sheds water.'
  },
  {
    id: 'mountain-hare', name: 'Mountain hare', latin: 'Lepus timidus', emoji: '🐇',
    group: 'mammal', habitats: ['moor','mountain'], size: 'medium', colours: ['brown','white'],
    features: ['white-tail'],
    description: 'Smaller and stockier than a brown hare, with shorter ears. Grey-brown in summer, partly or fully white in winter.',
    where: 'Higher heather moorland. Sit still — they will pop their heads up.',
    fact: 'The only native hare in Scotland; the brown hare was introduced by the Romans.'
  },
  {
    id: 'red-squirrel', name: 'Red squirrel', latin: 'Sciurus vulgaris', emoji: '🐿️',
    group: 'mammal', habitats: ['woodland'], size: 'small', colours: ['orange','brown'],
    features: ['bushy-tail'],
    description: 'Small bright-russet squirrel with a feathered tail and prominent ear tufts in winter.',
    where: 'Rare on Skye itself but possible in mainland-side woodlands en route. Always worth a check.',
    fact: 'Their tail acts as a rudder, balance pole, signal flag, and a duvet when curled around them in winter.'
  },
  {
    id: 'pine-marten', name: 'Pine marten', latin: 'Martes martes', emoji: '🦡',
    group: 'mammal', habitats: ['woodland'], size: 'small', colours: ['brown'],
    features: ['bushy-tail'],
    description: 'Cat-sized woodland weasel with rich chocolate fur and a creamy yellow bib. Long bushy tail.',
    where: 'Skye martens are very scarce — neighbouring mainland forests are a better bet. Sometimes raid bird tables at dusk.',
    fact: 'Mainly nocturnal and one of the hardest UK mammals to see — a real lucky tick.'
  },
  {
    id: 'otter', name: 'Eurasian otter', latin: 'Lutra lutra', emoji: '🦦',
    group: 'mammal', habitats: ['sea','loch','coast'], size: 'medium', colours: ['brown'],
    features: ['webbed-feet','long-tail'],
    description: 'Sleek brown swimmer, thick-tailed, often with just head and tip-of-tail showing as it rolls under to fish.',
    where: 'Quiet sea-lochs at low tide, especially around dawn. Kylerhea is the classic Skye spot.',
    fact: 'Skye is one of the very best places in the UK to see otters in salt water.'
  },

  // ── SEA MAMMALS & FISH ─────────────────────────────────────────
  {
    id: 'common-seal', name: 'Common seal', latin: 'Phoca vitulina', emoji: '🦭',
    group: 'mammal', habitats: ['sea','coast'], size: 'large', colours: ['grey','brown'],
    features: [],
    description: 'V-shaped nostrils and a short, dog-like face. Hauls out singly or in small groups on skerries.',
    where: 'Sheltered bays and sea-lochs. Often seen "bottling" — vertical in the water with just the head poking up.',
    fact: 'Also called the harbour seal — and despite the name, less common around Skye than the grey seal.'
  },
  {
    id: 'grey-seal', name: 'Grey seal', latin: 'Halichoerus grypus', emoji: '🦭',
    group: 'mammal', habitats: ['sea','coast'], size: 'huge', colours: ['grey'],
    features: [],
    description: 'Bigger and bulkier than the common seal, with a long horse-like ("Roman-nosed") face. Bulls can top 300 kg.',
    where: 'Skerries, sea caves and rocky islets. The default seal on the wilder coasts.',
    fact: 'Pups are born snow-white and stay ashore for three weeks of intense fattening before they ever swim.'
  },
  {
    id: 'harbour-porpoise', name: 'Harbour porpoise', latin: 'Phocoena phocoena', emoji: '🐬',
    group: 'sea', habitats: ['sea'], size: 'large', colours: ['grey','black'],
    features: ['fin'],
    description: 'Small, shy cetacean — about 1.5 m. Short triangular dorsal fin, slow rolling surface, no bow-riding.',
    where: 'Sheltered sounds and sea-lochs. The Sound of Sleat and the Kyles are reliable.',
    fact: 'The UK\'s smallest and commonest cetacean — easy to overlook because they barely break the surface.'
  },
  {
    id: 'bottlenose-dolphin', name: 'Bottlenose dolphin', latin: 'Tursiops truncatus', emoji: '🐬',
    group: 'sea', habitats: ['sea'], size: 'huge', colours: ['grey'],
    features: ['fin'],
    description: 'Big robust dolphin with a stubby beak and a tall sickle-shaped fin. Often breaches clean out of the water.',
    where: 'Open coast — the Sound of Raasay and offshore around Skye in summer.',
    fact: 'Scottish bottlenoses are the largest in the world — cold-water adaptation.'
  },
  {
    id: 'minke-whale', name: 'Minke whale', latin: 'Balaenoptera acutorostrata', emoji: '🐳',
    group: 'sea', habitats: ['sea'], size: 'huge', colours: ['grey','black'],
    features: ['fin'],
    description: 'Smallest baleen whale. Dark slate back, sharply pointed snout, prominent curved fin two-thirds back.',
    where: 'Offshore from May to October. The Minch is the local hotspot — boat trips are best.',
    fact: 'Surfaces with a "shhhh-PUFF" rather than a big spout — easy to miss in any chop.'
  },
  {
    id: 'basking-shark', name: 'Basking shark', latin: 'Cetorhinus maximus', emoji: '🦈',
    group: 'sea', habitats: ['sea'], size: 'huge', colours: ['grey','brown'],
    features: ['fin'],
    description: 'A car-sized fin and a snout cruising at the surface. The world\'s second-largest fish, but eats only plankton.',
    where: 'West coast in mid-to-late summer. Watch for a triangular fin and a tail fin trailing well behind.',
    fact: 'Can filter the equivalent of an Olympic swimming pool of water through its gills every hour.'
  },

  // ── REPTILES & AMPHIBIANS ──────────────────────────────────────
  {
    id: 'adder', name: 'Adder', latin: 'Vipera berus', emoji: '🐍',
    group: 'reptile', habitats: ['moor','woodland'], size: 'small', colours: ['grey','brown','black'],
    features: ['zigzag'],
    description: 'The UK\'s only venomous snake. Stocky, with a clear dark zigzag down the back. Males silvery, females coppery.',
    where: 'Basking on sun-warmed banks and paths on dry mornings. Watch your step in heather.',
    fact: 'Bites are very rare and almost never serious for adults — but keep dogs back if you see one.'
  },
  {
    id: 'common-lizard', name: 'Common lizard', latin: 'Zootoca vivipara', emoji: '🦎',
    group: 'reptile', habitats: ['moor','coast'], size: 'tiny', colours: ['brown'],
    features: [],
    description: 'Small brown lizard, often patterned with darker spots and a pale stripe. Basks then darts under heather.',
    where: 'Sunny patches on boardwalks, stones and old fence posts.',
    fact: 'Gives birth to live young rather than laying eggs — an adaptation to cool northern climates.'
  },

  // ── INSECTS ─────────────────────────────────────────────────────
  {
    id: 'common-blue', name: 'Common blue butterfly', latin: 'Polyommatus icarus', emoji: '🦋',
    group: 'insect', habitats: ['moor','coast'], size: 'tiny', colours: ['blue','brown'],
    features: [],
    description: 'Males are vivid violet-blue above; females mostly brown with blue dusting. Both have orange-spotted undersides.',
    where: 'Flowery coastal turf and grassy banks on warm days, May–September.',
    fact: 'Britain\'s most widespread blue butterfly, but the only blue you\'ll commonly see on Skye.'
  },
  {
    id: 'golden-ringed-dragonfly', name: 'Golden-ringed dragonfly', latin: 'Cordulegaster boltonii', emoji: '🦗',
    group: 'insect', habitats: ['loch','moor'], size: 'small', colours: ['black','yellow'],
    features: ['striped'],
    description: 'Huge dragonfly — Britain\'s longest. Boldly striped black-and-gold body, bright green eyes.',
    where: 'Patrols streams and bog pools on warm days. The unmistakable hawking flight.',
    fact: 'Larvae spend up to five years living in stream-bed gravel before a single summer of flight.'
  },
];

// Vocabularies for the wizard. Keep ordered by typical "narrowing power".
window.CHARACTERISTICS = {
  groups: [
    { key: 'bird',    label: 'Bird',                  emoji: '🐦' },
    { key: 'mammal',  label: 'Land mammal',           emoji: '🦌' },
    { key: 'sea',     label: 'Whale / dolphin / shark', emoji: '🐬' },
    { key: 'reptile', label: 'Reptile or amphibian',  emoji: '🦎' },
    { key: 'insect',  label: 'Insect',                emoji: '🦋' },
  ],
  habitats: [
    { key: 'sea',      label: 'Open sea',             emoji: '🌊' },
    { key: 'coast',    label: 'Beach / shoreline',    emoji: '🏖️' },
    { key: 'cliff',    label: 'Sea cliffs',           emoji: '⛰️' },
    { key: 'loch',     label: 'Loch or river',        emoji: '💧' },
    { key: 'moor',     label: 'Moor / heath',         emoji: '🌾' },
    { key: 'woodland', label: 'Woodland',             emoji: '🌲' },
    { key: 'mountain', label: 'Mountain / high ridge', emoji: '🏔️' },
    { key: 'sky',      label: 'In flight, high up',   emoji: '☁️' },
    { key: 'village',  label: 'Road / village / garden', emoji: '🏘️' },
  ],
  sizes: [
    { key: 'tiny',   label: 'Tiny',     hint: 'smaller than a sparrow' },
    { key: 'small',  label: 'Small',    hint: 'sparrow to pigeon' },
    { key: 'medium', label: 'Medium',   hint: 'pigeon to cat' },
    { key: 'large',  label: 'Large',    hint: 'cat to dog' },
    { key: 'huge',   label: 'Huge',     hint: 'bigger than a person' },
  ],
  colours: [
    { key: 'black',  label: 'Black',  swatch: '#1c1917' },
    { key: 'white',  label: 'White',  swatch: '#fafaf9' },
    { key: 'grey',   label: 'Grey',   swatch: '#78716c' },
    { key: 'brown',  label: 'Brown',  swatch: '#78350f' },
    { key: 'orange', label: 'Orange / rust', swatch: '#ea580c' },
    { key: 'red',    label: 'Red',    swatch: '#b91c1c' },
    { key: 'yellow', label: 'Yellow', swatch: '#eab308' },
    { key: 'blue',   label: 'Blue',   swatch: '#1d4ed8' },
    { key: 'multi',  label: 'Multi-coloured', swatch: 'linear-gradient(135deg,#dc2626,#eab308,#15803d,#1d4ed8)' },
  ],
  features: [
    { key: 'antlers',        label: 'Antlers' },
    { key: 'horned',         label: 'Horns' },
    { key: 'bushy-tail',     label: 'Bushy tail' },
    { key: 'long-tail',      label: 'Long tail' },
    { key: 'white-tail',     label: 'White rump / tail flash' },
    { key: 'webbed-feet',    label: 'Webbed feet' },
    { key: 'hooked-beak',    label: 'Hooked beak (raptor)' },
    { key: 'colourful-beak', label: 'Colourful beak' },
    { key: 'dagger-beak',    label: 'Long straight dagger beak' },
    { key: 'curved-beak',    label: 'Long curved beak' },
    { key: 'long-legs',      label: 'Long legs' },
    { key: 'long-neck',      label: 'Long neck' },
    { key: 'forked-tail',    label: 'Forked tail' },
    { key: 'soaring',        label: 'Soaring on broad wings' },
    { key: 'hovering',       label: 'Hovering' },
    { key: 'stiff-wings',    label: 'Gliding on stiff straight wings' },
    { key: 'long-wings',     label: 'Very long pointed wings' },
    { key: 'fin',            label: 'Dorsal fin breaking the water' },
    { key: 'zigzag',         label: 'Zigzag pattern' },
    { key: 'striped',        label: 'Striped' },
    { key: 'iridescent',     label: 'Glossy / iridescent sheen' },
    { key: 'shaggy',         label: 'Shaggy / long coat' },
    { key: 'red-feet',       label: 'Red feet' },
    { key: 'red-beak',       label: 'Red beak' },
  ],
};

// Wikipedia article slugs — used to fetch a reference photo per species.
// Falls back to emoji if a slug is missing or the fetch fails.
window.WIKI_SLUGS = {
  'golden-eagle':            'Golden_eagle',
  'white-tailed-eagle':      'White-tailed_eagle',
  'buzzard':                 'Common_buzzard',
  'hen-harrier':             'Hen_harrier',
  'peregrine':               'Peregrine_falcon',
  'kestrel':                 'Common_kestrel',
  'puffin':                  'Atlantic_puffin',
  'razorbill':               'Razorbill',
  'guillemot':               'Common_murre',
  'fulmar':                  'Northern_fulmar',
  'gannet':                  'Northern_gannet',
  'kittiwake':               'Black-legged_kittiwake',
  'shag':                    'European_shag',
  'black-guillemot':         'Black_guillemot',
  'arctic-tern':             'Arctic_tern',
  'eider':                   'Common_eider',
  'merganser':               'Red-breasted_merganser',
  'red-throated-diver':      'Red-throated_loon',
  'grey-heron':              'Grey_heron',
  'oystercatcher':           'Eurasian_oystercatcher',
  'curlew':                  'Eurasian_curlew',
  'raven':                   'Common_raven',
  'hooded-crow':             'Hooded_crow',
  'cuckoo':                  'Common_cuckoo',
  'skylark':                 'Eurasian_skylark',
  'meadow-pipit':            'Meadow_pipit',
  'stonechat':               'European_stonechat',
  'wheatear':                'Northern_wheatear',
  'red-deer':                'Red_deer',
  'roe-deer':                'Roe_deer',
  'highland-cow':            'Highland_cattle',
  'mountain-hare':           'Mountain_hare',
  'red-squirrel':            'Red_squirrel',
  'pine-marten':             'European_pine_marten',
  'otter':                   'Eurasian_otter',
  'common-seal':             'Harbour_seal',
  'grey-seal':               'Grey_seal',
  'harbour-porpoise':        'Harbour_porpoise',
  'bottlenose-dolphin':      'Common_bottlenose_dolphin',
  'minke-whale':             'Common_minke_whale',
  'basking-shark':           'Basking_shark',
  'adder':                   'Vipera_berus',
  'common-lizard':           'Viviparous_lizard',
  'common-blue':             'Polyommatus_icarus',
  'golden-ringed-dragonfly': 'Cordulegaster_boltonii',
};
