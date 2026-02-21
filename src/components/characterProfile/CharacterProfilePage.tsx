import type { Character } from "../../types/character"
import type { CharacterProfile } from "../../types/characterProfile"
import { memorialEntries } from "../../data/memorialData"
import Footer from "../layout/Footer"
import ProfileHero from "./ProfileHero"
import ProfileQuickStats from "./ProfileQuickStats"
import ProfileBiography from "./ProfileBiography"
import ProfileKeyMoments from "./ProfileKeyMoments"
import ProfileRelationships from "./ProfileRelationships"
import ProfileGallery from "./ProfileGallery"
import ProfileQuotes from "./ProfileQuotes"
import ProfileNavigation from "./ProfileNavigation"

interface Props {
  character: Character
  profile: CharacterProfile
}

export default function CharacterProfilePage({ character, profile }: Props) {
  const memorial = memorialEntries.find((m) => m.characterId === character.id)

  return (
    <>
      <main className="bg-background min-h-screen">
        <ProfileHero character={character} />
        <ProfileQuickStats stats={profile.stats} />
        <ProfileBiography
          biography={profile.biography}
          character={character}
          memorial={memorial ? {
            causeOfDeath: memorial.causeOfDeath,
            deathSeason: memorial.deathSeason,
            deathEpisode: memorial.deathEpisode,
          } : undefined}
        />
        <ProfileKeyMoments moments={profile.keyMoments} characterName={character.name} />
        <ProfileRelationships relationships={profile.relationships} />
        {profile.galleryImages.length > 0 && (
          <ProfileGallery images={profile.galleryImages} characterName={character.name} />
        )}
        <ProfileQuotes
          mainQuote={character.quote}
          additionalQuotes={profile.additionalQuotes}
          characterName={character.name}
        />
        <ProfileNavigation currentId={character.id} />
      </main>
      <Footer />
    </>
  )
}
