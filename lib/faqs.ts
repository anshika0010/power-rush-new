import type { FaqItem } from "@/components/FaqAccordion";

/* ---------- About Power Rush ---------- */
const WHAT_IS: FaqItem = {
  q: "What is Power Rush?",
  a: "Power Rush is a single-serve performance drink mix that comes in a sachet. You add it to water, shake and drink. You do not need a kettle or a fridge.",
};
const PRODUCT_TYPE: FaqItem = {
  q: "What type of product is it?",
  a: "It is a caffeinated powder drink mix. It is not a meal replacement and it is not a medicine.",
};
const ENERGY_DRINK: FaqItem = {
  q: "Is Power Rush an energy drink?",
  a: "No. It is a performance drink mix. It is a powder you stir into water, and it is made for everyday focus moments such as work, study and travel, not only for workouts.",
};
const IN_ONE_SERVING: FaqItem = {
  q: "What is in one serving?",
  a: "Each serving has 125 mg of caffeine, 3 g of creatine monohydrate, 500 mg of taurine and B-complex vitamins.",
};
const SERVINGS_PER_POUCH: FaqItem = {
  q: "How many servings are in a pouch?",
  a: "A pouch has 5 servings.",
};
const FLAVOURS: FaqItem = {
  q: "Which flavours are there?",
  a: "Orange, Lemon, Strawberry and Mango.",
};
const SUGAR: FaqItem = {
  q: "Does Power Rush have sugar?",
  a: "No. It has no sugar and is sweetened with sucralose.",
};
const WHO_MAKES: FaqItem = {
  q: "Who makes Power Rush?",
  a: "Power Rush is made by The Rush Performance. You can reach the team through the contact page.",
};

/* ---------- How to use it ---------- */
const HOW_TO_MAKE: FaqItem = {
  q: "How do I make Power Rush?",
  a: "Mix one serving in 200 to 250 ml of cold water, shake well and drink.",
};
const SERVINGS_PER_DAY: FaqItem = {
  q: "How many servings can I have in a day?",
  a: "One. Please do not have more than one serving a day.",
};
const WHEN_TO_DRINK: FaqItem = {
  q: "When should I drink it?",
  a: "In the daytime or early evening. Avoid it close to bedtime.",
};
const AWAKE: FaqItem = {
  q: "Will it keep me awake at night?",
  a: "It can, because it contains caffeine. Have it earlier in the day.",
};
const MILK_JUICE: FaqItem = {
  q: "Can I mix it with milk or juice?",
  a: "We recommend water, as written on the pack.",
};
const HOT_WATER: FaqItem = {
  q: "Can I use hot water?",
  a: "No. Cold water gives the best result.",
};
const LUMPY: FaqItem = {
  q: "Why is my powder lumpy?",
  a: "Moisture causes lumps. Keep the pouch sealed and dry, and shake well after you mix it.",
};

/* ---------- Caffeine and ingredients ---------- */
const CAFFEINE: FaqItem = {
  q: "How much caffeine is in Power Rush?",
  a: "There is 125 mg of caffeine in one serving. The amount is the same every time and it is printed on the pack.",
};
const VS_COFFEE_AMOUNT: FaqItem = {
  q: "How does that compare to coffee?",
  a: "A regular cup of brewed coffee usually has somewhere around 80 to 100 mg, and a strong mug can have more. Tea usually has less. The exact amount depends on the cup and the brew.",
};
const WITH_TEA_COFFEE: FaqItem = {
  q: "Can I have it with tea or coffee?",
  a: "You can, but caffeine adds up. Many health authorities suggest up to about 400 mg a day for healthy adults, so count every source.",
};
const BETTER_THAN_COFFEE: FaqItem = {
  q: "Is Power Rush better than coffee?",
  a: "We do not say it is healthier. It is faster and simpler: no kettle, no queue, and a fixed amount every time.",
};
const REPLACE_COFFEE: FaqItem = {
  q: "Can Power Rush replace my coffee?",
  a: "It can be your quick option when you do not have time or a kettle. How often you use it is up to you.",
};
const CREATINE: FaqItem = {
  q: "Is creatine safe?",
  a: "Creatine monohydrate is one of the most studied supplement ingredients. Drink plenty of water, and ask your doctor if you have a medical condition.",
};
const TAURINE: FaqItem = {
  q: "What does taurine do?",
  a: "Taurine is an amino acid that your body makes and that you also get from food. It is found in many performance drinks.",
};
const SIDE_EFFECTS: FaqItem = {
  q: "Are there side effects?",
  a: "Too much caffeine can cause restlessness, a fast heartbeat or trouble sleeping. If that happens, cut back.",
};

