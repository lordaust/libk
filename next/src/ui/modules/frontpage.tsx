import FrontpageClubMembers from './ClubMembers'
import FrontpageHero from './FrontpageHero'
import FrontpageLatestNews from './FrontpageLatestNews'
import FrontpageMissionStats from './FrontpageMissionStats'
import FrontpageValues from './FrontpageValues'

export default function FrontPage() {
	return (
		<div className="bg-white">
			<main className="isolate">
				{/* Hero section */}
				<FrontpageHero />

				{/* Content section */}
				<FrontpageMissionStats />

				{/* Values section */}
				<FrontpageValues />

				{/* Team section */}
				<FrontpageClubMembers />
			</main>
		</div>
	)
}
