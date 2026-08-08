'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import navigation from './navigation_data'
import { TeamType } from '@/types/types'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

type NavBarProps = {
	teams: TeamType[]
}

export default function NavBar({ teams }: NavBarProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const pathname = usePathname()

	const renderNavLinks = (onNavigate?: () => void) => (
		<ul role="list" className="flex flex-1 flex-col gap-y-7">
			<li>
				<ul role="list" className="-mx-2 space-y-1">
					{navigation.map((item) => (
						<li key={item.name}>
							<a
								href={item.href}
								onClick={onNavigate}
								className={classNames(
									item.href === pathname
										? 'bg-blue-600 text-white'
										: 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
									'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
								)}
							>
								<item.icon
									className={classNames(
										item.href === pathname
											? 'text-white'
											: 'text-indigo-200 group-hover:text-white',
										'h-6 w-6 shrink-0',
									)}
									aria-hidden="true"
								/>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</li>
			<li>
				<div className="px-2 text-xs font-semibold uppercase leading-6 tracking-wide text-indigo-200">
					Våre lag
				</div>
				<ul role="list" className="-mx-2 mt-2 space-y-1">
					{teams.map((team) => (
						<li key={team.teamName.current}>
							<a
								href={`/lag/${team.teamName.current}`}
								onClick={onNavigate}
								className={classNames(
									`/lag/${team.teamName.current}` === pathname
										? 'bg-blue-600 text-white'
										: 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
									'group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
								)}
							>
								<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
									{team.teamTitle?.charAt(0)}
								</span>
								<span className="truncate">{team.teamTitle}</span>
							</a>
						</li>
					))}
				</ul>
			</li>
		</ul>
	)

	return (
		<>
			{/* Mobile top bar */}
			<div className="sticky top-0 z-40 flex items-center gap-x-4 bg-primary_blue px-4 py-4 shadow-sm sm:px-6 lg:hidden">
				<button
					type="button"
					className="-m-2.5 p-2.5 text-nav_tex_color focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					onClick={() => setSidebarOpen(true)}
				>
					<span className="sr-only">Åpne meny</span>
					<Bars3Icon className="h-6 w-6" aria-hidden="true" />
				</button>
				<span className="flex-1 truncate text-sm font-semibold text-nav_tex_color">
					Lørenskog Innebandyklubb
				</span>
			</div>

			{/* Mobile sidebar (off-canvas) */}
			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-50 lg:hidden"
					onClose={setSidebarOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-900/80" />
					</Transition.Child>

					<div className="fixed inset-0 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative flex w-full max-w-xs flex-1 bg-primary_blue">
								<div className="absolute left-full top-0 flex w-16 justify-center pt-5">
									<button
										type="button"
										className="-m-2.5 p-2.5"
										onClick={() => setSidebarOpen(false)}
									>
										<span className="sr-only">Lukk meny</span>
										<XMarkIcon
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</button>
								</div>

								<div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4 pt-6">
									<nav className="flex flex-1 flex-col">
										{renderNavLinks(() => setSidebarOpen(false))}
									</nav>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			{/* Desktop static sidebar */}
			<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
				<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary_blue px-6 pb-4 pt-8">
					<nav className="flex flex-1 flex-col">{renderNavLinks()}</nav>
				</div>
			</div>
		</>
	)
}
