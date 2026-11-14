import type { FaqItem } from "@/components/FaqAccordion";

const WHAT_IS: FaqItem = {
  q: "What is Power Rush?",
  a: "Power Rush is a single-serve drink mix in a sachet. You add water, shake and drink. No kettle needed.",
};
const IN_ONE_SERVING: FaqItem = {
  q: "What is in one serving?",
  a: "Each serving has 3 g creatine, 500 mg taurine, 125 mg caffeine and B-complex.",
};
const HOW_TO_USE: FaqItem = {
  q: "How do I use Power Rush?",
  a: "Mix one serving in 200 to 250 ml of cold water, shake well and drink.",
};
const SERVINGS_PER_POUCH: FaqItem = {
  q: "How many servings are in one pouch?",
  a: "The orange pouch has 5 servings.",
};
const FLAVOURS: FaqItem = {
  q: "Which flavours are available?",
  a: "Orange and Lemon right now.",
};
const CAFFEINE: FaqItem = {
  q: "How much caffeine is in Power Rush?",
  a: "125 mg per serving. It is the same amount every time, and it is printed on the pack.",
};
const VS_TEA_COFFEE: FaqItem = {
  q: "Is Power Rush better than tea or coffee?",
  a: "We do not call it healthier. It is quicker and simpler: no kettle, no queue, and a fixed dose each time.",
};
const REPLACE_CHAI: FaqItem = {
  q: "Can Power Rush replace my chai or coffee?",
  a: "It can be your easy option when you have no time or no kettle. It is your choice how often.",
};
const PRODUCT_TYPE: FaqItem = {
  q: "What kind of product is it?",
  a: "A caffeinated powder drink mix that you stir into water. It is not a food replacement.",
};
const WHO_CAN: FaqItem = {
  q: "Who can have it?",
  a: "Healthy adults aged 18 and above.",
};
const SERVINGS_PER_DAY: FaqItem = {
  q: "How many servings can I have in a day?",
  a: "One serving a day. Please do not have more.",
};
const BEST_TIME: FaqItem = {
  q: "When is the best time to have it?",
  a: "In the daytime or early evening. Avoid it close to bedtime.",
};
const WITH_CHAI: FaqItem = {
  q: "Can I have it along with chai or coffee?",
  a: "You can, but caffeine adds up. Many health authorities suggest about 400 mg a day for healthy adults, so count every source.",
};
const SUGAR: FaqItem = {
  q: "Does it have sugar?",
  a: "The pack says no sugar. It is sweetened with sucralose.",
};
const CREATINE: FaqItem = {
  q: "Is creatine safe?",
  a: "Creatine monohydrate is widely studied. Drink plenty of water, and ask your doctor if you have a medical condition.",
};
const WORKOUT: FaqItem = {
  q: "Do I need to work out to use it?",
  a: "No. It is made for everyday moments like office hours, study sessions and travel.",
};
const STUDYING: FaqItem = {
  q: "Can I have it while studying?",
  a: "Yes, if you are an adult. Keep it away from bedtime, because good sleep helps you remember what you studied.",
};
const AWAKE: FaqItem = {
  q: "Will it keep me awake at night?",
  a: "It can, because it has caffeine. Have it earlier in the day.",
};
const DRIVING: FaqItem = {
  q: "Can I have it before driving?",
  a: "Do not depend on it. If you feel sleepy while driving, stop and rest.",
};
const WHERE_TO_BUY: FaqItem = {
  q: "Where can I buy Power Rush?",
  a: "Visit therushperformance.com to see where to buy it.",
};
const STORAGE: FaqItem = {
  q: "How should I store it?",
  a: "Keep it in a cool, dry place, away from direct sunlight.",
};
const MILK_JUICE: FaqItem = {
  q: "Can I mix it with milk or juice?",
  a: "We suggest water, as written on the pack.",
};
const LUMPY: FaqItem = {
  q: "Why does the powder get lumpy?",
  a: "Moisture causes lumps. Keep the pouch sealed and dry, and shake well after mixing.",
};
const SIDE_EFFECTS: FaqItem = {
  q: "Are there any side effects?",
  a: "Too much caffeine can cause restlessness, a racing heart or poor sleep. If that happens, cut back.",
};
const TRAVEL: FaqItem = {
  q: "Is it a good option when I travel?",
  a: "Yes. A sachet is light, fits in any bag and needs only water.",
};
const WHY_CHOOSE: FaqItem = {
  q: "Why choose Power Rush?",
  a: "It is quick and portable. Chai se aage. Rush se shuru.",
};

/** All FAQs, grouped for the /faq page. */
export const FAQ_GROUPS: { title: string; items: FaqItem[] }[] = [
  {
    title: "About Power Rush",
    items: [WHAT_IS, PRODUCT_TYPE, IN_ONE_SERVING, SERVINGS_PER_POUCH, FLAVOURS, SUGAR, WHY_CHOOSE],
  },
  {
    title: "How to use it",
    items: [HOW_TO_USE, SERVINGS_PER_DAY, BEST_TIME, AWAKE, MILK_JUICE, LUMPY],
  },
  {
    title: "Caffeine and ingredients",
    items: [CAFFEINE, WITH_CHAI, VS_TEA_COFFEE, REPLACE_CHAI, CREATINE, SIDE_EFFECTS],
  },
  {
    title: "Who it's for",
    items: [WHO_CAN, WORKOUT, STUDYING, DRIVING, TRAVEL],
  },
  {
    title: "Buying and storage",
    items: [WHERE_TO_BUY, STORAGE],
  },
];

/** Short selection shown in the homepage FAQ section. */
export const HOME_FAQS: FaqItem[] = [WHAT_IS, HOW_TO_USE, CAFFEINE, WORKOUT, FLAVOURS];
