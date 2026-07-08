/**
 * services.ts — what the business does.
 *
 * EDIT HERE. Keep ~1 broad catch-all marked `hubOnly: true` (no per-city combo pages).
 * Flag urgent services `emergency: true`. Slugs are kebab-case join keys — keep them stable.
 */
import type { ImageMetadata } from 'astro';

import septicServicesImg from '../assets/services/septic-services.jpg';
import septicPumpingImg from '../assets/services/septic-tank-pumping.jpg';
import septicCleaningImg from '../assets/services/septic-tank-cleaning.jpg';
import septicRepairImg from '../assets/services/septic-system-repair.jpg';
import septicInspectionImg from '../assets/services/septic-inspections.jpg';
import drainFieldImg from '../assets/services/drain-field-repair.jpg';
import emergencySepticImg from '../assets/services/emergency-septic-service.jpg';

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceSection {
  h: string;
  body: string;
}

export interface Service {
  slug: string;
  name: string; // Full service name, e.g. "Septic Tank Pumping"
  short: string; // Short label for nav, cards, breadcrumbs
  blurb: string; // One-line summary
  description: string; // Intro paragraph (hub + city combo pages)
  sections: ServiceSection[]; // Deeper authority sections, rendered on the hub page
  points: string[]; // What's included / bullet points
  faqs: Faq[]; // Service-level FAQs (rendered + FAQ schema on the hub)
  image: ImageMetadata;
  imageAlt: string;
  hubOnly?: boolean; // do not generate per-city combo pages
  emergency?: boolean; // flagged as emergency/urgent (affects copy)
}

