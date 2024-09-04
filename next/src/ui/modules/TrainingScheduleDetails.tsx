import { TeamType } from '@/types/types'
import {
	MapPinIcon,
	AcademicCapIcon,
	CalendarIcon,
} from '@heroicons/react/24/solid'

type TeamsDetailsProps = {
	teamsSchedule: TeamType[]
}

export default function TrainingScheduleDetails({
	teamsSchedule,
}: TeamsDetailsProps) {
	return (
		<ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
			{teamsSchedule.map((team) => (
				<li
					key={team.teamName.current}
					className="relative flex space-x-6 py-6 xl:static"
				>
					{/* Profile Image */}
					<img
						src={team.contactPerson.photoUrl || '/images/ai_male.png'}
						alt={team.contactPerson.name}
						className="h-14 w-14 flex-none rounded-full object-cover"
					/>

					{/* Team Information */}
					<div className="flex-auto">
						{/* Team Name */}
						<h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">
							<a
								href={`/lag/${team.teamName.current}`}
								className="hover:underline"
							>
								{team.teamTitle}
							</a>
						</h3>

						{/* Coach Name */}
						<dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
							{/* Replace Date with Coach Name */}
							<div className="flex items-start space-x-3">
								<dt className="mt-0.5">
									<span className="sr-only">Coach</span>
									<AcademicCapIcon
										className="h-5 w-5 text-gray-400"
										aria-hidden="true"
									/>
								</dt>
								<dd>{team.contactPerson.name}</dd>
							</div>

							{/* Training Schedule List */}
							<div className="mt-2 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
								{team.trainingTimes.map((time, idx) => (
									<div key={idx} className="flex items-center space-x-3">
										<dt className="flex items-center space-x-1">
											{/* Icons for time and location */}
											<CalendarIcon
												className="h-5 w-5 text-gray-400"
												aria-hidden="true"
											/>
											<MapPinIcon
												className="h-5 w-5 text-gray-400"
												aria-hidden="true"
											/>
										</dt>
										{/* Time description */}
										<dd>{time}</dd>
									</div>
								))}
							</div>
						</dl>
					</div>
				</li>
			))}
		</ol>
	)
}