/* ---------- Who it is for ---------- */
const WHO_CAN: FaqItem = {
  q: "Who can have Power Rush?",
  a: "Healthy adults aged 18 and over.",
};
const WORKOUT: FaqItem = {
  q: "Do I need to work out to use it?",
  a: "No. It is made for everyday moments like office hours, study sessions and travel.",
};
const STUDENTS: FaqItem = {
  q: "Can students have it?",
  a: "Yes, if they are 18 or older. Keep it away from bedtime, because good sleep helps you remember what you studied.",
};
const DRIVING: FaqItem = {
  q: "Can I have it before driving?",
  a: "Do not rely on it. If you feel sleepy while driving, stop and rest.",
};
const TRAVEL: FaqItem = {
  q: "Is it okay for travel?",
  a: "Yes. A sachet is light, fits in any bag and needs only water.",
};
const PREGNANT: FaqItem = {
  q: "Can pregnant or breastfeeding women have it?",
  a: "No. It is not recommended for them.",
};

/* ---------- Buying and storage ---------- */
// TODO: add store links / marketplaces / "Buy now" once confirmed.
const WHERE_TO_BUY: FaqItem = {
  q: "Where can I buy Power Rush?",
  a: "Visit therushperformance.com to see where to buy it. You can also join the newsletter to hear about new stores and countries first.",
};
// TODO: add "Do you ship internationally?" once shipping countries are confirmed.
const STORAGE: FaqItem = {
  q: "How should I store it?",
  a: "Keep it in a cool, dry place away from direct sunlight. Seal the pouch after opening.",
};
const SHELF_LIFE: FaqItem = {
  q: "How long does it last?",
  a: "Check the best-before date printed on the pack.",
};

/** All FAQs, grouped for the /faq page. */
export const FAQ_GROUPS: { title: string; items: FaqItem[] }[] = [
  {
    title: "About Power Rush",
    items: [
      WHAT_IS,
      PRODUCT_TYPE,
      ENERGY_DRINK,
      IN_ONE_SERVING,
      SERVINGS_PER_POUCH,
      FLAVOURS,
      SUGAR,
      WHO_MAKES,
    ],
  },
  {
    title: "How to use it",
    items: [HOW_TO_MAKE, SERVINGS_PER_DAY, WHEN_TO_DRINK, AWAKE, MILK_JUICE, HOT_WATER, LUMPY],
  },
  {
    title: "Caffeine and ingredients",
    items: [
      CAFFEINE,
      VS_COFFEE_AMOUNT,
      WITH_TEA_COFFEE,
      BETTER_THAN_COFFEE,
      REPLACE_COFFEE,
      CREATINE,
      TAURINE,
      SIDE_EFFECTS,
    ],
  },
  {
    title: "Who it is for",
    items: [WHO_CAN, WORKOUT, STUDENTS, DRIVING, TRAVEL, PREGNANT],
  },
  {
    title: "Buying and storage",
    items: [WHERE_TO_BUY, STORAGE, SHELF_LIFE],
  },
];

/** Short selection shown in the homepage and product page FAQ sections. */
export const HOME_FAQS: FaqItem[] = [WHAT_IS, HOW_TO_MAKE, CAFFEINE, WORKOUT, FLAVOURS];
