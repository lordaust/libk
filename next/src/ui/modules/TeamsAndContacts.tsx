import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { TeamType } from '@/types/types'

type TeamsDetailsProps = {
	teams: TeamType[]
}

export default function TeamsAndContacts({ teams }: TeamsDetailsProps) {
	return (
		<ul role="list" className="divide-y divide-gray-100">
			{teams.map((team) => (
				<li
					key={team.teamName.current}
					className="relative py-5 hover:bg-gray-50"
				>
					<div className="px-4 sm:px-6 lg:px-8">
						<div className="flex max-w-4xl justify-between gap-x-6">
							<div className="flex min-w-0 flex-1 gap-x-4">
								<div className="min-w-0 flex-auto">
									<p className="text-sm font-semibold leading-6 text-gray-900">
										<a
											href={`/lag/${team.teamName.current}`}
											className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
										>
											<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
												{team.teamCategory.charAt(0)}
											</span>
											<span className="truncate text-gray-900">
												{team.teamTitle}
											</span>
										</a>
									</p>

									<p className="mt-1 flex text-xs leading-5 text-gray-500">
										{team.contactPerson.name}
									</p>
								</div>
							</div>
							<div className="flex shrink-0 items-center gap-x-4">
								<div className="hidden sm:flex sm:flex-col sm:items-end">
									<p className="text-sm leading-6 text-gray-900">
										{team.contactPerson.email}
									</p>
									<p className="mt-1 text-xs leading-5 text-gray-500">
										{team.contactPerson.phone}
									</p>
								</div>
								<img
									alt={team.contactPerson.photo?.caption}
									src={team.contactPerson.photoUrl || './images/ai_male.png'}
									className="h-12 w-12 flex-none rounded-full bg-gray-50"
								/>
								<ChevronRightIcon
									aria-hidden="true"
									className="h-5 w-5 flex-none text-gray-400"
								/>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}
