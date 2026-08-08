import FrontpageClubMembers from './ClubMembers'
import FrontpageHero from './FrontpageHero'
import FrontpageMissionStats from './FrontpageMissionStats'
import FrontpageValues from './FrontpageValues'
import Reveal from './Reveal'

export default function FrontPage() {
	return (
		<div className="bg-white">
			<main className="isolate">
				{/* Hero section */}
				<FrontpageHero />

				{/* Content section */}
				<Reveal>
					<FrontpageMissionStats />
				</Reveal>

				{/* Values section */}
				<Reveal delay={80}>
					<FrontpageValues />
				</Reveal>

				{/* Team section */}
				<Reveal delay={80}>
					<FrontpageClubMembers />
				</Reveal>
			</main>
		</div>
	)
}
