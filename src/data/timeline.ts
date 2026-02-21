export interface TimelineEvent {
  id: string
  era: string
  year: string
  title: string
  description: string
  highlight?: boolean
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "atlanta",
    era: "Season 1",
    year: "2010",
    title: "Atlanta",
    description:
      "Rick Grimes wakes from a coma into a world overrun by the dead. He reunites with his family and a group of survivors camped outside Atlanta. The CDC's destruction marks the end of hope for a cure.",
    highlight: true,
  },
  {
    id: "farm",
    era: "Season 2",
    year: "2011",
    title: "Hershel's Farm",
    description:
      "The group seeks refuge on Hershel Greene's farm. Tensions rise as secrets about the barn walkers emerge. Shane's descent and death force Rick into a new role — one willing to kill to survive.",
  },
  {
    id: "prison",
    era: "Seasons 3–4",
    year: "2012–13",
    title: "The Prison Era",
    description:
      "The survivors fortify a prison as their new home. The arrival of the Governor brings war, devastating losses, and the fall of their sanctuary. The group is scattered across Georgia.",
    highlight: true,
  },
  {
    id: "terminus",
    era: "Season 4–5",
    year: "2014",
    title: "Terminus & The Road",
    description:
      "Separated and desperate, the survivors follow signs to Terminus — only to discover it's a trap. Rick's declaration 'They're screwing with the wrong people' marks his transformation into a ruthless leader.",
  },
  {
    id: "alexandria",
    era: "Seasons 5–6",
    year: "2015",
    title: "Alexandria",
    description:
      "The group discovers the walled community of Alexandria. Adjusting to 'normal' life proves harder than surviving outside. The arrival of Negan's Saviors shatters any illusion of peace.",
    highlight: true,
  },
  {
    id: "negan-war",
    era: "Seasons 7–8",
    year: "2016–17",
    title: "All Out War",
    description:
      "Negan's reign of terror begins with devastating losses. The communities unite — Alexandria, Hilltop, and the Kingdom — to fight back in an all-out war that reshapes the world.",
    highlight: true,
  },
  {
    id: "whisperers",
    era: "Seasons 9–10",
    year: "2018–20",
    title: "The Whisperer War",
    description:
      "Years pass. A new threat emerges: the Whisperers, who wear walker skin and command herds. Alpha and Beta push the survivors to their limits. The pike border remains one of TV's most shocking moments.",
  },
  {
    id: "commonwealth",
    era: "Season 11",
    year: "2021–22",
    title: "The Commonwealth",
    description:
      "The final chapter introduces the Commonwealth — a massive network recreating pre-apocalypse society, complete with class systems and corruption. The survivors must decide what kind of world they want to build.",
    highlight: true,
  },
]