export const SERVICES: Service[] = [
  {
    slug: 'septic-services',
    name: 'Septic Tank Services',
    short: 'Septic Services',
    blurb: 'Pumping, cleaning, repairs, inspections, and emergencies — one local crew for the whole septic system across Western North Carolina.',
    description:
      'We are a full-service septic company covering the mountains of Western North Carolina, from the homes around Asheville out to the coves, ridges, and rural properties of the surrounding counties. If it has to do with a septic system, we handle it: routine tank pumping, deep cleaning, system repairs, real-estate and point-of-sale inspections, drain field problems, and emergency backups. Out here most homes are not on city sewer — they run on a tank and a drain field — and that system needs to be pumped on a schedule and looked after, especially on the steep lots, rocky soil, and tight mountain driveways that make WNC septic work its own animal. You call, you tell us roughly where the tank is and what is going on, and we give you a straight answer and a real price. No upsells, no scare tactics — just an honest crew that knows mountain septic systems.',
    sections: [
      {
        h: 'One crew for the whole septic system',
        body: 'A lot of folks call one company to pump, another to dig, and a third to inspect. We do all of it. Routine pumping, tank cleaning, baffle and lid repairs, line and pump replacements, drain field diagnosis, and inspections for a home sale — it is one phone call and one crew that already knows your system. That continuity matters: the people who pumped your tank are the people who know whether the drain field is starting to struggle.',
      },
      {
        h: 'Built for mountain properties',
        body: 'Western NC septic work is not flat-lot work. Tanks get buried on slopes, driveways are steep and narrow, soil is rocky and slow to drain, and a lot of systems are decades old and were put in before anyone kept good records. We bring the right truck and hose length for the access, we locate buried tanks and lids, and we know how grade, soil, and our wet seasons stress a mountain drain field. That local know-how is the difference between a quick pump and a torn-up yard.',
      },
      {
        h: 'Straight answers, honest pricing',
        body: 'Septic work is easy to oversell because most homeowners can not see what is underground. We do not work that way. We tell you what your system actually needs, show you what we find when the lid is off, and quote it up front. If your tank has another year in it, we say so. If a drain field is failing and a pump is only buying time, we tell you that too — so you can plan instead of getting surprised.',
      },
    ],
    points: [
      'Pumping, cleaning, repairs, inspections, and emergencies — one crew',
      'Residential systems across Western North Carolina',
      'Tank and lid locating on hard-to-find mountain systems',
      'Honest, up-front pricing with no surprise add-ons',
      'We show you what we find before recommending work',
      'Trucks and hose runs sized for steep, tight access',
    ],
    faqs: [
      {
        q: 'How often should a septic tank be pumped?',
        a: 'For most households, every three to five years, depending on tank size and how many people live in the home. Smaller tanks, larger families, and properties used as full-time rentals need it more often. If you cannot remember the last time it was pumped, it is overdue — call and we will get you on a schedule.',
      },
      {
        q: 'Do you handle the whole system or just pumping?',
        a: 'The whole system. We pump and clean tanks, repair lids, baffles, lines, and pumps, diagnose and repair drain field problems, and do inspections for home sales. One call covers it, and the crew that pumps your tank is the crew that knows your system.',
      },
      {
        q: 'My house is on a steep lot with a tight driveway — can you still service it?',
        a: 'Almost always, yes. Mountain access is most of what we do. We bring extra hose so the truck can stay where it fits and still reach a tank uphill or down a bank. Tell us about the driveway and where the tank is when you call and we will come prepared.',
      },
      {
        q: 'How do I find my tank if I have no idea where it is?',
        a: 'That is common on older WNC properties with no records. We locate buried tanks and lids as part of the job — from the plumbing exit, the system layout, and probing the yard. Once we find it, we can note the location so it is easy next time.',
      },
    ],
    image: septicServicesImg,
    imageAlt: 'Septic service truck working at a rural mountain home in Western North Carolina',
    hubOnly: true,
  },
  {
    slug: 'septic-tank-pumping',
    name: 'Septic Tank Pumping',
    short: 'Tank Pumping',
    blurb: 'Routine pumping keeps your system healthy. We locate, dig, and pump your tank — most homes done in one visit.',
    description:
      'Pumping is the single most important thing you can do for a septic system, and it is what we do most. Over time, solids settle to the bottom of the tank and grease and scum float to the top; pumping removes both before they can wash out into the drain field and clog it. We pump residential septic tanks anywhere in Western North Carolina — we locate and dig to the lid, pump the tank down completely, check the baffles and the tank condition while it is open, and tell you straight what we see. Most homes need pumping every three to five years, but mountain properties with full-time rentals, big families, or older small tanks often need it sooner. The cheapest repair in septic is the pump you do on time; the most expensive is the drain field you replace because you waited too long.',
    sections: [
      {
        h: 'Why pumping on schedule protects the expensive part',
        body: 'The drain field — the buried lines that let treated water soak into the ground — is by far the most expensive part of a septic system to replace. A tank that is never pumped lets solids build up until they spill over into those lines and clog the soil. Once a drain field is plugged with solids, no amount of pumping brings it back; it has to be rebuilt. Regular pumping is cheap insurance against a five-figure drain field job.',
      },
      {
        h: 'How often a WNC home really needs it',
        body: 'The old "every few years" rule depends on your tank size and your household. A 1,000-gallon tank serving a family of four typically needs pumping every three to five years. A smaller or older tank, a bigger household, a garbage disposal, or a home run as a short-term rental with heavy weekend use all shorten that interval. We will look at your tank and your usage and give you a realistic schedule instead of a one-size guess.',
      },
      {
        h: 'Locating and digging on mountain lots',
        body: 'Half the work on an older WNC property is finding the tank. Lids get buried under years of dirt, landscaping, or a deck, and there are often no records. We locate the tank from the plumbing, the layout, and probing, dig down to the lid, and pump from there. When we are done we can map the location so the next pump is quick and you are not paying to find it again.',
      },
    ],
    points: [
      'Complete tank pump-out — solids, scum, and liquid',
      'Tank located and dug to the lid, even with no records',
      'Baffles and tank condition checked while the lid is off',
      'Realistic pumping schedule based on your tank and household',
      'Most homes pumped in a single visit',
      'Location noted so the next pump is fast',
    ],
    faqs: [
      {
        q: 'How do I know it is time to pump?',
        a: 'Go by time and by symptoms. If it has been three to five years, schedule it. Sooner if you notice slow drains throughout the house, gurgling toilets, sewage odor in the yard, or grass that is suddenly lush and green over the tank or drain field. Those are early signs the tank is full and solids are getting close to the field.',
      },
      {
        q: 'What happens if I never pump my tank?',
        a: 'Solids build up until they wash out into the drain field and clog the soil. At that point the field can no longer absorb water, you get backups and soggy spots in the yard, and the fix is no longer a pump — it is a partial or full drain field replacement, which is the most expensive job in septic. Pumping on schedule prevents that.',
      },
      {
        q: 'Do I need to find my tank before you come?',
        a: 'No. Locating the tank is part of what we do, which matters on older mountain properties with no records. If you do know where the lid is, or have a riser at grade, that saves digging time and money — but if not, we will find it.',
      },
      {
        q: 'Should I add a riser so the lid is easier to reach?',
        a: 'If your tank is buried deep, a riser brings the access lid up to ground level so future pumps and inspections do not require digging. It pays for itself over a couple of service visits. Ask us about it when we are out — it is an easy add while the tank is already open.',
      },
    ],
    image: septicPumpingImg,
    imageAlt: 'Septic tank being pumped at a home in Western North Carolina',
  },
  {
    slug: 'septic-tank-cleaning',
    name: 'Septic Tank Cleaning',
    short: 'Tank Cleaning',
    blurb: 'More thorough than a basic pump — we remove the packed sludge and scum and leave the tank truly clean.',
    description:
      'Pumping and cleaning are related but not the same. A basic pump removes the liquid and the loose solids; a proper cleaning removes the packed sludge layer on the bottom and the hardened scum mat on top that a quick pump can leave behind. On tanks that have gone too long between services, that compacted material has to be broken up and removed, or it keeps degrading the system. We clean residential septic tanks across Western North Carolina — we pump the tank down, break up and remove the bottom sludge and the scum layer, back-flush and agitate as needed, and inspect the inlet and outlet baffles so flow is correct when we are done. If your tank has not been touched in many years, or you have just bought a mountain property with an unknown service history, a cleaning is the right reset before you put it back on a normal pumping schedule.',
    sections: [
      {
        h: 'Cleaning vs. pumping — what is the difference',
        body: 'When a tank is pumped on schedule, the contents are still fluid and a standard pump-out gets nearly everything. When a tank is years overdue, the solids compact into a dense layer on the bottom and the grease and scum harden into a thick mat on top. A simple suction pump skims the easy liquid and leaves that packed material behind. Cleaning means breaking it up and removing it so the tank is genuinely empty and working at full capacity again.',
      },
      {
        h: 'Best after a long gap or a new purchase',
        body: 'A full cleaning makes the most sense in two situations: a tank that has gone well past its interval and built up hardened layers, or a home you have just bought with no service records — common with the cabins, coves, and inherited family places all over Western NC. Starting from a truly clean tank gives you a known baseline, and from there a routine pump every few years keeps it healthy.',
      },
    ],
    points: [
      'Bottom sludge layer broken up and fully removed',
      'Hardened scum and grease mat cleared from the top',
      'Inlet and outlet baffles inspected for correct flow',
      'Recommended after long gaps or on newly bought homes',
      'Tank left genuinely empty and back at full capacity',
      'Honest reset before returning to a normal pumping schedule',
    ],
    faqs: [
      {
        q: 'Do I need a cleaning or just a pump?',
        a: 'If your tank is on a regular schedule, a standard pump is usually all it needs. If it has gone many years without service, or you do not know its history, a cleaning removes the packed sludge and hardened scum a basic pump leaves behind. We can tell you which one you need once we have the lid off and can see the layers.',
      },
      {
        q: 'I just bought a mountain home — should I clean the tank?',
        a: 'It is a smart move when there are no service records, which is common out here. A cleaning gives you a known starting point, and we can inspect the baffles and tank condition at the same time so you know what you are working with before anything goes wrong.',
      },
      {
        q: 'Will cleaning fix a slow or backing-up system?',
        a: 'It can, if the problem is a tank full of compacted solids restricting flow. If the trouble is in the drain field instead, cleaning the tank helps but will not fix a clogged field on its own. We diagnose the whole system so you are not paying for a cleaning that was never going to solve the real issue.',
      },
    ],
    image: septicCleaningImg,
    imageAlt: 'Technician cleaning an open septic tank at a Western North Carolina property',
  },
  {
    slug: 'septic-system-repair',
    name: 'Septic System Repair',
    short: 'System Repair',
    blurb: 'Broken lid, collapsed baffle, cracked line, or failed pump? We diagnose and repair the parts that fail.',
    description:
      'A septic system is more than a tank. There are inlet and outlet baffles that control flow, a lid and access risers, the sewer line from the house, the distribution box that splits flow to the drain field, and on many mountain properties a pump and float system that lifts effluent uphill to the field. Any of those can fail — and when they do, you get backups, odors, or a system that quietly stops treating waste. We diagnose and repair septic systems across Western North Carolina. We find the actual problem rather than guessing, replace broken baffles, lids, and risers, repair or replace cracked and root-invaded lines, rebuild distribution boxes, and replace failed effluent pumps and floats. Pump systems are especially common here because so many homes sit below their drain field on a slope, and when a pump quits, the whole system stops until it is fixed.',
    sections: [
      {
        h: 'The parts that actually fail',
        body: 'Baffles corrode and fall off, letting scum flow straight to the drain field. Lids crack — a real safety hazard as well as an entry point for water and roots. The line between the house and the tank cracks, sags, or fills with tree roots. Distribution boxes shift and send all the flow to one field line. And pumps and floats wear out. We carry the common parts and diagnose which one is the issue before we start digging.',
      },
      {
        h: 'Pump and float systems on mountain lots',
        body: 'A lot of WNC homes sit downhill from the only usable spot for a drain field, so the system uses a pump tank and float switches to push effluent uphill. Those pumps and floats are mechanical and they wear out, and when one fails the tank fills with no warning until an alarm sounds or the system backs up. We test, repair, and replace effluent and lift pumps, floats, and alarms, and we make sure the controls are right so you get warning before a failure instead of a mess.',
      },
    ],
    points: [
      'Baffles, lids, and access risers replaced',
      'Cracked, sagging, and root-filled lines repaired or replaced',
      'Distribution boxes rebuilt for even flow to the field',
      'Effluent and lift pumps, floats, and alarms tested and replaced',
      'Real diagnosis first — we fix the actual problem',
      'Common parts carried for one-visit repairs where possible',
    ],
    faqs: [
      {
        q: 'How do I know if it is the tank, the line, or the drain field?',
        a: 'You often cannot tell from the symptoms alone — a backup can come from a clogged line, a full tank, a failed pump, or a saturated drain field. That is why we diagnose before we dig: we check the line, open the tank, test any pump and floats, and look at the field so the repair addresses the real cause instead of the easiest guess.',
      },
      {
        q: 'My septic alarm is going off — what does that mean?',
        a: 'On a pump system, the alarm means the pump tank is filling faster than the pump is emptying it — usually a failed pump, a stuck float, or a tripped breaker. It is a warning, not an immediate overflow, but do not ignore it. Cut back on water use and call us; we test the pump and floats and get it running again.',
      },
      {
        q: 'Can a cracked tank lid really be a problem?',
        a: 'Yes, on two fronts. It is a serious safety hazard — people and animals have fallen into tanks through failed lids — and a cracked lid lets in surface water and roots that overload and damage the system. A new lid, and a riser if the tank is deep, is an inexpensive fix that we can usually do on the spot.',
      },
    ],
    image: septicRepairImg,
    imageAlt: 'Septic system components being repaired at a home in Western North Carolina',
  },
  {
    slug: 'septic-inspections',
    name: 'Septic Inspections',
    short: 'Inspections',
    blurb: 'Buying or selling a home? We inspect the tank, components, and drain field and give you a clear written picture.',
    description:
      'A septic inspection tells you the true condition of a system before it becomes your problem — which is exactly why they matter when a mountain home changes hands. We inspect residential septic systems across Western North Carolina for home buyers, sellers, and owners who just want to know where they stand. We locate and open the tank, pump it if needed to see the bottom, measure the sludge and scum levels, check the baffles, lid, and risers, inspect any pump and float controls, run water to see how the system handles flow, and evaluate the drain field for signs of failure like soggy ground or surfacing effluent. You get a clear rundown of what is good, what is aging, and what needs attention — the honest information you need to buy with confidence, sell without surprises, or budget for the work ahead.',
    sections: [
      {
        h: 'Why it matters most at a home sale',
        body: 'A drain field replacement can run into five figures, and a buyer who skips the septic inspection can inherit exactly that. On the flip side, a seller with a clean, recently inspected system has real proof to hand a buyer. Because so many Western NC homes — cabins, coves, inherited family places, and rural acreage — run on septic rather than sewer, the septic inspection is one of the most important and most overlooked parts of the deal.',
      },
      {
        h: 'What a real inspection covers',
        body: 'A genuine inspection is more than lifting a lid and looking in. We locate and open the tank, measure sludge and scum, check the baffles, lid, and risers, test any pump and float system, run water through the house to watch how the system handles a real load, and walk the drain field for soggy spots, odors, or surfacing effluent. Then you get a plain-language summary of the system age and condition and any work it needs — the information to make a confident decision.',
      },
    ],
    points: [
      'Full inspection for buyers, sellers, and owners',
      'Tank located, opened, and sludge/scum levels measured',
      'Baffles, lids, risers, and pump controls checked',
      'Flow tested by running water through the system',
      'Drain field walked for soggy ground and surfacing effluent',
      'Clear written summary of condition and any needed work',
    ],
    faqs: [
      {
        q: 'Do I need a septic inspection when buying a home?',
        a: 'If the home is on septic — and most rural Western NC homes are — yes, absolutely. A failing drain field can cost five figures to replace, and a standard home inspection does not cover the septic system in any depth. A dedicated septic inspection tells you the real condition before you are the one who owns it.',
      },
      {
        q: 'Will you pump the tank during the inspection?',
        a: 'Often we do, because pumping lets us see the bottom of the tank and the baffles clearly and measure the layers accurately. We will tell you up front whether your inspection includes a pump-out, so there are no surprises on the invoice.',
      },
      {
        q: 'How long does an inspection take and what do I get?',
        a: 'Most inspections take an hour or two depending on access and whether we pump. You get a clear summary of the system: its age and type, the tank and component condition, how it handled a flow test, the state of the drain field, and any repairs or attention it needs so you can plan or negotiate.',
      },
    ],
    image: septicInspectionImg,
    imageAlt: 'Technician inspecting an open septic tank during a home-sale inspection in Western North Carolina',
  },
  {
    slug: 'drain-field-repair',
    name: 'Drain Field Repair',
    short: 'Drain Field',
    blurb: 'Soggy yard, standing water, or odors over the field? We diagnose a struggling drain field and fix what we can.',
    description:
      'The drain field — also called the leach field — is where treated water from the tank soaks back into the ground, and it is both the most important and the most expensive part of a septic system. When a field starts to fail you see it in the yard: spongy or standing water over the lines, lush green grass in strips, sewage odor outside, slow drains in the house, and eventually backups. We diagnose and repair drain field problems across Western North Carolina. A lot of field trouble is not a dead field at all — it is a tank that overflowed solids into the lines, a failed pump, a crushed or root-clogged line, or simply ground saturated from our heavy mountain rains. We find the real cause, and where the field itself is the problem we repair, restore, or rebuild the failed lines rather than assuming the whole thing has to be torn out.',
    sections: [
      {
        h: 'Reading the signs in the yard',
        body: 'A drain field tells on itself above ground. Spongy ground or standing water over the lines, a stripe of unusually green grass, a sewage smell outside near the field, gurgling and slow drains indoors, and backups during heavy use are all signs the field is not absorbing water the way it should. The earlier we look, the more options you have — a field that is struggling can sometimes be saved, while one that is fully clogged with solids usually cannot.',
      },
      {
        h: 'Why mountain fields fail — and what is actually fixable',
        body: 'Western NC is hard on drain fields: rocky and clay soils drain slowly, steep grades concentrate water, and our wet seasons saturate the ground. On top of that, a tank that has not been pumped sends solids into the lines and clogs the soil. The good news is that a lot of "failed field" calls turn out to be a fixable upstream problem — an overflowing tank, a dead pump, a crushed pipe, or roots — not a dead field. We diagnose first so you are not paying to replace a field that did not need replacing.',
      },
    ],
    points: [
      'Diagnosis of standing water, odors, and soggy ground',
      'We rule out tank, pump, and line problems before condemning a field',
      'Crushed, clogged, and root-invaded lines repaired or replaced',
      'Distribution box checked and rebuilt for even flow',
      'Honest call on repair vs. rebuild — no needless tear-outs',
      'Guidance on protecting the field from saturation and overload',
    ],
    faqs: [
      {
        q: 'There is standing water and a smell in my yard — is my drain field dead?',
        a: 'Not necessarily. Those are classic signs of a struggling field, but the cause is often upstream — a tank overflowing solids, a failed pump, or a crushed or clogged line — which is fixable without rebuilding the field. We diagnose the whole system first. The worst thing you can do is keep loading water onto it, so cut back on use and call.',
      },
      {
        q: 'Can a failing drain field be saved, or does it have to be replaced?',
        a: 'It depends on why it is failing. If it is upstream — solids from an unpumped tank, a dead pump, a broken line — fixing that and resting the field can restore it. If the soil in the field is fully clogged with solids, it usually has to be repaired or rebuilt. We give you the honest call instead of defaulting to the most expensive option.',
      },
      {
        q: 'How do I keep my drain field from failing?',
        a: 'Pump the tank on schedule so solids never reach the field, keep heavy water use spread out rather than all at once, keep vehicles and heavy equipment off the field, divert roof and surface runoff away from it, and do not plant trees near the lines. On our wet mountain lots, keeping extra water off the field is half the battle.',
      },
    ],
    image: drainFieldImg,
    imageAlt: 'Drain field repair work at a rural property in Western North Carolina',
  },
  {
    slug: 'emergency-septic-service',
    name: 'Emergency Septic Service',
    short: 'Emergency Service',
    blurb: 'Sewage backing up, toilets won’t flush, or an alarm going off? Fast help to stop the mess and get you running.',
    description:
      'A septic backup is not a "next week" problem — it is sewage coming into your home or surfacing in your yard, and it gets worse and more expensive every hour. If your toilets and drains have stopped working, sewage is backing up into tubs or floor drains, you smell it inside, there is effluent surfacing over the tank or field, or a pump alarm is going off, that is an emergency and we treat it like one. We provide fast emergency septic service across Western North Carolina. We come out, find why the system stopped — a full tank, a clogged or broken line, a failed pump, or a saturated drain field — pump the tank to relieve the backup, and get you running again. The first priority is stopping the mess and getting your household functional; then we tell you straight what failed and what it takes to keep it from happening again.',
    sections: [
      {
        h: 'When a septic problem can’t wait',
        body: 'Some symptoms mean stop using water and call now: sewage backing up into tubs, showers, or floor drains; toilets that will not flush anywhere in the house; sewage odor indoors; effluent surfacing over the tank or drain field; or a pump alarm sounding. Every load of laundry, every flush, every shower adds to a system that has nowhere to put the water. The faster we get there, the less damage and cleanup you are dealing with.',
      },
      {
        h: 'What we do first, and what comes next',
        body: 'On an emergency call the first job is to relieve the backup — usually by pumping the tank down so the house drains again and the mess stops. With the immediate problem under control, we diagnose what actually failed: a tank that was simply overdue, a clogged or collapsed line, a dead pump, or a drain field that has given out. We get you running, then give you the honest picture and a plan so you are not back in the same spot in a month.',
      },
    ],
    points: [
      'Fast response for backups, overflows, and alarms',
      'Tank pumped down to relieve the backup and get you draining',
      'We find the real cause — tank, line, pump, or field',
      'Sewage backing up indoors or surfacing in the yard addressed',
      'Honest plan to prevent a repeat, not just a band-aid',
      'Ask about same-day availability when you call',
    ],
    faqs: [
      {
        q: 'Sewage is backing up into my house — what do I do right now?',
        a: 'Stop using water immediately — no flushing, laundry, or dishes — so you are not adding to a system that has nowhere to drain. Keep people and pets away from the sewage, and call us. Most backups are relieved by pumping the tank down; the faster we get there, the less cleanup and damage you face.',
      },
      {
        q: 'My septic alarm is going off — is that an emergency?',
        a: 'It is a warning that needs prompt attention, not always an instant overflow. On a pump system, the alarm means the pump tank is filling faster than it is emptying — usually a failed pump or stuck float. Cut way back on water use to buy time and call us. Ignore it and it becomes a backup.',
      },
      {
        q: 'How fast can you get to me?',
        a: 'Call with your location and what is happening and we will give you a real time, not a runaround. Backups and overflows get priority because they are a health and property issue. Same-day service is often available — ask when you call.',
      },
      {
        q: 'Will pumping the tank fix the emergency for good?',
        a: 'Pumping relieves the immediate backup and gets your house working again, but it may be treating a symptom. If the cause is a clogged line, a failed pump, or a saturated drain field, that needs to be addressed too or the problem returns. We get you running first, then tell you straight what it will take to keep it fixed.',
      },
    ],
    image: emergencySepticImg,
    imageAlt: 'Emergency septic service truck responding to a backup at a Western North Carolina home',
    emergency: true,
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const MATRIX_SERVICES: Service[] = SERVICES.filter((s) => !s.hubOnly);
