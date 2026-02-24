import type { CharacterProfile } from "../types/characterProfile"
import { assetUrl } from "../utils/assetUrl"

export const characterProfiles: CharacterProfile[] = [
  // ─── RICK GRIMES ──────────────────────────────────────────────────────────────
  {
    characterId: "rick-grimes",
    biography: [
      "Before the apocalypse, Rick Grimes served as a dedicated sheriff's deputy in King County, Georgia, alongside his partner and best friend Shane Walsh. During a routine pursuit, Rick was shot in the line of duty and fell into a deep coma. He awoke weeks later in an abandoned, overrun hospital to a world completely transformed by the walker outbreak. Stumbling through the devastated landscape, Rick eventually found his wife Lori and son Carl alive among a small group of survivors camped outside Atlanta, reuniting with them against all odds.",

      "Rick quickly rose as the group's natural leader, though his authority was immediately contested by Shane, who had begun a relationship with Lori believing Rick was dead. The simmering rivalry between the two men reached its tragic conclusion on Hershel Greene's farm, where Rick was forced to kill Shane in self-defense. After the farm fell to a massive herd, Rick led the survivors to an abandoned prison that became their most stable home yet. However, peace was shattered when the Governor, the tyrannical leader of nearby Woodbury, waged a devastating war that destroyed the prison and scattered the group.",

      "The losses at the prison hardened Rick into a more brutal survivor. He and the remnants of his group fought their way through cannibalistic Terminus, delivered his now-famous warning that their captors were 'screwing with the wrong people,' and eventually arrived at the walled community of Alexandria. In a powerful moment of vulnerability inside a barn during a storm, Rick told his people 'We are the walking dead,' crystallizing the group's identity as survivors who endure no matter what. At Alexandria, Rick found unexpected love with Michonne, forming a partnership that became the emotional anchor of his later years.",

      "Rick's greatest trials came during the war against Negan and the Saviors. He was forced to kneel helplessly as Negan bludgeoned Abraham Ford and Glenn Rhee to death with his barbed-wire bat Lucille, a trauma that nearly broke him. The death of his son Carl, who was bitten and chose to end his own life, shattered Rick further but also inspired him to seek mercy over wrath. In a desperate final act, Rick detonated a bridge to stop a massive walker herd from reaching the communities, and was presumed dead by his people. In truth, he was rescued by a CRM helicopter and carried away to an unknown fate, disappearing from the lives of everyone who loved him."
    ],
    keyMoments: [
      {
        title: "Waking Up",
        season: 1,
        episode: 1,
        episodeTitle: "Days Gone Bye",
        description:
          "Rick Grimes awakens from his coma in an empty, decaying hospital to discover the world has ended. Stumbling through corridors littered with bodies and barricaded doors, he steps outside into a landscape of utter devastation, setting the entire series into motion.",
        isSpoiler: false,
      },
      {
        title: "Killing Shane",
        season: 2,
        episode: 12,
        episodeTitle: "Better Angels",
        description:
          "After months of escalating tension, Shane lures Rick into a field with the intention of killing him. Rick, realizing what his former best friend has become, drives a knife into Shane's chest in an act of heartbroken self-preservation. Carl then shoots the reanimated Shane, marking the end of Rick's innocence and the beginning of his transformation.",
        isSpoiler: true,
      },
      {
        title: "We Are The Walking Dead",
        season: 5,
        episode: 10,
        episodeTitle: "Them",
        description:
          "Exhausted, starving, and grieving after a string of devastating losses, the group shelters in a barn during a violent storm. Rick delivers a raw, defining speech about his grandfather's experience in World War II, declaring that they must tell themselves every day that they are the walking dead in order to survive. The moment galvanizes the broken group and becomes the philosophical thesis of the entire series.",
        isSpoiler: false,
      },
      {
        title: "The Lineup",
        season: 7,
        episode: 1,
        episodeTitle: "The Day Will Come When You Won't Be",
        description:
          "Negan forces Rick and his people to their knees and plays a sadistic game of 'eeny, meeny, miny, moe' to select his victim. He brutally murders Abraham Ford with Lucille, and when Daryl lashes out in rage, Negan punishes the group by beating Glenn Rhee to death as well. Rick is left utterly shattered, reduced to a trembling shell of the leader he once was.",
        isSpoiler: true,
      },
      {
        title: "The Bridge",
        season: 9,
        episode: 5,
        episodeTitle: "What Comes After",
        description:
          "Gravely wounded and delirious, Rick leads a massive herd of walkers toward a bridge the communities have been building together. In a final act of sacrifice, he shoots a case of dynamite and blows the bridge, taking the herd with it and saving the communities. His people believe he died in the explosion, but he is found alive downriver by Anne, who calls in a CRM helicopter that carries him away to parts unknown.",
        isSpoiler: true,
      },
    ],
    relationships: [
      {
        characterId: "daryl-dixon",
        name: "Daryl Dixon",
        type: "Ally",
        description:
          "Daryl became the brother Rick chose, their bond forged through countless battles and shared losses. From an uneasy beginning with a volatile redneck outsider, their relationship grew into the most dependable partnership in the apocalypse, with Daryl serving as Rick's right hand and most trusted confidant.",
      },
      {
        characterId: "michonne",
        name: "Michonne",
        type: "Romantic",
        description:
          "What began as wary mutual respect between two fierce survivors blossomed into the deepest love story of the series. Michonne became Carl's surrogate mother and Rick's equal partner in every way, their relationship representing the possibility that love and family can still be found even in the darkest of worlds.",
      },
      {
        characterId: "negan",
        name: "Negan",
        type: "Enemy",
        description:
          "Negan systematically dismantled Rick's confidence and authority, murdering his friends and subjugating his community. Their conflict defined the series' middle era, and Rick's ultimate decision to spare Negan's life — slashing his throat but then ordering him saved — honored Carl's dying wish for a more merciful world.",
        revealsDeath: false,
      },
      {
        characterId: "glenn-rhee",
        name: "Glenn Rhee",
        type: "Ally",
        description:
          "Glenn was the first person to save Rick in the new world, guiding him out of a tank surrounded by walkers in downtown Atlanta with nothing but a radio and quick thinking. Their bond was built on that foundational act of selfless bravery, and Glenn's murder at the hands of Negan haunted Rick for the rest of his days, driving much of his rage during the Savior War.",
        revealsDeath: true,
      },
    ],
    stats: {
      firstAppearance: "S1 E1 — Days Gone Bye",
      lastAppearance: "S9 E5 — What Comes After",
      episodeCount: 120,
      killCountEstimate: "~54 living, 200+ walkers",
      weaponOfChoice: "Colt Python Revolver",
      groupAffiliations: [
        "King County Sheriff's Dept",
        "Atlanta Survivors",
        "The Prison Council",
        "Alexandria Safe-Zone",
        "Militia",
      ],
    },
    additionalQuotes: [
      "They're gonna feel pretty stupid when they find out they're screwing with the wrong people.",
      "I'm doing stuff, Lori. Things.",
      "This isn't a democracy anymore.",
    ],
    galleryImages: [
      assetUrl("/images/characters/rick.jpg"),
      assetUrl("/images/characters/rick1.jpg"),
      assetUrl("/images/characters/rick2.jpg"),
      assetUrl("/images/characters/rick3.jpg"),
      assetUrl("/images/characters/rick4.jpg"),
    ],
  },

  // ─── DARYL DIXON ──────────────────────────────────────────────────────────────
  {
    characterId: "daryl-dixon",
    biography: [
      "Daryl Dixon grew up in the mountains of rural Georgia under the shadow of an abusive, alcoholic father and a neglectful household. His older brother Merle was the closest thing he had to family, though Merle's influence was often toxic and self-serving. When the apocalypse hit, the Dixon brothers attached themselves to the Atlanta survivor camp as rough, distrusted outsiders. Daryl's extraordinary skills as a hunter and tracker quickly proved invaluable, even as his volatile temper and loner instincts kept others at a distance.",

      "Over time, Daryl underwent one of the series' most profound transformations, evolving from a hostile outsider into the emotional core of the group. His obsessive, solitary search for the missing girl Sophia on Hershel's farm — during which he nearly died after falling from a ridge and being impaled by his own crossbow bolt — revealed a depth of compassion no one expected. The loss of his brother Merle, who sacrificed himself in a doomed solo assault on the Governor, left Daryl as the last Dixon standing. He became Rick Grimes' most trusted right hand, a role he earned through unwavering loyalty and a willingness to do whatever the group needed, no matter the personal cost.",

      "Daryl endured some of the most devastating losses in the group's history and carried the weight of survivor's guilt like no other. He was the one to carry Beth Greene's lifeless body out of Grady Memorial Hospital after she was shot, a scene of silent anguish that broke him. During Negan's lineup, Daryl's defiant punch at Negan directly provoked the second killing — Glenn's death — a guilt he carried for years afterward. Imprisoned by the Saviors and subjected to psychological torture including sleep deprivation and the relentless playing of 'Easy Street,' Daryl refused to submit, answering Negan's demand for his name with a single word: 'Daryl.'",

      "After Rick's apparent death at the bridge, Daryl retreated into the wilderness for six years with only his dog, aptly named Dog, for companionship. He spent those years obsessively searching for any sign that Rick had survived, unable to accept that his brother-in-arms was truly gone. Eventually he returned to help lead the communities through the threats of the Whisperers and the Commonwealth. Following the final battle, Daryl departed on a journey that would take him far from home, eventually reaching the shores of France in search of new purpose and new answers."
    ],
    keyMoments: [
      {
        title: "Searching for Sophia",
        season: 2,
        episode: 5,
        episodeTitle: "Chupacabra",
        description:
          "While searching alone for the missing Sophia Peletier, Daryl falls down a steep ravine and is impaled by one of his own crossbow bolts. Delirious and hallucinating visions of Merle mocking him, he drags himself back to the farm through sheer willpower, revealing a determination and heart that the group had never seen in him before.",
        isSpoiler: false,
      },
      {
        title: "Carrying Beth",
        season: 5,
        episode: 8,
        episodeTitle: "Coda",
        description:
          "After Beth Greene is shot and killed during a prisoner exchange at Grady Memorial Hospital, Daryl emerges through the doors carrying her lifeless body in his arms. The scene is nearly wordless, Daryl's face a mask of devastated grief, and it stands as one of the most emotionally shattering moments in the entire series.",
        isSpoiler: true,
      },
      {
        title: "Breaking Under Negan",
        season: 7,
        episode: 3,
        episodeTitle: "The Cell",
        description:
          "Held captive in a dark cell by the Saviors, Daryl is tortured with sleep deprivation, fed dog food sandwiches, and forced to listen to 'Easy Street' on an endless loop. When Negan offers Daryl comfort and status in exchange for submission, asking him to say 'I am Negan,' Daryl stares back defiantly and responds with only his own name, refusing to break.",
        isSpoiler: false,
      },
      {
        title: "Glenn's Death",
        season: 7,
        episode: 1,
        episodeTitle: "The Day Will Come When You Won't Be",
        description:
          "After Negan murders Abraham, Daryl leaps up and punches Negan in a burst of rage and grief. Negan punishes this act of defiance by selecting Glenn as a second victim, beating him to death with Lucille while the group watches in horror. Daryl is left knowing that his impulsive action directly caused the death of one of his closest friends.",
        isSpoiler: true,
      },
      {
        title: "Dog and Solitude",
        season: 9,
        episode: 6,
        episodeTitle: "Who Are You Now?",
        description:
          "Six years after Rick's disappearance at the bridge, Daryl is found living alone in the deep woods, long-haired and wild, with only his loyal dog for company. He has spent the intervening years obsessively searching the riverbanks and forests for any trace of Rick, unable to let go. His isolation reflects the depth of his grief and the unbreakable bond he shared with the man he considered his brother.",
        isSpoiler: true,
      },
    ],
    relationships: [
      {
        characterId: "rick-grimes",
        name: "Rick Grimes",
        type: "Ally",
        description:
          "Rick became the brother Daryl never truly had, offering him trust and purpose that his biological family never provided. Their bond was forged through fire and loss, and Rick's disappearance left a void in Daryl's life that drove him into years of solitary grief in the wilderness.",
      },
      {
        characterId: "glenn-rhee",
        name: "Glenn Rhee",
        type: "Ally",
        description:
          "Glenn was one of the first people to accept Daryl as more than a rough outsider, treating him with genuine kindness and respect from early on. Daryl carries the crushing guilt of Glenn's death, knowing that his impulsive punch at Negan was the direct provocation that led Negan to select Glenn as his second victim.",
        revealsDeath: true,
      },
      {
        characterId: "michonne",
        name: "Michonne",
        type: "Ally",
        description:
          "Daryl and Michonne became fellow warriors and co-leaders of Alexandria in the years following Rick's disappearance. Their shared grief over losing Rick bonded them in a way few others could understand, and they relied on each other to hold the community together through the darkest times.",
      },
      {
        characterId: "negan",
        name: "Negan",
        type: "Enemy",
        description:
          "Negan imprisoned and psychologically tortured Daryl in an attempt to break his spirit and recruit him into the Saviors. Despite the torment, Daryl's stubborn defiance never wavered, though his act of punching Negan during the lineup had the catastrophic unintended consequence of provoking Glenn's murder.",
        revealsDeath: false,
      },
    ],
    stats: {
      firstAppearance: "S1 E3 — Tell It to the Frogs",
      lastAppearance: "S11 E24 — Rest in Peace",
      episodeCount: 177,
      killCountEstimate: "~45 living, 300+ walkers",
      weaponOfChoice: "Horton Scout HD 125 Crossbow",
      groupAffiliations: [
        "Atlanta Survivors",
        "The Prison Council",
        "Alexandria Safe-Zone",
        "Militia",
        "The Commonwealth",
      ],
    },
    additionalQuotes: [
      "People out here are always looking for an angle. I ain't gonna be their fool.",
      "Maybe I gotta keep on reminding myself it ain't about me.",
      "I'll be the last man standing.",
    ],
    galleryImages: [
      assetUrl("/images/characters/daryl.jpg"),
      assetUrl("/images/characters/daryl1.jpg"),
      assetUrl("/images/characters/daryl2.jpg"),
      assetUrl("/images/characters/daryl3.jpg"),
      assetUrl("/images/characters/daryl4.jpg"),
    ],
  },

  // ─── NEGAN ────────────────────────────────────────────────────────────────────
  {
    characterId: "negan",
    biography: [
      "Before the world fell apart, Negan was a high school gym teacher with a sharp tongue and a complicated marriage to his wife Lucille. He had been unfaithful to her, and when she was diagnosed with cancer, his guilt became an unbearable weight. When the outbreak hit and Lucille turned while undergoing treatment, Negan was too paralyzed by cowardice to put her down himself, a failure that haunted him for the rest of his life. He named his iconic barbed-wire-wrapped baseball bat after her, transforming his guilt and grief into a weapon of terrifying power.",

      "In the chaos of the early apocalypse, Negan built the Saviors into the largest and most feared organization in the region through a philosophy rooted in theatrical violence and absolute control. His system was brutally pragmatic: communities paid tribute in exchange for protection, and any resistance was met with overwhelming, public punishment designed to break the will of the defiant. The cult-like mantra 'I am Negan' stripped his soldiers of individual identity and bound them to his will. Behind the charisma and leather jacket lay a calculating mind that understood the psychology of fear better than anyone.",

      "Negan's introduction was the series' most devastating moment. Capturing Rick's entire group, he forced them to their knees and selected Abraham Ford as his victim, beating him to death with Lucille in front of his friends. When Daryl lashed out in grief, Negan punished the group further by turning Lucille on Glenn Rhee, killing him as his pregnant wife Maggie watched. The Savior War that followed consumed multiple communities, and when Rick finally defeated Negan, he chose to honor his dead son Carl's wish for peace by slashing Negan's throat but ordering him saved, sentencing him to life in a prison cell rather than granting him death.",

      "Negan spent years behind bars in Alexandria, slowly confronting the monster he had been through long conversations with various community members. His path toward redemption took its most dramatic turn when he escaped during a blizzard and risked his life to rescue Rick's daughter Judith. Later, in a covert operation orchestrated by Carol, Negan infiltrated the Whisperers and killed their leader Alpha by slitting her throat, delivering her reanimated head to Carol. Whether Negan's actions constituted genuine atonement or merely self-serving survival remained one of the series' most compelling and contested questions through its final season."
    ],
    keyMoments: [
      {
        title: "The Lineup",
        season: 7,
        episode: 1,
        episodeTitle: "The Day Will Come When You Won't Be",
        description:
          "In the most harrowing scene in the series' history, Negan selects Abraham Ford through a chilling game of 'eeny, meeny, miny, moe' and bludgeons him to death with Lucille. When Daryl retaliates with a punch, Negan makes good on his promise of consequences and beats Glenn Rhee to death as well, permanently shattering Rick's group and the audience alike.",
        isSpoiler: true,
      },
      {
        title: "I Am Negan",
        season: 7,
        episode: 4,
        episodeTitle: "Service",
        description:
          "Negan arrives at Alexandria's gates with an army of Saviors and systematically strips the community of its weapons, supplies, and dignity. He parades through the streets with Lucille slung over his shoulder, making Rick carry it for him in a deliberate act of psychological humiliation designed to demonstrate absolute dominance.",
        isSpoiler: false,
      },
      {
        title: "Rick Spares Negan",
        season: 8,
        episode: 16,
        episodeTitle: "Wrath",
        description:
          "In the climactic final battle of the Savior War, Rick lures Negan into a one-on-one confrontation under the tree where Carl once sat. Rick slashes Negan's throat with a shard of glass, but then orders Siddiq to save his life, choosing mercy over vengeance to honor Carl's dying wish for a world beyond killing. Maggie screams in anguished protest as the man who murdered her husband is carried away to be healed.",
        isSpoiler: true,
      },
      {
        title: "Killing Alpha",
        season: 10,
        episode: 12,
        episodeTitle: "Walk With Us",
        description:
          "After weeks of seemingly allying with the Whisperers, Negan leads Alpha to a secluded location under the pretense of showing her where her enemies are hiding. He slits her throat and watches her die, then presents her reanimated head to Carol, revealing that his infiltration was a covert operation Carol had orchestrated from the beginning.",
        isSpoiler: true,
      },
      {
        title: "Saving Judith",
        season: 9,
        episode: 16,
        episodeTitle: "The Storm",
        description:
          "During a catastrophic blizzard that forces the communities to brave the open road, young Judith Grimes runs into the whiteout to rescue her dog. Negan, recently escaped from his cell, finds Judith in the freezing storm and shields her with his own body, carrying her to safety at great personal risk. The act marks a visible turning point in his long road toward something resembling redemption.",
        isSpoiler: false,
      },
    ],
    relationships: [
      {
        characterId: "rick-grimes",
        name: "Rick Grimes",
        type: "Rival",
        description:
          "Rick was the one leader Negan could never truly break, a fact that fascinated and infuriated him in equal measure. Their conflict defined the central arc of the series, and Rick's decision to spare Negan's life — choosing Carl's vision of mercy — was an act Negan never fully understood but was forced to live with every day in his cell.",
      },
      {
        characterId: "glenn-rhee",
        name: "Glenn Rhee",
        type: "Enemy",
        description:
          "Glenn was the most consequential of Negan's many victims, a murder that reverberated through every community and every character for years afterward. Negan killed Glenn as punishment for Daryl's defiance, robbing Maggie of her husband and their unborn child of a father, an act that even Negan himself came to recognize as the defining atrocity of his reign.",
        revealsDeath: true,
      },
      {
        characterId: "daryl-dixon",
        name: "Daryl Dixon",
        type: "Enemy",
        description:
          "Negan saw Daryl's fierce spirit as something to be conquered and imprisoned him in a dark cell, subjecting him to sustained psychological torture in an attempt to break his will. Despite every degradation, Daryl never submitted, becoming the embodiment of resistance that Negan's system of fear could not overcome.",
      },
      {
        characterId: "michonne",
        name: "Michonne",
        type: "Rival",
        description:
          "Michonne and Negan engaged in psychologically rich conversations through the bars of his cell, with Michonne probing his capacity for change while refusing to be charmed or manipulated. Their dynamic was one of wary intellectual engagement, with Michonne always maintaining the upper hand through sheer force of will and moral clarity.",
      },
    ],
    stats: {
      firstAppearance: "S6 E16 — Last Day on Earth",
      lastAppearance: "S11 E24 — Rest in Peace",
      episodeCount: 62,
      killCountEstimate: "~25 directly, hundreds by order",
      weaponOfChoice: "Lucille (barbed-wire bat)",
      groupAffiliations: [
        "The Saviors (Leader)",
        "Alexandria (Prisoner)",
        "Whisperer Infiltrator",
      ],
    },
    additionalQuotes: [
      "I wear a leather jacket, I have Lucille, and my nutsack is made of steel.",
      "People are a resource. Money on the table.",
      "You can breathe. You can blink. You can cry. Hell, you're all gonna be doing that.",
    ],
    galleryImages: [
      assetUrl("/images/characters/negan.jpg"),
      assetUrl("/images/characters/negan1.jpg"),
      assetUrl("/images/characters/negan2.jpg"),
      assetUrl("/images/characters/negan3.jpg"),
      assetUrl("/images/characters/negan4.jpg"),
    ],
  },

  // ─── GLENN RHEE ───────────────────────────────────────────────────────────────
  {
    characterId: "glenn-rhee",
    biography: [
      "Before the world ended, Glenn Rhee was a pizza delivery boy in Atlanta, Georgia, a first-generation Korean American whose intimate knowledge of the city's streets, alleys, and sewer systems made him an unlikely but exceptional urban survivor. When the outbreak hit, Glenn's speed, resourcefulness, and courage quickly established him as the Atlanta survivor group's go-to supply runner. He was the one who saved Rick Grimes on his very first day in the new world, radioing the sheriff's deputy trapped in a tank surrounded by walkers with the now-iconic words 'Hey you, dumbass.' That single act of bravery forged a bond that would shape the group's entire future.",

      "Glenn served as the moral compass of the survivor group, a role he maintained with remarkable consistency even as the world grew darker around him. While others hardened into ruthless pragmatists, Glenn refused to let the apocalypse strip away his humanity, his humor, or his compassion for others. He was the voice that argued against killing prisoners, the one who risked his life to draw walkers away so others could escape, and the friend who saw the best in people like Daryl Dixon long before anyone else did. His unwavering goodness was not naivety but a deliberate choice, and it made him irreplaceable.",

      "Glenn's love story with Maggie Greene became the beating heart of the series and a testament to the possibility of hope in hopeless times. Their romance began at a pharmacy on Hershel's farm, a passionate and impulsive encounter that deepened into the show's most enduring partnership. They married at the prison in a quiet ceremony that represented everything worth fighting for, and when Maggie became pregnant, the news filled their world with a new and urgent sense of purpose. Glenn fought harder than ever because he now had everything to live for.",

      "Glenn's death at the hands of Negan in the Season 7 premiere remains the most devastating moment in the series' history. After Negan had already killed Abraham, Daryl's defiant punch provoked Negan to turn Lucille on Glenn as punishment. With his skull caved in and his eye bulging, Glenn used his last breath to look at his pregnant wife and whisper 'Maggie, I'll find you,' words of love that transcended the horror of the moment. His death became the catalyst for the Savior War, Maggie's transformation into a leader, and a wound in the group's soul that never fully healed."
    ],
    keyMoments: [
      {
        title: "Saving Rick",
        season: 1,
        episode: 2,
        episodeTitle: "Guts",
        description:
          "Glenn's voice crackles over the radio to a man trapped in a tank in downtown Atlanta: 'Hey you, dumbass. Yeah, you in the tank. Cozy in there?' With nothing but quick wits and knowledge of the city's back routes, Glenn guides Rick Grimes to safety through walker-infested streets. It is the act that introduces the series' most beloved character and establishes Glenn as the group's indispensable lifeline.",
        isSpoiler: false,
      },
      {
        title: "Pharmacy with Maggie",
        season: 2,
        episode: 4,
        episodeTitle: "Cherokee Rose",
        description:
          "Sent on a supply run to a pharmacy near Hershel's farm, Glenn is unexpectedly joined by Maggie Greene, and the two share a passionate, impulsive encounter that catches both of them off guard. What begins as a moment of reckless release becomes the foundation of the series' most important love story, a relationship that will come to represent everything worth preserving in the apocalypse.",
        isSpoiler: false,
      },
      {
        title: "The Dumpster",
        season: 6,
        episode: 3,
        episodeTitle: "Thank You",
        description:
          "Glenn appears to be devoured by walkers after falling off a dumpster alongside Nicholas, who shoots himself and pulls Glenn down into the herd. For weeks, the audience believed Glenn was dead, sparking intense debate and grief across the fanbase. It was later revealed that Glenn had crawled beneath the dumpster and survived, but the near-death experience foreshadowed the real, permanent loss that awaited him.",
        isSpoiler: true,
      },
      {
        title: "I'll Find You",
        season: 7,
        episode: 1,
        episodeTitle: "The Day Will Come When You Won't Be",
        description:
          "Negan brings Lucille down on Glenn's skull with catastrophic force, and Glenn — impossibly, agonizingly — fights to stay conscious long enough to turn toward Maggie. With his eye dislodged and blood streaming down his face, he forces out his final words: 'Maggie, I'll find you.' It is a moment of transcendent love in the midst of unspeakable violence, and it haunts every character and viewer who witnessed it.",
        isSpoiler: true,
      },
    ],
    relationships: [
      {
        characterId: "rick-grimes",
        name: "Rick Grimes",
        type: "Ally",
        description:
          "Glenn saved Rick's life on his very first day in the apocalypse, pulling a stranger out of a death trap with nothing but a radio and courage. That foundational act of selflessness built a deep bond of mutual trust and respect that lasted throughout their time together, with Rick relying on Glenn's moral clarity as much as his bravery.",
      },
      {
        characterId: "daryl-dixon",
        name: "Daryl Dixon",
        type: "Ally",
        description:
          "Glenn was one of the first people to see past Daryl's rough exterior and treat him as a valued member of the group rather than a dangerous outsider. Their friendship was built on mutual respect forged in countless dangerous runs and battles, and Glenn's death left Daryl carrying a burden of guilt that defined him for years.",
        revealsDeath: true,
      },
      {
        characterId: "negan",
        name: "Negan",
        type: "Enemy",
        description:
          "Negan murdered Glenn with Lucille as punishment for Daryl's defiance during the lineup, making Glenn the victim of a power dynamic he had no part in provoking. Glenn's death was Negan's most consequential act of violence, one that united the communities against the Saviors and ultimately led to Negan's defeat and imprisonment.",
        revealsDeath: true,
      },
      {
        characterId: "michonne",
        name: "Michonne",
        type: "Ally",
        description:
          "Michonne trusted Glenn's moral judgment implicitly, recognizing in him a rare integrity that the apocalypse could not corrupt. Glenn's clarity about right and wrong served as a grounding influence for the group's more hardened warriors, including Michonne, who respected his refusal to compromise his principles.",
      },
    ],
    stats: {
      firstAppearance: "S1 E2 — Guts",
      lastAppearance: "S7 E1 — The Day Will Come When You Won't Be",
      episodeCount: 80,
      killCountEstimate: "~15 living, 100+ walkers",
      weaponOfChoice: "Beretta 92FS Pistol",
      groupAffiliations: [
        "Atlanta Survivors",
        "The Prison Council",
        "Alexandria Safe-Zone",
      ],
    },
    additionalQuotes: [
      "Hey you, dumbass. Yeah, you in the tank. Cozy in there?",
      "We don't kill the living.",
      "People you love, they made you who you are.",
    ],
galleryImages: [
      assetUrl("/images/characters/glenn.jpg"),
      assetUrl("/images/characters/glenn1.jpg"),
      assetUrl("/images/characters/glenn2.jpg"),
      assetUrl("/images/characters/glenn3.jpg"),
      assetUrl("/images/characters/glenn4.jpg"),
    ],
  },

  // ─── MICHONNE ─────────────────────────────────────────────────────────────────
  {
    characterId: "michonne",
    biography: [
      "Before the apocalypse, Michonne was an attorney and art lover living a comfortable life with her boyfriend Mike and their young son Andre. When the world collapsed, Mike and his friend Terry were supposed to protect Andre while Michonne went on a supply run, but they got high instead, and Andre was killed by walkers. Consumed by grief and rage, Michonne amputated the arms and lower jaws of Mike and Terry's reanimated corpses, chaining them as walker camouflage that masked her scent from the dead. She wandered alone for months, a hooded figure of silent fury and devastating efficiency, her katana becoming an extension of her will to survive.",

      "Michonne's trajectory changed when she found the wounded Andrea and nursed her back to health, forming a bond that led them both to the walled town of Woodbury. While Andrea was seduced by the Governor's charisma and promises of safety, Michonne saw through his facade immediately, recognizing the predator behind the politician's smile. After escaping Woodbury and eventually finding Rick's group at the prison, Michonne proved herself as one of the most formidable warriors the group had ever seen. Her katana work was legendary, and her fierce independence masked a deep capacity for loyalty and love that the prison group slowly drew out of her.",

      "At the prison and later at Alexandria, Michonne found the family she had lost. She became a mother figure to Carl Grimes, bonding with him over comic books and quiet moments of normalcy that both of them desperately needed. Her romance with Rick, which crystallized in a tender moment in Season 6 when they held hands on a couch after a long day, became the series' most powerful love story. Michonne served as Alexandria's constable, enforcing order with the same quiet authority she brought to everything, and her skill with the katana made her one of the most feared fighters in any community.",

      "After Rick's apparent death at the bridge, Michonne stepped into the role of Alexandria's leader, guiding the community through years of relative peace while carrying the heavy burden of grief. She raised Rick's daughter Judith and her own son RJ while maintaining the fragile alliances between the communities. Everything changed when Michonne discovered evidence on a distant naval vessel that Rick had survived the bridge explosion. Armed with this knowledge and driven by an unstoppable need to find the man she loved, Michonne departed Alexandria alone, following a trail of clues that would eventually lead her back to Rick."
    ],
    keyMoments: [
      {
        title: "The Arrival",
        season: 3,
        episode: 1,
        episodeTitle: "Seed",
        description:
          "A hooded figure appears with a katana in one hand and two chained, jawless, armless walkers shambling behind her, delivering supplies to a sick Andrea. Michonne's iconic introduction instantly established her as one of the most striking and mysterious characters in the series, a warrior of terrifying capability wrapped in enigma.",
        isSpoiler: false,
      },
      {
        title: "Killing the Governor",
        season: 4,
        episode: 8,
        episodeTitle: "Too Far Gone",
        description:
          "As the Governor launches his devastating assault on the prison, executing Hershel Greene with Michonne's own katana in front of his daughters, Michonne fights through the chaos to confront the tyrant directly. She drives her katana through the Governor's chest, delivering the mortal wound to the man who had terrorized two communities. It is an act of justice for Hershel, for Andrea, and for everyone the Governor destroyed.",
        isSpoiler: true,
      },
      {
        title: "First Kiss with Rick",
        season: 6,
        episode: 10,
        episodeTitle: "The Next World",
        description:
          "After a lighthearted day of supply runs and unexpected encounters, Rick and Michonne find themselves sitting together on a couch in the quiet of their Alexandria home. Their hands touch, their eyes meet, and they share a kiss that had been building for three seasons of mutual respect, shared grief, and unspoken love. The moment was simultaneously surprising and inevitable, a natural evolution that felt earned by everything they had survived together.",
        isSpoiler: false,
      },
      {
        title: "Leaving to Find Rick",
        season: 10,
        episode: 13,
        episodeTitle: "What We Become",
        description:
          "While exploring a wrecked naval vessel on Bloodsworth Island, Michonne discovers Rick's boots and a phone etched with drawings of her and Judith, irrefutable proof that Rick survived the bridge explosion. Faced with the choice between returning to her community or following the trail of the man she loves, Michonne chooses the uncertain path, departing alone into the unknown with nothing but her katana and an unshakable determination to bring Rick home.",
        isSpoiler: true,
      },
    ],
    relationships: [
      {
        characterId: "rick-grimes",
        name: "Rick Grimes",
        type: "Romantic",
        description:
          "Rick and Michonne's relationship was a partnership of equals, built on mutual respect, shared trauma, and a love that grew organically from years of fighting side by side. Their bond was the emotional anchor of the series' later seasons, and Michonne's discovery that Rick survived drove her to leave everything behind to find him.",
      },
      {
        characterId: "daryl-dixon",
        name: "Daryl Dixon",
        type: "Ally",
        description:
          "Michonne and Daryl became the co-leaders Alexandria needed in Rick's absence, their shared grief and warrior instincts making them an effective partnership. They trusted each other implicitly in battle and in governance, united by their loyalty to Rick's vision and their determination to protect the community he built.",
      },
      {
        characterId: "negan",
        name: "Negan",
        type: "Rival",
        description:
          "Michonne engaged Negan in probing conversations through the bars of his Alexandria cell, testing his claims of reformation with the sharp intellect of a former attorney. She refused to be charmed, manipulated, or impressed, maintaining a psychological upper hand that kept Negan honest in a way few others could manage.",
      },
      {
        characterId: "glenn-rhee",
        name: "Glenn Rhee",
        type: "Ally",
        description:
          "Michonne respected Glenn's unwavering moral clarity, recognizing in him a goodness that the apocalypse could not extinguish. His brutal murder at Negan's hands deepened Michonne's resolve to fight the Saviors and protect the community Glenn had given so much to defend.",
        revealsDeath: true,
      },
    ],
    stats: {
      firstAppearance: "S3 E1 — Seed",
      lastAppearance: "S10 E13 — What We Become",
      episodeCount: 98,
      killCountEstimate: "~30 living, 250+ walkers",
      weaponOfChoice: "Katana",
      groupAffiliations: [
        "Andrea's Companion",
        "The Prison Council",
        "Alexandria Safe-Zone (Constable/Leader)",
        "Militia",
      ],
    },
    additionalQuotes: [
      "The mat said 'Welcome.'",
      "Anger makes you stupid. Stupid gets you killed.",
      "We don't get to be upset. We have to keep going.",
    ],
    galleryImages: [
      assetUrl("/images/characters/michonne.jpg"),
      assetUrl("/images/characters/michonne1.jpg"),
      assetUrl("/images/characters/michonne2.jpg"),
      assetUrl("/images/characters/michonne3.jpg"),
      assetUrl("/images/characters/michonne4.jpg"),
    ],
  },

  // ─── CAROL PELETIER ────────────────────────────────────────────────────────────
  {
    characterId: "carol-peletier",
    biography: [
      "Before the apocalypse, Carol Peletier lived under the suffocating control of her abusive husband Ed, enduring years of physical and emotional torment while desperately trying to shield their daughter Sophia. When the world fell apart, Carol initially appeared as the meekest member of the Atlanta survivor group — a trembling, soft-spoken woman who flinched at loud voices and deferred to everyone around her. Ed's death at the hands of walkers freed her from one prison, but it was the devastating loss of Sophia, who had wandered into the woods and was discovered as a walker in Hershel's barn, that shattered the last remnants of the woman Carol had been forced to become.",

      "The death of Sophia ignited a slow, relentless transformation. At the prison, Carol began teaching the children how to use knives in secret, recognizing that survival demanded hard truths the others weren't ready to face. When a deadly flu outbreak threatened the group, Carol made the agonizing decision to kill Karen and David to prevent the infection from spreading — an act that got her banished by Rick. Alone in the wilderness, she survived on her wits before returning to single-handedly rescue the group from the cannibals at Terminus, storming the compound with fire and explosives in one of the series' most iconic rescue sequences.",

      "At Alexandria, Carol donned her most brilliant disguise yet: the harmless homemaker. She wore cardigans, baked cookies, and smiled sweetly at the residents while secretly stockpiling weapons and assessing threats. Her chilling confrontation with young Sam Anderson, threatening him into silence with whispered horror, revealed the steel beneath the suburban mask. But Carol's ruthless pragmatism came at a cost — the weight of every life she had taken began to crack her resolve, leading her to flee Alexandria in a crisis of conscience, unable to reconcile the killer she had become with the person she wanted to be.",

      "Carol's later years were defined by a struggle between her warrior nature and her desperate need for peace. The death of Henry, her adopted son, at the hands of Alpha and the Whisperers, plunged her into a reckless obsession with revenge that endangered those around her. Her complicated bond with Daryl Dixon, the deepest platonic relationship in the series, was tested repeatedly by her self-destructive choices. Ultimately, Carol found her way back — not by denying what she had become, but by accepting that strength and vulnerability could coexist. She and Daryl parted ways as she remained to help rebuild the communities, proving that the most dramatic transformation in the apocalypse belonged to the woman everyone had once overlooked."
    ],
    keyMoments: [
      {
        title: "Sophia's Barn",
        season: 2,
        episode: 7,
        episodeTitle: "Pretty Much Dead Already",
        description: "After weeks of desperate searching, Sophia emerged from Hershel's barn as a walker. Rick stepped forward to put her down as Carol collapsed in grief. The loss of her daughter became the catalyst for Carol's entire transformation.",
        isSpoiler: true,
      },
      {
        title: "The Terminus Rescue",
        season: 5,
        episode: 1,
        episodeTitle: "No Sanctuary",
        description: "Disguised among a walker herd, Carol launched a one-woman assault on Terminus using a propane tank explosion and a hail of gunfire. She single-handedly liberated Rick and the group from the cannibals, cementing her status as one of the deadliest survivors alive.",
        isSpoiler: false,
      },
      {
        title: "Look at the Flowers",
        season: 4,
        episode: 14,
        episodeTitle: "The Grove",
        description: "When disturbed child Lizzie killed her own sister Mika to prove walkers were still people, Carol was forced to make an impossible choice. She led Lizzie into the field and told her to look at the flowers before executing her — the most emotionally devastating scene Carol ever endured.",
        isSpoiler: true,
      },
      {
        title: "The Cookie Monster of Alexandria",
        season: 5,
        episode: 13,
        episodeTitle: "Forget",
        description: "Carol perfected her disguise as a harmless homemaker, baking cookies and wearing cardigans while secretly stealing weapons from the armory. Her terrifying whispered threat to young Sam Anderson revealed the predator hiding behind the suburban smile.",
        isSpoiler: false,
      },
      {
        title: "Alpha's Head on a Pike",
        season: 10,
        episode: 12,
        episodeTitle: "Walk With Us",
        description: "After a season-long obsession with destroying Alpha, Carol's plan finally came together when Negan delivered Alpha's severed head. The kill brought her closure but also forced her to confront the collateral damage her single-minded vengeance had caused.",
        isSpoiler: true,
      },
    ],
    relationships: [
      {
        characterId: "daryl-dixon",
        name: "Daryl Dixon",
        type: "Ally",
        description: "The deepest bond in the series. Carol and Daryl shared a connection forged in mutual understanding of abuse and survival. He was the first person to truly see her, and their friendship anchored both characters through every tragedy.",
      },
      {
        characterId: "rick-grimes",
        name: "Rick Grimes",
        type: "Ally",
        description: "Rick banished Carol for killing Karen and David, fracturing their relationship. They eventually reconciled, with Rick recognizing that Carol's ruthlessness, though difficult, repeatedly saved the group when no one else could.",
      },
      {
        characterId: "negan",
        name: "Negan",
        type: "Rival",
        description: "Carol initially despised Negan as the man who destroyed their world. His role in killing Alpha complicated her feelings — he delivered the vengeance she craved, creating an uneasy, grudging respect between two people who understood the cost of doing terrible things.",
        revealsDeath: true,
      },
      {
        characterId: "carl-grimes",
        name: "Carl Grimes",
        type: "Family",
        description: "Carol cared for Carl as a surrogate mother figure, especially after Lori's death. She taught the children survival skills and watched Carl grow from the scared boy at the quarry into a brave young man.",
        revealsDeath: true,
      },
    ],
    stats: {
      firstAppearance: "S1 E3 — Tell It to the Frogs",
      lastAppearance: "S11 E24 — Rest in Peace",
      episodeCount: 155,
      killCountEstimate: "50+",
      weaponOfChoice: "Suppressed Pistol / Knife",
      groupAffiliations: [
        "Atlanta Camp",
        "The Prison",
        "Alexandria Safe-Zone",
        "The Kingdom (temporary)",
        "Coalition",
      ],
    },
    additionalQuotes: [
      "You can be a farmer, Rick. You can't just be a farmer.",
      "I don't think the prison is a safe place anymore.",
      "You don't have to like what I did. You just have to accept it.",
    ],
    galleryImages: [
      assetUrl("/images/characters/carol.jpg"),
      assetUrl("/images/characters/carol1.jpg"),
      assetUrl("/images/characters/carol2.jpg"),
      assetUrl("/images/characters/carol3.jpg"),
      assetUrl("/images/characters/carol4.jpg"),
    ],
  },

  // ─── MAGGIE GREENE ─────────────────────────────────────────────────────────────
  {
    characterId: "maggie-greene",
    biography: [
      "Maggie Greene grew up on her father Hershel's idyllic farm in rural Georgia, sheltered from the worst of the apocalypse by the property's fences and her father's stubborn belief that the walkers were simply sick people who could be cured. When Rick's group arrived at the farm seeking refuge after Carl was accidentally shot, Maggie's carefully preserved world began to crack. Her first encounter with Glenn Rhee during a supply run to a nearby pharmacy sparked an unlikely romance — the farmer's daughter and the pizza delivery boy — that would become the emotional heart of the entire series.",

      "The fall of the farm forced Maggie into the brutal reality of the new world. At the prison, she and Glenn's love deepened even as the horrors escalated. The Governor's assault on the prison separated them, and Maggie's desperate journey to reunite with Glenn led her through Terminus and beyond. When they finally found each other again, their bond had been tempered by fire. Glenn proposed with a watch from her father, and their quiet marriage became a symbol of hope that civilization could endure even in the darkest times.",

      "Everything shattered on the night Negan lined them up on their knees. Maggie, pregnant and gravely ill, was forced to watch as Negan bludgeoned Glenn to death with Lucille, his last words a broken declaration of love directed at her. The trauma of that night forged Maggie into something harder and more determined than ever before. She channeled her grief into leadership, taking command of the Hilltop Colony and transforming it from a cowering settlement under the Saviors' thumb into a thriving, self-sufficient community that became the agricultural backbone of the allied communities.",

      "Maggie's refusal to forgive Negan became one of the series' most compelling ongoing conflicts. While Rick chose mercy and spared Negan's life, Maggie saw it as a betrayal of Glenn's memory. She left the communities for years, returning only when new threats demanded it. Her eventual, fragile acknowledgment that Negan had changed — without ever truly forgiving him — represented one of the most honest portrayals of grief and justice in the series. Maggie proved that leadership born from loss could build something lasting, carrying Glenn's legacy forward into a future he never got to see."
    ],
    keyMoments: [
      {
        title: "The Pharmacy Run",
        season: 2,
        episode: 4,
        episodeTitle: "Cherokee Rose",
        description: "Maggie and Glenn's first supply run together to a nearby pharmacy became the unexpected beginning of the series' greatest love story. Their chemistry was immediate, and the moment marked Maggie's first step out of her sheltered farm life into the wider world.",
        isSpoiler: false,
      },
      {
        title: "The Fall of the Prison",
        season: 4,
        episode: 8,
        episodeTitle: "Too Far Gone",
        description: "The Governor's tank assault destroyed the prison and scattered the group. Maggie was separated from Glenn and spent desperate days searching for him, leaving signs and messages along the railroad tracks that became iconic symbols of hope in the apocalypse.",
        isSpoiler: true,
      },
      {
        title: "Glenn's Murder",
        season: 7,
        episode: 1,
        episodeTitle: "The Day Will Come When You Won't Be",
        description: "Kneeling in the dirt, gravely ill and pregnant, Maggie watched helplessly as Negan beat Glenn to death. His final words — 'Maggie, I'll find you' — and the sight of his destroyed face became the defining trauma of her life and the catalyst for everything that followed.",
        isSpoiler: true,
      },
      {
        title: "Leading the Hilltop",
        season: 8,
        episode: 6,
        episodeTitle: "The King, the Widow, and Rick",
        description: "After overthrowing the cowardly Gregory, Maggie seized control of the Hilltop and transformed it into a formidable community. She made brutal but necessary decisions, including imprisoning captured Saviors, proving she had the steel to lead in wartime.",
        isSpoiler: false,
      },
      {
        title: "Confronting Negan",
        season: 11,
        episode: 4,
        episodeTitle: "Rendition",
        description: "Forced to work alongside Glenn's killer on a mission to save their people, Maggie confronted the impossible reality of coexistence with Negan. Their tense alliance tested every limit of her endurance and redefined what survival could demand.",
        isSpoiler: false,
      },
    ],
    relationships: [
      {
        characterId: "glenn-rhee",
        name: "Glenn Rhee",
        type: "Romantic",
        description: "The love of her life. Glenn and Maggie's relationship was the emotional core of the series — a beacon of hope that proved love could survive even the apocalypse. His death shattered her but also forged her into the leader she became.",
        revealsDeath: true,
      },
      {
        characterId: "hershel-greene",
        name: "Hershel Greene",
        type: "Family",
        description: "Maggie's father was her moral compass and the source of her faith in humanity. His murder by the Governor devastated her, but his teachings about compassion and perseverance guided every decision she made as a leader.",
        revealsDeath: true,
      },
      {
        characterId: "negan",
        name: "Negan",
        type: "Enemy",
        description: "The man who murdered Glenn. Maggie's hatred of Negan was absolute and unwavering for years. Their eventual uneasy coexistence was never forgiveness — it was a painful, pragmatic acceptance that the world needed them both alive.",
      },
      {
        characterId: "daryl-dixon",
        name: "Daryl Dixon",
        type: "Ally",
        description: "Daryl carried immense guilt for Glenn's death, believing his defiant punch at Negan provoked the second killing. Maggie's forgiveness of Daryl was one of the series' most tender moments, and their bond strengthened through shared grief.",
        revealsDeath: true,
      },
    ],
    stats: {
      firstAppearance: "S2 E2 — Bloodletting",
      lastAppearance: "S11 E24 — Rest in Peace",
      episodeCount: 117,
      killCountEstimate: "30+",
      weaponOfChoice: "Glock 17 Pistol / Machete",
      groupAffiliations: [
        "Greene Family Farm",
        "The Prison",
        "Hilltop Colony (Leader)",
        "Coalition",
      ],
    },
    additionalQuotes: [
      "He's got your dad's name. He's got his courage too.",
      "I came here because my family is gone. But I found a new one.",
      "We've already lost enough. We can't lose any more.",
    ],
    galleryImages: [
      assetUrl("/images/characters/maggie.jpg"),
      assetUrl("/images/characters/maggie1.jpg"),
      assetUrl("/images/characters/maggie2.jpg"),
      assetUrl("/images/characters/maggie3.jpg"),
      assetUrl("/images/characters/maggie4.jpg"),
    ],
  },

  // ─── THE GOVERNOR ──────────────────────────────────────────────────────────────
  {
    characterId: "the-governor",
    biography: [
      "Before the apocalypse, Philip Blake was an unremarkable man — a husband and father living a quiet life in a small Georgia town. The collapse of civilization and the death of his wife unleashed something monstrous within him. Unable to accept the loss of his daughter Penny, who had turned into a walker, Philip kept her chained and hidden, feeding his delusion that she could somehow be restored. He reinvented himself as 'The Governor,' building the walled community of Woodbury into a seemingly civilized haven while ruling it through manipulation, intimidation, and carefully curated spectacle.",

      "Woodbury's veneer of normalcy concealed horrific secrets. The Governor maintained gladiator-style fights between residents and captive walkers for entertainment, kept a private collection of severed walker heads in aquariums for meditation, and eliminated anyone who questioned his authority. When Michonne and Andrea stumbled into Woodbury, the Governor's obsession with control met its match. Michonne saw through his facade immediately, and her killing of his undead daughter Penny pushed him into a vengeful spiral that consumed everything he had built.",

      "The Governor's war against Rick's group at the prison defined the series' third and fourth seasons. His first assault ended in failure, and in a rage he massacred his own fleeing soldiers. Abandoned and alone, Philip wandered the wasteland in a fugue state before finding a new family — Lilly, Tara, and young Meghan — who briefly reignited his humanity. For a moment it seemed the Governor might find redemption, might choose to be the man he once was. But the pattern was too deeply set; he murdered the leader of a rival camp, seized control of their people, and marched them toward the prison for a second, final assault.",

      "The second battle of the prison was the Governor's masterpiece of destruction. He captured Hershel and Michonne as hostages and demanded Rick surrender the prison. When Rick attempted to negotiate peace, the Governor responded by decapitating Hershel with Michonne's own katana in front of his horrified daughters. The ensuing battle destroyed the prison utterly. In the chaos, the Governor was stabbed by Michonne and finished off by Lilly after Meghan was killed by a walker. He died as he lived — consumed by a need for control that destroyed everyone around him, the dark mirror of what Rick could have become."
    ],
    keyMoments: [
      {
        title: "The Aquarium Room",
        season: 3,
        episode: 3,
        episodeTitle: "Walk With Me",
        description: "Andrea and Michonne discovered Woodbury's charming leader had a private room filled with aquariums containing severed walker heads. The Governor sat in his chair, staring at them in meditative silence — a window into the psyche of a man who had long since crossed the line into madness.",
        isSpoiler: false,
      },
      {
        title: "Penny's Death",
        season: 3,
        episode: 8,
        episodeTitle: "Made to Suffer",
        description: "When Michonne discovered the Governor's undead daughter Penny chained in a secret room, she drove her katana through the girl's head. The Governor's anguished screams marked the moment all pretense of civility died, igniting a personal war that would consume both communities.",
        isSpoiler: true,
      },
      {
        title: "Massacre of His Own People",
        season: 3,
        episode: 16,
        episodeTitle: "Welcome to the Tombs",
        description: "After his first failed assault on the prison, the Governor's Woodbury soldiers refused to fight again. In a psychotic rage, he opened fire on his own people, mowing down dozens of unarmed men and women on the roadside. Only his most loyal lieutenants survived.",
        isSpoiler: true,
      },
      {
        title: "Hershel's Execution",
        season: 4,
        episode: 8,
        episodeTitle: "Too Far Gone",
        description: "Standing before the prison gates with Hershel on his knees, the Governor listened to Rick's desperate plea for coexistence — then swung Michonne's katana into Hershel's neck. The act destroyed any chance of peace and sealed the Governor's fate as the series' most irredeemable villain.",
        isSpoiler: true,
      },
    ],
    relationships: [
      {
        characterId: "rick-grimes",
        name: "Rick Grimes",
        type: "Enemy",
        description: "Rick was the Governor's opposite and obsession. Both were leaders shaped by loss, but where Rick fought to preserve his humanity, the Governor surrendered his entirely. Their conflict defined the series' middle act — civilization versus tyranny.",
      },
      {
        characterId: "michonne",
        name: "Michonne",
        type: "Enemy",
        description: "Michonne killed his undead daughter, took his eye, and saw through every mask he wore. The Governor's hatred of Michonne was visceral and personal — she represented everything he couldn't control and everything that exposed his true nature.",
      },
      {
        characterId: "hershel-greene",
        name: "Hershel Greene",
        type: "Enemy",
        description: "Hershel tried to reason with the Governor, appealing to whatever humanity remained. The Governor's decision to execute Hershel despite this appeal was the definitive proof that Philip Blake was truly gone, replaced entirely by the monster.",
        revealsDeath: true,
      },
      {
        characterId: "daryl-dixon",
        name: "Daryl Dixon",
        type: "Enemy",
        description: "The Governor captured Daryl and forced him into a gladiator fight against his own brother Merle. He recognized Daryl as one of Rick's most dangerous allies and used Merle's loyalty as a weapon against the prison group.",
      },
    ],
    stats: {
      firstAppearance: "S3 E3 — Walk With Me",
      lastAppearance: "S4 E8 — Too Far Gone",
      episodeCount: 19,
      killCountEstimate: "60+",
      weaponOfChoice: "Beretta 92FS / Bare Hands",
      groupAffiliations: [
        "Woodbury (Leader)",
        "River Camp (Leader)",
      ],
    },
    additionalQuotes: [
      "You know, I thought you were a cop, not a lawyer.",
      "I'm not gonna let them take what we built here.",
      "Mere words cannot express how truly sorry I am for what I've done.",
    ],
    galleryImages: [
      assetUrl("/images/characters/governor.jpg"),
      assetUrl("/images/characters/governor1.jpg"),
      assetUrl("/images/characters/governor2.jpg"),
      assetUrl("/images/characters/governor3.jpg"),
      assetUrl("/images/characters/governor4.jpg"),
    ],
  },

  // ─── HERSHEL GREENE ────────────────────────────────────────────────────────────
  {
    characterId: "hershel-greene",
    biography: [
      "Hershel Greene was a veterinarian and farmer who had conquered alcoholism through faith long before the dead began to walk. When the apocalypse arrived, he retreated to his family farm with his daughters Maggie and Beth, his wife Annette, and several neighbors, barricading themselves behind fences and prayers. Hershel's deep religious conviction led him to a dangerous belief — that the walkers were simply sick people who could be cured. He collected them in his barn, feeding them chickens and holding onto hope that medicine would find an answer, refusing to accept the terrible truth that his wife and neighbors were already gone.",

      "When Rick's group arrived seeking shelter after Carl was shot, Hershel reluctantly allowed them to stay on the condition they leave once Carl healed. The uneasy coexistence shattered when Shane broke open the barn, forcing the group to gun down every walker inside — including Sophia, Carol's missing daughter, and Annette, Hershel's own wife. The revelation destroyed Hershel's faith overnight. He fell off the wagon and was found by Rick in a bar in town, drinking himself into oblivion. Rick's refusal to abandon him, physically dragging him home through a firefight, began a bond that would define both men.",

      "At the prison, Hershel became the moral center of the entire community. When a walker bite took his leg, Hershel survived the amputation and continued to serve as the group's doctor, counselor, and conscience. During a devastating flu outbreak that killed many inmates, Hershel walked among the sick and dying without a mask, offering comfort and medicine, refusing to let them die alone. His quiet heroism in that crisis — catching falling bodies, putting down the reanimated, never stopping — was among the most selfless acts in the series. He became the father figure not just to Maggie and Beth, but to everyone who had lost their own.",

      "Hershel's death was the series' most devastating loss. Captured by the Governor as a hostage before the prison gates, Hershel knelt in the dirt as Rick made an impassioned plea for peace and coexistence. For a brief moment, Hershel smiled — not because he believed they would survive, but because Rick had finally become the leader Hershel always knew he could be. Then the Governor swung the katana. Hershel died as he lived: with dignity, with faith, and with the quiet knowledge that the seeds he had planted in others would outlive him. His legacy echoed through every good decision his daughters and Rick's group made for the rest of the series."
    ],
    keyMoments: [
      {
        title: "The Barn Massacre",
        season: 2,
        episode: 7,
        episodeTitle: "Pretty Much Dead Already",
        description: "Shane smashed the barn doors open, and the group gunned down every walker inside — including Hershel's wife and neighbors he had been keeping alive in hope. The devastation shattered Hershel's worldview and forced him to finally accept the truth of the new world.",
        isSpoiler: true,
      },
      {
        title: "The Bar and the Promise",
        season: 2,
        episode: 8,
        episodeTitle: "Nebraska",
        description: "Broken by the barn revelation, Hershel returned to the bottle and was found by Rick drinking alone in a town bar. Rick refused to leave him, and the two fought their way back to the farm together. This moment forged the deep trust between them that would last until Hershel's final breath.",
        isSpoiler: false,
      },
      {
        title: "The Amputation",
        season: 3,
        episode: 1,
        episodeTitle: "Seed",
        description: "Bitten by a walker in the prison's dark corridors, Hershel's life was saved by Rick's desperate decision to amputate his leg with a hatchet. Hershel's survival — and his refusal to let the loss slow him down — became a symbol of resilience for the entire group.",
        isSpoiler: false,
      },
      {
        title: "Walking Among the Dying",
        season: 4,
        episode: 5,
        episodeTitle: "Internment",
        description: "During the prison flu outbreak, Hershel tirelessly moved among the infected, administering medicine and offering comfort without a mask. When patients reanimated around him, he fought them off while protecting the living. It was the purest display of selfless courage in the series.",
        isSpoiler: false,
      },
      {
        title: "The Smile Before the Sword",
        season: 4,
        episode: 8,
        episodeTitle: "Too Far Gone",
        description: "Kneeling before the Governor's blade, Hershel listened to Rick's speech about finding peace and coexistence. He smiled, knowing Rick had finally become the man the world needed. Then the Governor swung the katana, and the prison's moral center was gone forever.",
        isSpoiler: true,
      },
    ],
    relationships: [
      {
        characterId: "rick-grimes",
        name: "Rick Grimes",
        type: "Mentor",
        description: "Hershel became Rick's conscience and spiritual guide. He tempered Rick's darker impulses with wisdom and compassion, and Rick's growth as a leader was directly shaped by Hershel's counsel. Their bond was the foundation the prison community was built on.",
      },
      {
        characterId: "maggie-greene",
        name: "Maggie Greene",
        type: "Family",
        description: "His eldest daughter and the inheritor of his strength. Hershel raised Maggie to be compassionate and resilient, and every decision she made as the leader of Hilltop carried echoes of her father's teachings about faith and perseverance.",
      },
      {
        characterId: "the-governor",
        name: "The Governor",
        type: "Enemy",
        description: "The Governor captured Hershel and used him as a bargaining chip. Even facing death, Hershel attempted to reach the humanity buried inside Philip Blake. The Governor's decision to kill him anyway was the final proof that some men are beyond saving.",
        revealsDeath: true,
      },
      {
        characterId: "glenn-rhee",
        name: "Glenn Rhee",
        type: "Family",
        description: "Hershel initially opposed Glenn's relationship with Maggie, but grew to love him as a son. He gave Glenn his blessing and his pocket watch — a gesture that symbolized the passing of trust from one generation of protectors to the next.",
      },
    ],
    stats: {
      firstAppearance: "S2 E2 — Bloodletting",
      lastAppearance: "S4 E8 — Too Far Gone",
      episodeCount: 38,
      killCountEstimate: "5+",
      weaponOfChoice: "Shotgun / Veterinary Knowledge",
      groupAffiliations: [
        "Greene Family Farm (Owner)",
        "The Prison (Council Member)",
      ],
    },
    additionalQuotes: [
      "You step outside, you risk your life. You take a drink of water, you risk your life.",
      "I can still be who I was. A farmer. A father.",
      "A sad soul can kill quicker than a germ.",
    ],
    galleryImages: [
      assetUrl("/images/characters/hershel.jpg"),
      assetUrl("/images/characters/hershel1.jpg"),
      assetUrl("/images/characters/hershel2.jpg"),
      assetUrl("/images/characters/hershel3.jpg"),
      assetUrl("/images/characters/hershel4.jpg"),
    ],
  },

  // ─── CARL GRIMES ───────────────────────────────────────────────────────────────
  {
    characterId: "carl-grimes",
    biography: [
      "Carl Grimes was just a boy when the world ended. He was barely old enough to understand death when his father Rick was shot in the line of duty and fell into a coma, leaving Carl and his mother Lori in the care of family friend Shane Walsh. When Rick miraculously returned from the dead — figuratively, in a world where the literal dead walked — Carl's childhood was already over. The quarry camp outside Atlanta, the desperate flight from walkers, the constant terror — Carl absorbed it all with the quiet resilience of a child who had no choice but to adapt or die.",

      "The farm and the prison were the closest things to childhood Carl ever experienced, and both were ripped away violently. He watched Shane's descent into madness and was there when Rick killed his father's former best friend. At the prison, Carl began to harden — he shot a surrendering Woodbury teenager in cold blood, an act that horrified Rick and signaled how deeply the violence had embedded itself in his son. The death of his mother Lori during childbirth, and Carl's decision to be the one to prevent her reanimation, stole whatever innocence remained. He carried that burden silently, aging decades in months.",

      "Alexandria offered Carl a brief window into what normal adolescence might have looked like — a house, a community, even a tentative romance with Enid. But the arrival of Negan shattered that fragile peace. Carl witnessed Glenn and Abraham's murders on that terrible night, and rather than being broken by it, he channeled his rage into action. He infiltrated the Sanctuary alone, killing two Saviors and confronting Negan face-to-face. What he found surprised him: Negan was fascinated by the boy's bravery, and their strange conversations planted seeds that would ultimately shape Carl's philosophy about the future.",

      "Carl's final act defined the series' entire moral framework. Bitten by a walker while helping a stranger named Siddiq, Carl spent his last hours writing letters to everyone he loved, including one to Negan. His vision was radical and simple: end the cycle of violence, find mercy instead of wrath, build a world where former enemies could coexist. He begged his father to make peace rather than pursue vengeance. Carl chose to end his own life on his own terms, and Rick held him as he pulled the trigger. His death was the turning point of the war — Rick honored Carl's wish by sparing Negan's life, and every act of mercy that followed was Carl's legacy reaching forward from beyond the grave."
    ],
    keyMoments: [
      {
        title: "Putting Down Shane",
        season: 2,
        episode: 12,
        episodeTitle: "Better Angels",
        description: "After Rick killed Shane in self-defense, the body reanimated. Young Carl raised a gun and shot walker-Shane through the head, saving his father. It was the first time Carl took a life, and the moment his childhood truly ended.",
        isSpoiler: true,
      },
      {
        title: "Lori's Death",
        season: 3,
        episode: 4,
        episodeTitle: "Killer Within",
        description: "When Lori died during an emergency cesarean delivery of baby Judith, Carl insisted on being the one to prevent his mother from reanimating. The gunshot echoed through the prison corridors, and Rick's howl of grief when he learned the news became the series' most visceral moment of loss.",
        isSpoiler: true,
      },
      {
        title: "Infiltrating the Sanctuary",
        season: 7,
        episode: 7,
        episodeTitle: "Sing Me a Song",
        description: "Carl smuggled himself into Negan's compound hidden in a supply truck, then opened fire, killing two Saviors before being captured. Rather than execute him, Negan was captivated by the boy's audacity, beginning a strange relationship that influenced both their futures.",
        isSpoiler: false,
      },
      {
        title: "The Letters and the Bite",
        season: 8,
        episode: 9,
        episodeTitle: "Honor",
        description: "Bitten while helping a stranger, Carl spent his final hours writing farewell letters and pleading with Rick to end the war with mercy. He took his own life before the fever could claim him, and his vision of peace became the moral compass for every survivor who remained.",
        isSpoiler: true,
      },
    ],
    relationships: [
      {
        characterId: "rick-grimes",
        name: "Rick Grimes",
        type: "Family",
        description: "The central relationship of the series. Rick's every decision was filtered through what it meant for Carl's survival and future. Carl's death shattered Rick but also redirected him toward mercy — honoring his son's dying wish became Rick's purpose.",
        revealsDeath: true,
      },
      {
        characterId: "michonne",
        name: "Michonne",
        type: "Family",
        description: "Michonne became Carl's surrogate mother and fierce protector. Their bond formed over shared comic books and pudding, and Michonne's love for Carl was as deep and genuine as any biological parent's. His death devastated her as profoundly as it did Rick.",
        revealsDeath: true,
      },
      {
        characterId: "negan",
        name: "Negan",
        type: "Rival",
        description: "Their relationship defied simple categorization. Negan was fascinated by Carl's bravery, while Carl saw past the monster to the man beneath. Carl's final letter to Negan asked him to change — and arguably, that letter planted the seed of Negan's eventual redemption.",
      },
      {
        characterId: "glenn-rhee",
        name: "Glenn Rhee",
        type: "Ally",
        description: "Glenn was like an older brother to Carl, looking out for him from the earliest days at the Atlanta camp. Glenn's murder in front of Carl added another layer of trauma that fueled the boy's determination to fight back against the Saviors.",
        revealsDeath: true,
      },
    ],
    stats: {
      firstAppearance: "S1 E1 — Days Gone Bye",
      lastAppearance: "S8 E9 — Honor",
      episodeCount: 108,
      killCountEstimate: "15+",
      weaponOfChoice: "Beretta 92FS / Silenced Pistol",
      groupAffiliations: [
        "Atlanta Camp",
        "The Prison",
        "Alexandria Safe-Zone",
      ],
    },
    additionalQuotes: [
      "I'd die for you, and I would have died for you.",
      "It can be like this. It can be better than this.",
      "I'm not gonna stand here and wait for you to decide which one of us you want to kill.",
    ],
    galleryImages: [
      assetUrl("/images/characters/carl.jpg"),
      assetUrl("/images/characters/carl1.jpg"),
      assetUrl("/images/characters/carl2.jpg"),
      assetUrl("/images/characters/carl3.jpg"),
      assetUrl("/images/characters/carl4.jpg"),
    ],
  },
]

export function getCharacterProfile(
  characterId: string
): CharacterProfile | undefined {
  return characterProfiles.find((p) => p.characterId === characterId)
}

export function hasCharacterProfile(characterId: string): boolean {
  return characterProfiles.some((p) => p.characterId === characterId)
}
