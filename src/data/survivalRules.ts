export interface SurvivalRule {
  id: string
  number: number
  rule: string
  subtext: string
}

export const survivalRules: SurvivalRule[] = [
  {
    id: "cardio",
    number: 1,
    rule: "Cardio saves lives",
    subtext: "You don't have to be the fastest. Just don't be the slowest.",
  },
  {
    id: "trust",
    number: 2,
    rule: "Never trust clean clothes",
    subtext:
      "If someone looks untouched by this world, they're hiding something.",
  },
  {
    id: "walls",
    number: 3,
    rule: "Walls don't keep you safe - people do",
    subtext:
      "Alexandria. Woodbury. The Prison. Every wall fell. Only the bonds between survivors endure.",
  },
  {
    id: "real-threat",
    number: 4,
    rule: "The dead aren't the real threat",
    subtext:
      "Walkers are predictable. Humans lie, betray, and wage war. Fear the living.",
  },
  {
    id: "weapons",
    number: 5,
    rule: "Always have a blade within reach",
    subtext:
      "Guns are loud. Ammo runs out. A knife never needs reloading.",
  },
  {
    id: "alone",
    number: 6,
    rule: "Going alone is a death sentence",
    subtext:
      "Every loner in this world eventually faces a herd they can't outrun. Find your people.",
  },
  {
    id: "supplies",
    number: 7,
    rule: "Take only what you can carry at a run",
    subtext:
      "Greed gets you killed. Pack light, move fast, live another day.",
  },
  {
    id: "remember",
    number: 8,
    rule: "Never forget who you were",
    subtext:
      "The apocalypse changes everyone. The ones who survive with their soul intact are the ones who remember why they fight.",
  },
]
