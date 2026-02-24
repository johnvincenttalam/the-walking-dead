import { assetUrl } from "../utils/assetUrl"

export interface IconicScene {
  id: string
  title: string
  season: string
  episode: string
  context: string
  image: string
}

export const iconicScenes: IconicScene[] = [
  {
    id: "rick-wakes",
    title: "Days Gone Bye",
    season: "Season 1",
    episode: "Episode 1",
    context:
      "Rick Grimes wakes from a coma to a world that ended while he slept. The empty hospital corridor stretches before him — silence where there should be life.",
    image: assetUrl("/images/scenes/Days Gone Bye.jpg"),
  },
  {
    id: "barn-scene",
    title: "The Barn",
    season: "Season 2",
    episode: "Episode 7",
    context:
      "The doors open and the dead pour out. Among them, the one face nobody expected — Sophia. Hope dies in a single gunshot.",
    image: assetUrl("/images/scenes/The Barn.jpg"),
  },
  {
    id: "look-at-the-flowers",
    title: "Look at the Flowers",
    season: "Season 4",
    episode: "Episode 14",
    context:
      "Carol makes the hardest choice of her life. Four words that will echo through the fandom forever. Innocence lost cannot be reclaimed.",
    image: assetUrl("/images/scenes/Look at the Flowers.jpg"),
  },
  {
    id: "terminus",
    title: "No Sanctuary",
    season: "Season 5",
    episode: "Episode 1",
    context:
      "Terminus promised sanctuary. It delivered slaughter. Carol's one-woman assault turns the tide — fire, smoke, and the fury of a mother unleashed.",
    image: assetUrl("/images/scenes/No Sanctuary.jpg"),
  },
  {
    id: "glenn-dumpster",
    title: "Thank You",
    season: "Season 6",
    episode: "Episode 3",
    context:
      "Glenn falls into a sea of walkers. For weeks the world held its breath. Is he alive? The dumpster heard round the world.",
    image: assetUrl("/images/scenes/Thank You.jpg"),
  },
  {
    id: "negan-lineup",
    title: "Last Day on Earth",
    season: "Season 6",
    episode: "Episode 16",
    context:
      "Eeny. Meeny. Miny. Moe. The most agonizing cliffhanger in television history. Lucille chooses, and the audience screams.",
    image: assetUrl("/images/scenes/Last Day on Earth.jpg"),
  },
  {
    id: "pike-border",
    title: "The Calm Before",
    season: "Season 9",
    episode: "Episode 15",
    context:
      "Alpha marks her border with the heads of the fallen. Ten pikes. Ten friends. The horizon will never look the same.",
    image: assetUrl("/images/scenes/The Calm Before.jpg"),
  },
  {
    id: "ricks-bridge",
    title: "What Comes After",
    season: "Season 9",
    episode: "Episode 5",
    context:
      "Rick detonates the bridge to save everyone — and vanishes. The explosion marks the end of an era and the beginning of a mystery that spans years.",
    image: assetUrl("/images/scenes/What Comes After.jpg"),
  },
]
