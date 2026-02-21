export interface Answer {
  text: string
  type: "rick" | "daryl" | "michonne" | "carol" | "negan" | "glenn"
}

export interface Question {
  question: string
  answers: Answer[]
}

export interface ResultData {
  name: string
  title: string
  description: string
  trait: string
}

// Each character appears exactly 4 times across 6 questions (24 slots / 6 characters)
export const questions: Question[] = [
  {
    question: "Your group discovers a new settlement. What's your move?",
    answers: [
      { text: "Scout it first, then approach with a plan", type: "rick" },
      { text: "Watch from a distance — trust no one", type: "daryl" },
      { text: "Go in alone to assess the threat", type: "michonne" },
      { text: "Blend in and gather intel before revealing yourself", type: "carol" },
    ],
  },
  {
    question: "A member of your group betrays you. How do you respond?",
    answers: [
      { text: "Confront them — everyone gets one chance to explain", type: "rick" },
      { text: "Cut them loose. Loyalty is everything", type: "daryl" },
      { text: "Make an example so it never happens again", type: "negan" },
      { text: "Forgive them, but never forget. Keep them close", type: "carol" },
    ],
  },
  {
    question: "What's your greatest strength in the apocalypse?",
    answers: [
      { text: "Making the hard calls nobody else will", type: "rick" },
      { text: "Reading people — I always know their angle", type: "negan" },
      { text: "Staying invisible until the moment I strike", type: "michonne" },
      { text: "Finding hope and keeping morale alive", type: "glenn" },
    ],
  },
  {
    question: "You find a safe place with food and walls. What now?",
    answers: [
      { text: "Set the rules — someone has to be in charge", type: "negan" },
      { text: "Keep moving. Walls make you complacent", type: "daryl" },
      { text: "Run supply missions and build up resources", type: "glenn" },
      { text: "Secure the perimeter and plan for the worst", type: "michonne" },
    ],
  },
  {
    question: "How do you handle someone who can't pull their weight?",
    answers: [
      { text: "Teach them. Everyone has potential", type: "glenn" },
      { text: "Evaluate them — assign what matches their skills", type: "michonne" },
      { text: "Protect them. Not everyone needs to fight", type: "carol" },
      { text: "If they can't keep up, they're a liability", type: "negan" },
    ],
  },
  {
    question: "What drives you to keep going?",
    answers: [
      { text: "The people I love. I'd burn the world for them", type: "rick" },
      { text: "Proving I'm more than what people expect", type: "daryl" },
      { text: "Building something that outlasts me", type: "glenn" },
      { text: "Becoming someone nobody can ever hurt again", type: "carol" },
    ],
  },
]

export const results: Record<string, ResultData> = {
  rick: {
    name: "Rick Grimes",
    title: "The Leader",
    description:
      "You're a natural-born leader who makes the impossible calls. People follow you not because you're perfect, but because you'd sacrifice everything for your people. The weight of the world is on your shoulders — and you carry it.",
    trait: "Leadership through sacrifice",
  },
  daryl: {
    name: "Daryl Dixon",
    title: "The Lone Wolf",
    description:
      "Actions speak louder than words, and yours scream loyalty. You trust your instincts over everything else and prefer to show your heart through what you do, not what you say. The wild is your home.",
    trait: "Fierce loyalty & survival instinct",
  },
  michonne: {
    name: "Michonne",
    title: "The Warrior",
    description:
      "Silent, strategic, and deadly when you need to be. You've survived the worst and come out stronger. You don't waste energy on talk — when you move, it's decisive and final.",
    trait: "Strategic precision",
  },
  carol: {
    name: "Carol Peletier",
    title: "The Chameleon",
    description:
      "Never underestimate the quiet ones. You adapt to any situation, wearing whatever mask is needed. Beneath the calm exterior is someone fiercely protective and more dangerous than anyone suspects.",
    trait: "Adaptive intelligence",
  },
  negan: {
    name: "Negan",
    title: "The Commander",
    description:
      "You understand that power is a performance. Charismatic and calculated, you know how to read a room and control it. You'd rather be feared and effective than loved and weak.",
    trait: "Charismatic authority",
  },
  glenn: {
    name: "Glenn Rhee",
    title: "The Heart",
    description:
      "In a world that rewards cruelty, you choose compassion. You're the one who runs into danger to save a stranger, who believes in people when no one else does. You're proof that hope is a survival skill.",
    trait: "Unbreakable hope",
  },
}
