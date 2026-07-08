/**
 * cities.ts — where the business operates.
 *
 * EDIT HERE. Localization is the moat: each city's intro, neighborhoods, landmarks,
 * issues, and faqs should be genuinely specific to that place. `nearby` slugs MUST
 * exist in CITIES (else dropped silently). Array order = display order.
 */
import type { ImageMetadata } from 'astro';
import type { Faq } from './services';

export interface CityIssue {
  title: string;
  body: string;
}

export interface City {
  slug: string;
  name: string;
  state?: string;
  /** Localized intro, ~150–250 words for priority cities. */
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  issues: CityIssue[];
  /** 3 nearby city slugs (must exist in this list). */
  nearby: string[];
  faqs: Faq[]; // Faq reused from services.ts
  /** Optional per-city hero background; falls back to the site default. */
  heroImage?: ImageMetadata;
  /** Optional per-city service-photo overrides, keyed by service slug. */
  serviceImages?: Partial<Record<string, ImageMetadata>>;
}

export const CITIES: City[] = [
  {
    slug: 'blue-ridge',
    name: 'Blue Ridge',
    state: 'GA',
    intro:
      'Blue Ridge is the seat of Fannin County and the cabin-rental capital of the North Georgia mountains, and that fact shapes almost every septic job we do here. Downtown around the Blue Ridge Scenic Railway is tight and walkable, but the money and the growth are up in the hills — thousands of short-term rental cabins scattered across steep, wooded lots in the Aska Adventure Area, out toward Lake Blue Ridge, and up the ridges above the Toccoa River. Nearly every one of those cabins is on its own septic tank and drain field. We pump, clean, repair, and inspect residential systems all over the Blue Ridge area. The pattern here is bursty use: a cabin sits empty midweek, then a full house of ten or twelve people shows up for a weekend and hammers the system all at once. That fills a tank far faster than the old "every few years" rule assumes, and an overlooked rental tank backs up during someone’s vacation. Add steep lots where tanks are buried on a grade with no records, pump systems lifting effluent uphill to a drain field, and the heavy mountain rain that soaks a field, and you have work that needs someone who knows this county. Tell us where your tank is and what is going on, and we will give you a straight answer and a real price.',
    neighborhoods: ['Aska', 'Mineral Bluff', 'Morganton', 'Cherry Log', 'Epworth', 'Lake Blue Ridge'],
    landmarks: ['Blue Ridge Scenic Railway', 'Toccoa River', 'Lake Blue Ridge', 'Aska Adventure Area'],
    issues: [
      {
        title: 'Rental cabins that fill tanks fast',
        body: 'Blue Ridge has thousands of short-term rental cabins, and a lot of them go from empty midweek to a packed house every weekend. That bursty, heavy use fills a septic tank far faster than a normal household, so rental cabins need pumping on a tighter interval — and a tank nobody is watching becomes a backup in the middle of a guest’s stay.',
      },
      {
        title: 'Steep Aska lots and pump systems',
        body: 'Up in the Aska Adventure Area and along the ridges over the Toccoa, cabins sit on slopes so steep the only good spot for a drain field is uphill. Those homes use a pump tank and floats to lift effluent to the field, and when a pump or float fails the whole system backs up. We test, repair, and replace them so you get an alarm instead of a mess.',
      },
      {
        title: 'Buried tanks with no records',
        body: 'A lot of cabins here were built or bought as investments, and the septic lid gets buried under landscaping or a deck with no paperwork on where it sits. We locate and dig to the tank as part of the job and can map it so the next service — and the next turnover — goes quick.',
      },
    ],
    nearby: ['mccaysville', 'east-ellijay', 'ellijay'],
    faqs: [
      {
        q: 'Do you cover all of Fannin County and the cabin areas?',
        a: 'Yes. We cover Blue Ridge and the surrounding Fannin County communities — Aska, Mineral Bluff, Morganton, Cherry Log, Epworth, and the cabins around Lake Blue Ridge and the Toccoa River. Tell us where the cabin is and how the access looks and we will come prepared.',
      },
      {
        q: 'I manage short-term rental cabins in Blue Ridge — how often should I pump?',
        a: 'More often than a normal home. A cabin that sleeps ten and books solid on weekends can fill a tank in a fraction of the usual time, so many need pumping every one to two years rather than every three to five. We can set a schedule to each cabin’s size and booking pattern so you are not fielding a backup call during a stay.',
      },
      {
        q: 'The cabin’s septic alarm is going off — what do I do?',
        a: 'On these steep Aska and Toccoa lots, a pump lifts effluent uphill to the drain field, and the alarm means the pump tank is filling faster than the pump empties it — usually a failed pump or stuck float. Cut water use in the cabin and call us; we test the pump and floats and get it running before it backs up on your guests.',
      },
    ],
  },
  {
    slug: 'mccaysville',
    name: 'McCaysville',
    state: 'GA',
    intro:
      'McCaysville sits right on the Georgia–Tennessee line in the north end of Fannin County, joined at the hip to Copperhill on the Tennessee side — the two towns share a downtown and the blue line painted across the state border. This is river and whitewater country: the Toccoa flows through town and becomes the Ocoee just across the line, and the rafting and river traffic bring a steady mix of homes, cabins, and riverfront properties. Outside the small town center, nearly everything runs on septic. We pump, clean, repair, and inspect residential systems throughout the McCaysville and Copperhill area. The septic reality here is riverbottom and hillside at once: homes along the Toccoa and Fightingtown Creek sit on low, sometimes damp ground where a drain field has less dry soil to work with, while the properties up the slopes use pumps to reach a field uphill. A lot of these are older homes and river cabins on long-held family land, with undersized tanks and no service records. We know how high water tables and heavy mountain rain stress a field down here, and how to find a buried tank on a river lot. Tell us where your tank is and what it is doing, and we will give you an honest answer and a real price.',
    neighborhoods: ['Copperhill', 'Epworth', 'Mineral Bluff', 'Fightingtown Creek', 'Ducktown area', 'Toccoa riverfront'],
    landmarks: ['Toccoa / Ocoee River', 'Georgia–Tennessee state line', 'Ocoee whitewater', 'Fightingtown Creek'],
    issues: [
      {
        title: 'Riverbottom lots and high water tables',
        body: 'Homes along the Toccoa and Fightingtown Creek sit on low ground where the water table can run high, leaving a drain field less dry soil to absorb effluent. Those fields are sensitive to overload, so keeping the tank pumped and extra runoff diverted off the field matters more here than on a dry hillside.',
      },
      {
        title: 'Older river homes and family land',
        body: 'Much of McCaysville is long-held family land and older river cabins with septic tanks decades old and often undersized, many with no record of the last service. Regular pumping and an honest look at the tank and baffles keep these older systems from washing solids into the drain field.',
      },
      {
        title: 'Seasonal river and rafting cabins',
        body: 'The whitewater on the Toccoa and Ocoee brings seasonal cabins and rentals that sit quiet, then host a full house during rafting season. That on-off pattern is easy to neglect until there is a backup, so a pumping schedule matched to actual use keeps a quiet system from becoming an emergency.',
      },
    ],
    nearby: ['blue-ridge', 'ellijay', 'blairsville'],
    faqs: [
      {
        q: 'Do you serve McCaysville and the Copperhill area?',
        a: 'Yes. We cover McCaysville and the surrounding north-Fannin communities — Copperhill, Epworth, Mineral Bluff, and the homes along the Toccoa and Fightingtown Creek. Tell us where the property is and we will confirm and come prepared for the access.',
      },
      {
        q: 'My home is near the river — does that affect my septic?',
        a: 'It can. Properties on the low ground along the Toccoa and Fightingtown Creek may sit over a higher water table, which leaves a drain field less dry soil to work with, so those fields are more sensitive to overload after a wet stretch. Pumping on schedule and keeping runoff off the field is the best protection.',
      },
      {
        q: 'There are no records for my older river cabin’s septic — can you find the tank?',
        a: 'Yes. Unmarked, buried tanks are the norm on these older river properties. We locate the tank from the plumbing, the layout, and probing, dig down to the lid, and can map the spot so the next service is quick.',
      },
    ],
  },
  {
    slug: 'ellijay',
    name: 'Ellijay',
    state: 'GA',
    intro:
      'Ellijay is the seat of Gilmer County and the "Apple Capital of Georgia," sitting where the Cartecay and Ellijay rivers meet to form the Coosawattee, ringed by orchards and the ridges running up toward Rich Mountain. It is apple country and cabin country at once. The biggest single piece of our work here is the Coosawattee River Resort — a huge gated mountain community of thousands of cabins and homes spread across steep wooded lots, where nearly every property is on its own septic tank and drain field. We pump, clean, repair, and inspect residential systems throughout the Ellijay area. That gated-community pattern is its own animal: a mix of full-time residents and short-term rentals, tanks buried on grades with no records, and pump systems lifting effluent uphill to whatever flat ground a lot offers. Beyond the resort, we work the orchards and long-held farm land around Whitepath and Cartecay, where older, undersized tanks are common, and the heavy North Georgia rain that keeps the apple trees green also saturates drain fields in the area’s clay and rocky soil. We know Gilmer County, we know the Coosawattee, and we know how to reach a tank on a steep cabin lot without tearing up the property. Tell us where your tank is and what is going on, and we will give you a straight answer and a real price.',
    neighborhoods: ['Coosawattee River Resort', 'Cartecay', 'Whitepath', 'Rich Mountain', 'Cherry Log', 'Turniptown'],
    landmarks: ['Cartecay River', 'Coosawattee River', 'Rich Mountain Wilderness', 'Ellijay apple houses'],
    issues: [
      {
        title: 'Coosawattee River Resort — every home on septic',
        body: 'The Coosawattee River Resort packs thousands of cabins and homes onto steep wooded lots, and nearly every one runs on its own septic tank and drain field. With a mix of full-timers and short-term renters, use is uneven and records are thin — we locate, pump, and inspect these systems and set a schedule that fits how the property is actually used.',
      },
      {
        title: 'Steep cabin lots and pump systems',
        body: 'On the grades up toward Rich Mountain and inside the resort, many cabins sit below the only good spot for a drain field, so the system uses a pump tank and floats to lift effluent uphill. Those pumps wear out, and a failure backs the whole system up — we test and replace pumps, floats, and alarms so you get warning first.',
      },
      {
        title: 'Older orchard and farm systems',
        body: 'Out around Cartecay and Whitepath, a lot of the apple country is long-held farm land with septic tanks decades old and often undersized, working in slow clay and rocky soil. Regular pumping and an honest look at the tank keep these older systems from washing solids into a field that already drains slowly.',
      },
    ],
    nearby: ['east-ellijay', 'blue-ridge', 'jasper'],
    faqs: [
      {
        q: 'Do you service the Coosawattee River Resort?',
        a: 'Yes, regularly. The resort is a big part of our Gilmer County work — thousands of cabins on their own septic systems. Tell us your lot or address and how the driveway grade looks, and we will come prepared to locate the tank and service it without tearing up the property.',
      },
      {
        q: 'Do you cover all of Ellijay and Gilmer County?',
        a: 'Yes. We cover Ellijay and the surrounding communities — the Coosawattee River Resort, Cartecay, Whitepath, Rich Mountain, and out into the orchard country. If you are not sure we reach you, call and ask; we likely do.',
      },
      {
        q: 'My cabin sits on a steep lot — can you still reach the tank?',
        a: 'Almost always. Steep, wooded lots are most of what we do around Ellijay. We bring extra hose so the truck can stay where it fits and still reach a tank up a bank or down a slope, and we locate and dig to buried lids as part of the job.',
      },
    ],
  },
  {
    slug: 'east-ellijay',
    name: 'East Ellijay',
    state: 'GA',
    intro:
      'East Ellijay is the commercial side of Ellijay, a separate small city in Gilmer County stretched along the Coosawattee River where the highways, the outlet and shopping strip, and the old apple houses all sit. It is where Ellijay does its business, and while the storefronts along the strip are one thing, the homes behind and around them — up the hillsides and along the river toward Whitestone and Ridgeway — run on septic. We pump, clean, repair, and inspect residential systems throughout the East Ellijay area. The mix here is riverside and hillside: homes on the low ground near the Coosawattee where the water table runs higher and a drain field has less dry soil to work with, and properties up the grades that use pumps to reach a field uphill. A lot are older homes on long-held land with undersized tanks and no records, sitting next to newer builds and the commercial growth along the corridor. The same heavy North Georgia rain that swells the Coosawattee soaks these drain fields, and the area’s clay and rocky soil drains slowly. We know this stretch of Gilmer County and how its lots and soils handle a system. Tell us where your tank is and what it is doing, and we will give you an honest answer and a real price.',
    neighborhoods: ['Whitestone', 'Ridgeway', 'Coosawattee', 'Mountaintown', 'Boardtown', 'Old Highway 5'],
    landmarks: ['Coosawattee River', 'Ellijay apple houses', 'outlet and shopping strip', 'Gilmer County'],
    issues: [
      {
        title: 'Riverside lots along the Coosawattee',
        body: 'Homes on the low ground near the Coosawattee can sit over a higher water table, which leaves a drain field less dry soil to absorb effluent. Those fields are sensitive to overload, so keeping the tank pumped and runoff diverted off the field is especially important where the ground stays damp.',
      },
      {
        title: 'Older homes beside commercial growth',
        body: 'East Ellijay mixes long-owned homes with the busy commercial corridor, and the older properties often have undersized, decades-old tanks with no service record. Those systems need regular pumping and a look at the baffles to keep a small issue from becoming a field failure.',
      },
      {
        title: 'Slow clay and rocky soils',
        body: 'A lot of lots around East Ellijay have clay and rocky ground that drains slowly, which is hard on a drain field — especially after the heavy rain this area gets. Pumping on schedule so solids never reach the field is the best way to protect a field working in tough soil.',
      },
    ],
    nearby: ['ellijay', 'blue-ridge', 'jasper'],
    faqs: [
      {
        q: 'Do you serve East Ellijay and the Whitestone area?',
        a: 'Yes. We cover East Ellijay and the surrounding Gilmer County communities — Whitestone, Ridgeway, Coosawattee, Mountaintown, and along Old Highway 5. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'My drains are slow after it rains — is that the septic?',
        a: 'It can be. In the clay and riverside soils common here, a drain field that is full or aging struggles to absorb water when the ground is already saturated, and that shows up as slow drains. We will check whether it is a full tank, a line, or the field itself and tell you straight what it needs.',
      },
      {
        q: 'How often should my tank be pumped?',
        a: 'Generally every three to five years, but older and undersized tanks common on the long-held land around East Ellijay often need it sooner. If you cannot remember the last pump, it is overdue. We will look at the tank and your household and set a realistic schedule.',
      },
    ],
  },
  {
    slug: 'jasper',
    name: 'Jasper',
    state: 'GA',
    intro:
      'Jasper is the seat of Pickens County, billed as Georgia’s "First Mountain City," sitting where the foothills give way to the real mountains under Burnt Mountain and Sharp Top. It is old marble country — the quarries around Tate and Marble Hill built the town — and today it is a mix of that history and a wave of mountain-community growth. The single biggest piece of our septic work here is Big Canoe, a large gated mountain community spread across thousands of acres of steep wooded ridges, where nearly every home is on its own septic tank and drain field. We pump, clean, repair, and inspect residential systems throughout the Jasper area. Big Canoe and Bent Tree bring the gated-community pattern: homes on steep lots that use pumps to lift effluent uphill to a field, tanks buried on grades with no records, and second homes that sit empty and then host a full house. Beyond the gates, we work the long-held farm and family land around Tate, Talking Rock, and Nelson, where older undersized tanks are common, and drain fields work in slow clay and rocky soil under heavy North Georgia rain. We know Pickens County and how to reach a tank on a Burnt Mountain grade. Tell us where your tank is and what is going on, and we will give you a straight answer and a real price.',
    neighborhoods: ['Big Canoe', 'Tate', 'Talking Rock', 'Nelson', 'Marble Hill', 'Bent Tree'],
    landmarks: ['Burnt Mountain', 'Sharp Top', 'Big Canoe', 'Georgia marble quarries'],
    issues: [
      {
        title: 'Big Canoe — every home on its own septic',
        body: 'Big Canoe spreads thousands of homes across steep wooded ridges, and nearly every one runs on its own septic tank and drain field. Many are second homes that sit empty and then fill up, and lots are steep enough to need a pump lifting effluent uphill. We locate, pump, test, and inspect these systems and set a schedule that fits how the home is really used.',
      },
      {
        title: 'Steep grades and pump-and-float systems',
        body: 'On the slopes up Burnt Mountain and Sharp Top, many homes sit below their drain field, so a pump tank and floats push effluent uphill. Those pumps and floats wear out, and a failure stops the whole system — we test and replace them so you get an alarm’s warning instead of a backup.',
      },
      {
        title: 'Older farm systems around Tate and Nelson',
        body: 'Outside the gates, much of Pickens County is long-held farm and family land with septic tanks decades old and often undersized, working in slow clay and rocky soil. Regular pumping and an honest look at the tank keep solids from reaching and clogging a field that already drains slowly.',
      },
    ],
    nearby: ['east-ellijay', 'dawsonville', 'dahlonega'],
    faqs: [
      {
        q: 'Do you service Big Canoe and Bent Tree?',
        a: 'Yes, regularly. The gated mountain communities are a big part of our Pickens County work, and nearly every home in them is on its own septic. Tell us your lot or address and how the driveway grade looks, and we will come prepared to locate and service the system.',
      },
      {
        q: 'Do you cover all of Jasper and Pickens County?',
        a: 'Yes. We cover Jasper and the surrounding communities — Big Canoe, Tate, Talking Rock, Nelson, Marble Hill, and Bent Tree. If you are not sure we reach you, call and ask.',
      },
      {
        q: 'We only use our Big Canoe home part of the year — how often should we pump?',
        a: 'It depends on how heavily it is used when occupied, but second homes are easy to neglect. We can set a schedule based on your actual use and check the system before a busy stretch, so you are not dealing with a backup while family or guests are there.',
      },
    ],
  },
  {
    slug: 'dahlonega',
    name: 'Dahlonega',
    state: 'GA',
    intro:
      'Dahlonega is the seat of Lumpkin County, built around the historic gold-rush square where America’s first major gold rush played out, and home now to the University of North Georgia and the heart of the state’s wine country. It is also the southern gateway to the Appalachian Trail, with the approach up to Springer Mountain and Amicalola pulling hikers through town. That mix — college, vineyards, and mountain land — shapes our septic work here. Outside the small sewered core, nearly everything runs on septic. We pump, clean, repair, and inspect residential systems throughout the Dahlonega area. The patterns are their own: student rentals around the university that see heavy, bursty occupancy and fill tanks fast; vineyards, tasting rooms, and event venues out toward Cavender Creek and Wolf Mountain with their own demands on a system; and older homes on long-held land around Auraria, Yahoola, and Porter Springs with undersized tanks and no records. Add steep wooded lots, pump systems reaching a field uphill, and the heavy North Georgia rain that soaks a drain field, and there is plenty to know. We understand Lumpkin County and how its lots and soils handle a system. Tell us where your tank is and what it is doing, and we will give you a straight answer and a real price.',
    neighborhoods: ['Auraria', 'Yahoola', 'Cavender Creek', 'Porter Springs', 'Long Branch', 'Wolf Mountain'],
    landmarks: ['Historic gold-rush square', 'University of North Georgia', 'Yahoola Creek', 'Appalachian Trail approach (Springer / Amicalola)'],
    issues: [
      {
        title: 'Student rentals that fill tanks fast',
        body: 'Around the University of North Georgia, a lot of homes are student rentals with more people under the roof than the system was sized for, and heavy, bursty use fills a septic tank faster than a normal household. Those rentals need pumping on a tighter interval, and an overlooked tank turns into a backup during a full semester.',
      },
      {
        title: 'Vineyards, tasting rooms, and event venues',
        body: 'Dahlonega’s wine country brings tasting rooms and event venues out toward Cavender Creek and Wolf Mountain, where a big crowd on a weekend puts a heavy, uneven load on a septic system. Those systems need pumping matched to real use and an honest look before a busy season so a full tank does not stop an event.',
      },
      {
        title: 'Older homes on long-held land',
        body: 'Around Auraria, Yahoola, and Porter Springs, plenty of homes sit on land held for generations with septic tanks decades old and often undersized. Regular pumping and a look at the tank and baffles keep these older systems from washing solids into the drain field.',
      },
    ],
    nearby: ['dawsonville', 'cleveland', 'jasper'],
    faqs: [
      {
        q: 'Do you cover Dahlonega and Lumpkin County?',
        a: 'Yes. We cover Dahlonega and the surrounding communities — Auraria, Yahoola, Cavender Creek, Porter Springs, and out into the wine country and mountain land. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'I rent a house to students near UNG — how often should I pump?',
        a: 'More often than a normal home. A house full of students puts heavy, bursty use on a tank, so depending on size and how many people live there many need pumping every one to three years rather than the usual three to five. We can look at the tank and set a schedule that keeps you ahead of a backup.',
      },
      {
        q: 'I run a tasting room or venue — can you set up service for it?',
        a: 'Yes. Event and tasting-room septic sees big, uneven loads on weekends, and a system that keeps up all week can still get overwhelmed by a crowd. We pump on a schedule matched to your busy times and inspect the tank and field so a full tank never stops an event.',
      },
    ],
  },
  {
    slug: 'dawsonville',
    name: 'Dawsonville',
    state: 'GA',
    intro:
      'Dawsonville is the seat of Dawson County, sitting where the GA-400 corridor climbs out of the metro Atlanta fringe toward the mountains, with Amicalola Falls — the tallest cascading waterfall in the Southeast — and Dawson Forest just up the road, and the north end of Lake Lanier reaching into the county. That location makes Dawsonville one of the fastest-growing parts of the North Georgia mountains, and the growth drives our septic work. The North Georgia Premium Outlets and the 400 corridor pull rooftops out into what was farm and forest land, and outside the newer sewered pockets nearly everything runs on septic. We pump, clean, repair, and inspect residential systems throughout the Dawsonville area. The pattern here is fast growth on top of old land: new subdivisions on lots carved from larger tracts, where the drain field had to fit whatever soil and grade the lot offered, sitting alongside long-owned farm homes with older, undersized tanks and no records. We see overdue tanks on homes that changed hands in a hot market, drain fields working in the area’s clay soil, and a steady demand for inspections as properties sell. We know Dawson County and how its lots handle a system. Tell us where your tank is and what is going on, and we will give you a straight answer and a real price.',
    neighborhoods: ['Kilough', 'War Hill', 'Juno', 'Silver City', 'Dawson Forest', 'Amicalola'],
    landmarks: ['Amicalola Falls State Park', 'GA-400 corridor', 'North Georgia Premium Outlets', 'north end of Lake Lanier'],
    issues: [
      {
        title: 'Fast growth and a hot resale market',
        body: 'The GA-400 corridor has driven fast growth in Dawson County, and homes change hands often, frequently with no record of the last septic service. A pump and inspection at the sale — or right after — gives buyers and sellers a clear, honest picture of the system instead of an expensive surprise later.',
      },
      {
        title: 'New subdivisions on subdivided land',
        body: 'A lot of Dawsonville’s new homes sit on lots carved from larger farm and forest tracts, where the drain field had to fit the soil and grade available. Knowing where the tank and field are, and pumping on schedule, protects a field that may be working in less-than-ideal ground.',
      },
      {
        title: 'Lake and second homes near Lanier',
        body: 'Where the north end of Lake Lanier reaches into Dawson County, lake and second homes see seasonal, bursty use and can sit over higher water tables near the water. A pumping schedule matched to actual use, plus keeping runoff off the field, keeps a quiet lakeside system from turning into a backup.',
      },
    ],
    nearby: ['dahlonega', 'jasper', 'cleveland'],
    faqs: [
      {
        q: 'Do you cover Dawsonville and Dawson County?',
        a: 'Yes. We cover Dawsonville and the surrounding communities — Kilough, War Hill, Juno, Silver City, Dawson Forest, and out toward Amicalola and the north end of Lake Lanier. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'I bought a new build off GA-400 — do I still need to think about septic?',
        a: 'Yes. Even a new system needs the tank pumped on schedule so solids never reach the drain field, and on a subdivided lot it helps to know exactly where the tank and field are. We can pump, mark the locations, and set you up so the system lasts.',
      },
      {
        q: 'I’m selling my Dawsonville home — do I need a septic inspection?',
        a: 'It is a smart move in this fast market. A clean, recently inspected system is real proof to hand a buyer, and catching anything ahead of time keeps the septic from derailing the deal. We inspect the tank, components, and drain field and give you a clear written summary.',
      },
    ],
  },
  {
    slug: 'blairsville',
    name: 'Blairsville',
    state: 'GA',
    intro:
      'Blairsville is the seat of Union County, sitting high in a mountain valley ringed by some of the tallest peaks in Georgia — Brasstown Bald, the highest point in the state, rises just to the east, with Vogel State Park and Blood Mountain nearby and Lake Nottely spread across the county. This is remote, high-elevation country, and outside the small town center essentially every home runs on septic. We pump, clean, repair, and inspect residential systems throughout the Blairsville and Union County area. The septic reality here is true high-country: long, steep, sometimes gravel access roads, tanks buried on grades with no records, and pump systems lifting effluent uphill to whatever flat ground a lot allows. A lot of these are cabins, second homes, and long-held family land up around Suches, Choestoe, and Ivy Log that sit empty for stretches at elevation, then host a full house. Hard mountain winters can freeze shallow lines and exposed pump parts on unheated seasonal cabins. And the many homes around Lake Nottely bring their own mix of seasonal use and lakeside grade. We bring the truck, the hose length, and the experience to reach a tank on a remote mountain lot and tell you honestly what it needs. Tell us where your property is and what is going on, and we will give you a straight answer and a real price.',
    neighborhoods: ['Suches', 'Choestoe', 'Ivy Log', 'Coosa', 'Owltown', 'Gum Log'],
    landmarks: ['Vogel State Park', 'Brasstown Bald', 'Lake Nottely', 'Blood Mountain'],
    issues: [
      {
        title: 'Remote, steep, high-elevation access',
        body: 'Union County properties often sit at the end of long, steep, sometimes gravel roads up toward Brasstown Bald and Blood Mountain, with tanks buried on grades and no records. We come prepared with the hose length and equipment to reach a tank on a remote mountain lot — and we actually make the drive.',
      },
      {
        title: 'Freezing lines at seasonal cabins',
        body: 'At Blairsville elevations, hard winters can freeze shallow lines and exposed pump components, especially at cabins and second homes left unheated and empty around Suches and Choestoe. We can check the vulnerable spots and advise on protecting a system through the coldest months.',
      },
      {
        title: 'Lake Nottely and seasonal use',
        body: 'Homes and cabins around Lake Nottely see seasonal, bursty use and are easy to neglect between visits, and some sit over higher water tables near the shore. A pumping schedule matched to actual use, plus an inspection when the history is unknown, keeps a quiet lakeside system from becoming an emergency.',
      },
    ],
    nearby: ['hiawassee', 'young-harris', 'mccaysville'],
    faqs: [
      {
        q: 'Do you really drive out to the remote parts of Union County?',
        a: 'Yes. We cover Blairsville and the surrounding communities — Suches, Choestoe, Ivy Log, Coosa, Owltown, and Gum Log — including the remote, steep properties up toward Brasstown Bald. Tell us about the access road and where the tank is and we will come prepared.',
      },
      {
        q: 'My cabin sits empty in winter — should I worry about freezing?',
        a: 'At these elevations, yes. Shallow lines and exposed pump parts can freeze on an unheated home. We can look at the vulnerable spots and advise on protecting the system, and make sure the tank is in good shape before the cold sets in.',
      },
      {
        q: 'There are no records for my mountain property’s septic — can you find the tank?',
        a: 'Yes. Unmarked, buried tanks are the norm out here. We locate the tank from the plumbing, the layout, and probing, dig down to the lid, and can map the location so the next service is quick.',
      },
    ],
  },
  {
    slug: 'hiawassee',
    name: 'Hiawassee',
    state: 'GA',
    intro:
      'Hiawassee is the seat of Towns County, wrapped around Lake Chatuge in the far northeast corner of the Georgia mountains, with Bell Mountain rising over town and the Georgia Mountain Fairgrounds drawing crowds to the lakeshore. This is lake country at high elevation, and the water shapes the septic work more than anything else. Outside the small town center, nearly everything runs on septic — the homes and cabins ringing Lake Chatuge, the second homes up the ridges, and the long-held land out toward Macedonia and Tate City. We pump, clean, repair, and inspect residential systems throughout the Hiawassee and Towns County area. The lakeside pattern is its own: homes on the low ground near Chatuge can sit over higher water tables, leaving a drain field less dry soil to work with, while properties up the slopes use pumps to reach a field uphill. Many are seasonal or second homes that sit empty and then fill up, on systems that are easy to forget, and at this elevation shallow lines can freeze at an unheated cabin in a hard winter. We know Towns County, how the lake and the grade stress a field, and how to find a buried tank on a Chatuge lot. Tell us where your tank is and what it is doing, and we will give you an honest answer and a real price.',
    neighborhoods: ['Bell Mountain', 'Tate City', 'Macedonia', 'Sunnyside', 'Bell Creek', 'Lake Chatuge shore'],
    landmarks: ['Lake Chatuge', 'Bell Mountain', 'Georgia Mountain Fairgrounds', 'Hiwassee River'],
    issues: [
      {
        title: 'Lakeside lots and high water tables',
        body: 'Homes on the low ground around Lake Chatuge can sit over a higher water table, which leaves a drain field less dry soil to absorb effluent. Those fields are sensitive to overload, so keeping the tank pumped and extra runoff diverted off the field is especially important close to the water.',
      },
      {
        title: 'Seasonal and second homes on the lake',
        body: 'Many Chatuge homes and cabins are seasonal or second homes that sit empty for stretches, then host a full house. That on-off pattern is hard on a system and easy to neglect until there is a problem during a stay, so a pumping schedule matched to real use pays off here.',
      },
      {
        title: 'High-elevation freezing',
        body: 'At Hiawassee’s elevation, shallow lines and exposed pump parts can freeze at a cabin left unheated and empty through a hard winter. We can check the vulnerable spots and advise on protecting a system so a seasonal home is ready when you come back to it.',
      },
    ],
    nearby: ['young-harris', 'blairsville', 'helen'],
    faqs: [
      {
        q: 'Do you cover Hiawassee and Towns County?',
        a: 'Yes. We cover Hiawassee and the surrounding communities — Bell Mountain, Tate City, Macedonia, Sunnyside, and the homes around Lake Chatuge. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'My home is near Lake Chatuge — does the water affect my septic?',
        a: 'It can. Properties on the low ground near the lake may sit over a higher water table, which leaves a drain field less dry soil to work with, so those fields are more sensitive to overload after a wet stretch. Pumping on schedule and keeping runoff off the field helps protect it.',
      },
      {
        q: 'We only use our lake cabin part of the year — how often should we pump?',
        a: 'It depends on how heavily it is used when occupied, but seasonal cabins are easy to neglect. We can set a schedule based on your actual use and check the system before a busy season, so you are not dealing with a backup while family or guests are there.',
      },
    ],
  },
  {
    slug: 'young-harris',
    name: 'Young Harris',
    state: 'GA',
    intro:
      'Young Harris is a small college town in Towns County, tucked in the valley at the foot of Brasstown Bald, built around Young Harris College and the Brasstown Valley Resort. It is a quiet, high-elevation community surrounded by mountain land, and outside the small town core nearly everything runs on septic — the homes up the coves and ridges, the cabins and second homes out toward Fodder Creek and Bugscuffle, and the properties along the valley. We pump, clean, repair, and inspect residential systems throughout the Young Harris area. The mix here brings its own pattern: the college and the resort put concentrated, uneven loads on their systems, while the surrounding homes are a blend of long-held family land with older undersized tanks and newer builds on steep wooded lots. Many of those lots need a pump to lift effluent uphill to a drain field, tanks are buried on grades with no records, and second homes sit empty and then host a full house. At this elevation under Brasstown Bald, hard winters can freeze shallow lines at an unheated cabin. We know Towns County and how to reach a tank on a steep valley lot and tell you honestly what it needs. Tell us where your tank is and what is going on, and we will give you a straight answer and a real price.',
    neighborhoods: ['Brasstown Valley', 'Fodder Creek', 'Corn Silk Ridge', 'Bugscuffle', 'Owl Creek', 'College area'],
    landmarks: ['Young Harris College', 'Brasstown Valley Resort', 'Brasstown Bald', 'Lake Chatuge'],
    issues: [
      {
        title: 'Steep valley lots and pump systems',
        body: 'Many homes around Young Harris sit on steep wooded lots below the only good spot for a drain field, so the system uses a pump tank and floats to lift effluent uphill. Those pumps and floats wear out, and when one fails the system backs up — we test and replace them so you get an alarm before a mess.',
      },
      {
        title: 'Second homes that sit empty, then fill up',
        body: 'A lot of Young Harris properties are second homes and cabins that sit quiet for stretches and then host a full house. That on-off pattern is hard on a system and easy to forget until there is a problem during a stay, so a pumping schedule matched to real use is worth setting.',
      },
      {
        title: 'High-elevation freezing under Brasstown Bald',
        body: 'At the foot of Brasstown Bald, hard winters can freeze shallow lines and exposed pump parts at a cabin left unheated and empty. We can check the vulnerable spots and advise on protecting a system through the coldest months so a seasonal home is ready when you return.',
      },
    ],
    nearby: ['hiawassee', 'blairsville', 'helen'],
    faqs: [
      {
        q: 'Do you cover Young Harris and the surrounding valley?',
        a: 'Yes. We cover Young Harris and the nearby Towns County communities — Brasstown Valley, Fodder Creek, Corn Silk Ridge, Bugscuffle, and out toward Lake Chatuge. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'My home has a septic pump and the alarm went off — what now?',
        a: 'On these steep valley lots, a pump lifts effluent uphill to the drain field, and the alarm means the pump tank is filling faster than the pump empties it — usually a failed pump or stuck float. Cut back on water use and call us; we test the pump and floats and get it running before it backs up.',
      },
      {
        q: 'My cabin sits empty in winter — should I worry about freezing?',
        a: 'At this elevation, yes. Shallow lines and exposed pump parts can freeze on an unheated home under Brasstown Bald. We can look at the vulnerable spots and advise on protecting the system, and make sure the tank is in good shape before the cold sets in.',
      },
    ],
  },
  {
    slug: 'helen',
    name: 'Helen',
    state: 'GA',
    intro:
      'Helen is the alpine, Bavarian-themed tourist town in White County, sitting on the Chattahoochee River where tubers float through the middle of downtown all summer, with Unicoi State Park and Anna Ruby Falls just up the road. For a town this small, it carries an enormous visitor load, and that drives our septic work more than anything else. Downtown is dense, but the cabins and vacation rentals fanning out into the hills — up toward Robertstown, Sautee, Nacoochee, and the ridges around Unicoi — are almost all on their own septic tanks and drain fields. We pump, clean, repair, and inspect residential systems throughout the Helen area. The pattern here is short-term-rental density at its most extreme: a cabin sits empty midweek, then a full house shows up for an Oktoberfest weekend and hammers the system all at once. That fills a tank far faster than a normal household, and an overlooked rental tank backs up during a guest’s stay. Add steep wooded lots where tanks are buried on a grade with no records, pump systems lifting effluent uphill, and the heavy North Georgia rain that saturates a drain field, and there is real work to know. We understand White County and the cabin load in these hills. Tell us where your tank is and what is going on, and we will give you a straight answer and a real price.',
    neighborhoods: ['Robertstown', 'Sautee', 'Nacoochee', 'Unicoi', 'Chattahoochee Estates', 'Innsbruck'],
    landmarks: ['Chattahoochee River', 'Unicoi State Park', 'Anna Ruby Falls', 'alpine downtown'],
    issues: [
      {
        title: 'Vacation rentals that fill tanks fast',
        body: 'Helen’s cabin market means a lot of homes go from empty midweek to a packed house for a festival weekend. That bursty, heavy use fills a septic tank far faster than a normal household, so rental cabins need pumping on a tighter interval — and an overlooked rental tank is a backup waiting to happen during a guest’s stay.',
      },
      {
        title: 'Steep wooded lots and pump systems',
        body: 'Up in the hills around Robertstown and toward Unicoi, cabins sit on slopes so steep the only good spot for a drain field is uphill. Those homes use a pump tank and floats to lift effluent to the field, and when a pump or float fails the whole system backs up — we test, repair, and replace them so you get warning first.',
      },
      {
        title: 'Buried tanks and heavy rain on the field',
        body: 'A lot of Helen cabins were built or bought as rentals, and the septic lid gets buried under landscaping or a deck with no paperwork on where it sits. Meanwhile the heavy rain that swells the Chattahoochee soaks these drain fields. We locate and dig to the tank, pump on schedule, and read whether a soggy field is saturated or truly failing.',
      },
    ],
    nearby: ['cleveland', 'hiawassee', 'young-harris'],
    faqs: [
      {
        q: 'Do you cover Helen and the surrounding cabin areas?',
        a: 'Yes. We cover Helen and the nearby White County communities — Robertstown, Sautee, Nacoochee, Unicoi, and the cabins up the ridges toward Anna Ruby Falls. Tell us where the cabin is and how the access looks and we will come prepared.',
      },
      {
        q: 'I manage vacation rentals in Helen — how often should I pump?',
        a: 'More often than a normal home. A cabin that sleeps a dozen and books solid on festival weekends can fill a tank in a fraction of the usual time, so many need pumping every one to two years rather than every three to five. We can set a schedule to each cabin’s size and booking pattern so you avoid a backup during a stay.',
      },
      {
        q: 'The cabin’s septic alarm is going off — what do I do?',
        a: 'On these steep lots, a pump lifts effluent uphill to the drain field, and the alarm means the pump tank is filling faster than the pump empties it — usually a failed pump or stuck float. Cut water use in the cabin and call us; we test the pump and floats and get it running before it backs up on your guests.',
      },
    ],
  },
  {
    slug: 'cleveland',
    name: 'Cleveland',
    state: 'GA',
    intro:
      'Cleveland is the seat of White County, sitting in the foothills just south of Helen where the mountains begin, best known as the home of Babyland General Hospital — the birthplace of the Cabbage Patch Kids — with Yonah Mountain rising over the county and the Chattahoochee headwaters and Duke’s Creek running through the surrounding hills. It is a more year-round, working community than the tourist crush up in Helen, a mix of the town, farm and family land, and a growing number of mountain homes. Outside the small town center, nearly everything runs on septic. We pump, clean, repair, and inspect residential systems throughout the Cleveland and White County area. The mix here is foothill and mountain at once: long-held farm land around Mossy Creek and Town Creek with older, undersized tanks and no records, newer builds on lots subdivided from larger tracts, and cabins and second homes up toward Sautee Nacoochee and the grades under Yonah. We see overdue tanks on homes that changed hands, drain fields working in the area’s clay and rocky soil after the heavy rain this country gets, and a steady demand for inspections as properties sell. We know White County and how its lots handle a system. Tell us where your tank is and what it is doing, and we will give you a straight answer and a real price.',
    neighborhoods: ['Sautee Nacoochee', 'Mossy Creek', 'Tesnatee', 'Town Creek', 'Blue Creek', 'Yonah'],
    landmarks: ['Babyland General Hospital', 'Yonah Mountain', 'Chattahoochee headwaters', 'Duke’s Creek'],
    issues: [
      {
        title: 'Older farm systems on long-held land',
        body: 'Much of White County around Mossy Creek and Town Creek is long-held farm and family land with septic tanks decades old and often undersized for today’s households. Regular pumping and a look at the tank and baffles keep these older systems from washing solids into the drain field.',
      },
      {
        title: 'New builds on subdivided lots',
        body: 'Cleveland’s growth means a lot of newer homes on lots carved from larger tracts, where the drain field had to fit the soil and grade available. Knowing where the tank and field are, and pumping on schedule, protects a field that may be working in slow clay or rocky ground.',
      },
      {
        title: 'Properties that changed hands without records',
        body: 'Homes around here often sell with no idea when the tank was last serviced, and the resale market stays busy with buyers wanting mountain land near Helen and Yonah. A pump and inspection after a purchase gives you a baseline and catches a worn baffle or struggling field before it becomes an emergency.',
      },
    ],
    nearby: ['helen', 'dahlonega', 'dawsonville'],
    faqs: [
      {
        q: 'Do you cover Cleveland and White County?',
        a: 'Yes. We cover Cleveland and the surrounding communities — Sautee Nacoochee, Mossy Creek, Tesnatee, Town Creek, Blue Creek, and the homes up toward Yonah. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'I just bought an older home near Cleveland — what should I do first?',
        a: 'Have the tank pumped and the system inspected. Older White County homes often have no service record, and starting with a pump and a look at the tank, baffles, and drain field gives you a known baseline and catches problems before they become expensive.',
      },
      {
        q: 'How often should a rural White County system be pumped?',
        a: 'Usually every three to five years, but older and undersized tanks common on long-held land here often need it sooner. If you cannot recall the last service, schedule it. We will look at the tank and your household and recommend a realistic interval.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
