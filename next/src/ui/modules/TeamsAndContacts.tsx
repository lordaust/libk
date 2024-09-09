import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { TeamType } from '@/types/types'

type TeamsDetailsProps = {
	teams: TeamType[]
}
const truncateText = (text: string, wordLimit: number) => {
	if (!text) return '' // Return an empty string if text is null or undefined
	const words = text.split(' ')
	return words.length > wordLimit
		? words.slice(0, wordLimit).join(' ') + '...'
		: text
}

export default function TeamsAndContacts({ teams }: TeamsDetailsProps) {
	return (
		<div className="bg-white py-8">
			{' '}
			{/* Reduced padding to show more content in the first viewport */}
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 lg:px-8 xl:grid-cols-5">
				{' '}
				{/* Reduced vertical gap */}
				<div className="max-w-2xl xl:col-span-2">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Våre lag
					</h2>
					<p className="mt-4 text-lg leading-8 text-gray-600">
						{' '}
						{/* Reduced margin */}
						Vi i Lørenskog Innebandy er en breddeklubb med mål om å ha lag i
						alle aldere. Dette er listen over de aktive lagene vi nå har. Finnes
						ikke ditt relevante alderstrinn i listen? Kontakt oss!
					</p>
				</div>
			</div>
			{/* List of teams */}
			<ul role="list" className="divide-y divide-gray-100">
				{teams.map((team) => (
					<li
						key={team.teamName.current}
						className="relative py-6 hover:bg-gray-50" // Reduced padding to fit more content in viewport
					>
						<a
							href={`/lag/${team.teamName.current}`}
							className="group flex items-center justify-between gap-x-6 rounded-md p-4 text-sm font-semibold leading-6" // Ensure consistent height for all elements
						>
							{/* Left section: Team info */}
							<div className="flex w-full items-start gap-x-4">
								{/* Team Category Icon */}
								<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-sm font-medium text-white">
									{team.teamCategory.charAt(0)}
								</span>

								{/* Team Title and Coach Info */}
								<div className="flex w-full max-w-lg flex-col justify-between">
									<p className="text-lg font-semibold text-gray-900">
										{team.teamTitle}
									</p>
									<p className="mt-1 text-xs text-gray-500">
										{truncateText(team.teamLongDescription, 50)}
									</p>
								</div>
							</div>

							{/* Right section: Coach Image and Arrow */}
							<div className="flex shrink-0 items-center gap-x-4">
								{/* Coach Email and Phone */}
								<div className="hidden flex-col items-end sm:flex">
									<p className="mt-1 text-xs text-gray-500">
										{team.contactPerson.name}
									</p>

									<p className="text-sm text-gray-900">
										{team.contactPerson.email}
									</p>
									<p className="mt-1 text-xs text-gray-500">
										{team.contactPerson.phone}
									</p>
								</div>

								{/* Coach Photo */}
								<img
									alt={team.contactPerson.photo?.caption}
									src={team.contactPerson.photoUrl || './images/ai_male.png'}
									className="h-12 w-12 rounded-full bg-gray-50"
								/>

								{/* Arrow */}
								<ChevronRightIcon
									aria-hidden="true"
									className="h-6 w-6 text-gray-400"
								/>
							</div>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
