export interface DeathTollStat {
  id: string
  value: number
  suffix: string
  label: string
}

export const deathTollStats: DeathTollStat[] = [
  {
    id: "walker-kills",
    value: 2500,
    suffix: "+",
    label: "Walker Kills",
  },
  {
    id: "character-deaths",
    value: 14,
    suffix: "",
    label: "Major Character Deaths",
  },
  {
    id: "communities-destroyed",
    value: 6,
    suffix: "",
    label: "Communities Destroyed",
  },
  {
    id: "days-survived",
    value: 2500,
    suffix: "+",
    label: "Days Survived",
  },
  {
    id: "seasons-of-terror",
    value: 11,
    suffix: "",
    label: "Seasons of Terror",
  },
]
