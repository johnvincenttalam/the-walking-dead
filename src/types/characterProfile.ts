export interface KeyMoment {
  title: string
  season: number
  episode: number
  episodeTitle: string
  description: string
  isSpoiler: boolean
}

export interface CharacterRelationship {
  characterId: string
  name: string
  type: "Ally" | "Enemy" | "Family" | "Romantic" | "Rival" | "Mentor"
  description: string
  revealsDeath?: boolean
}

export interface CharacterStats {
  firstAppearance: string
  lastAppearance: string
  episodeCount: number
  killCountEstimate: string
  weaponOfChoice: string
  groupAffiliations: string[]
}

export interface CharacterProfile {
  characterId: string
  biography: string[]
  keyMoments: KeyMoment[]
  relationships: CharacterRelationship[]
  stats: CharacterStats
  additionalQuotes: string[]
  galleryImages: string[]
}
