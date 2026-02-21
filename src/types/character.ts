export interface Character {
  id: string
  name: string
  image: string
  status: "Alive" | "Deceased" | "Unknown"
  description: string
  traits: string[]
  quote: string
  actor: string
  seasons: string
  arc: string
}
