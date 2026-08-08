'use client'

import { Fragment, useState } from 'react'
import Image from 'next/image'
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

function LogoLockup({ onNavigate }: { onNavigate?: () => void }) {
	return (
		<a
			href="/"
			onClick={onNavigate}
			className="group flex items-center gap-3 rounded-lg px-1 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-300"
		>
			<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/95 shadow-sm ring-1 ring-white/20 transition-transform duration-200 group-hover:scale-105">
				<Image
					src="/images/logo_libk_smaller.png"
					alt="Lørenskog Innebandyklubb logo"
					width={40}
					height={32}
					className="h-8 w-auto"
				/>
			</span>
			<span className="flex flex-col leading-none">
				<span className="font-display text-lg font-bold uppercase tracking-wide text-white">
					Lørenskog
				</span>
				<span className="text-xs font-medium uppercase tracking-[0.18em] text-royal-300">
					Innebandyklubb
				</span>
			</span>
		</a>
	)
}

export default function NavBar({ teams }: NavBarProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const pathname = usePathname()

	const renderNavLinks = (onNavigate?: () => void) => (
		<ul role="list" className="flex flex-1 flex-col gap-y-7">
			<li>
				<ul role="list" className="-mx-2 space-y-1">
					{navigation.map((item) => {
						const active = item.href === pathname
						return (
							<li key={item.name}>
								<a
									href={item.href}
									onClick={onNavigate}
									aria-current={active ? 'page' : undefined}
									className={classNames(
										active
											? 'bg-royal text-white shadow-sm'
											: 'text-navy-200 hover:bg-white/10 hover:text-white',
										'group relative flex items-center gap-x-3 rounded-lg p-2 pl-3 text-sm font-semibold leading-6 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-300',
									)}
								>
									{active && (
										<span
											className="absolute inset-y-1.5 left-0 w-1 rounded-full bg-white/90"
											aria-hidden="true"
										/>
									)}
									<item.icon
										className={classNames(
											active
												? 'text-white'
												: 'text-navy-300 group-hover:text-white',
											'h-6 w-6 shrink-0 transition-colors duration-200',
										)}
										aria-hidden="true"
									/>
									{item.name}
								</a>
							</li>
						)
					})}
				</ul>
			</li>
			<li>
				<div className="flex items-center gap-2 px-2 text-xs font-semibold uppercase leading-6 tracking-[0.18em] text-navy-300">
					<span className="h-px w-4 bg-royal" aria-hidden="true" />
					Våre lag
				</div>
				<ul role="list" className="-mx-2 mt-2 space-y-1">
					{teams.map((team) => {
						const href = `/lag/${team.teamName.current}`
						const active = href === pathname
						return (
							<li key={team.teamName.current}>
								<a
									href={href}
									onClick={onNavigate}
									aria-current={active ? 'page' : undefined}
									className={classNames(
										active
											? 'bg-royal text-white shadow-sm'
											: 'text-navy-200 hover:bg-white/10 hover:text-white',
										'group relative flex items-center gap-x-3 rounded-lg p-2 pl-3 text-sm font-semibold leading-6 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-300',
									)}
								>
									{active && (
										<span
											className="absolute inset-y-1.5 left-0 w-1 rounded-full bg-white/90"
											aria-hidden="true"
										/>
									)}
									<span
										className={classNames(
											active
												? 'border-white/40 bg-white/20 text-white'
												: 'border-navy-500 bg-navy-700 text-navy-100 group-hover:border-royal group-hover:text-white',
											'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-bold uppercase transition-colors duration-200',
										)}
									>
										{team.teamTitle?.charAt(0)}
									</span>
									<span className="truncate">{team.teamTitle}</span>
								</a>
							</li>
						)
					})}
				</ul>
			</li>
		</ul>
	)

	return (
		<>
			{/* Mobile top bar */}
			<div className="sticky top-0 z-40 flex items-center gap-x-4 border-b border-white/10 bg-navy px-4 py-3 shadow-sm sm:px-6 lg:hidden">
				<button
					type="button"
					className="-m-2.5 rounded-md p-2.5 text-navy-100 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-300"
					onClick={() => setSidebarOpen(true)}
				>
					<span className="sr-only">Åpne meny</span>
					<Bars3Icon className="h-6 w-6" aria-hidden="true" />
				</button>
				<a href="/" className="flex flex-1 items-center gap-2 truncate">
					<Image
						src="/images/logo_libk_smaller.png"
						alt="Lørenskog Innebandyklubb logo"
						width={32}
						height={26}
						className="h-7 w-auto"
					/>
					<span className="truncate font-display text-base font-bold uppercase tracking-wide text-white">
						Lørenskog Innebandyklubb
					</span>
				</a>
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
						<div className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm" />
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
							<Dialog.Panel className="relative flex w-full max-w-xs flex-1 bg-gradient-to-b from-navy-800 to-navy-900">
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
									<LogoLockup onNavigate={() => setSidebarOpen(false)} />
									<div className="h-px w-full bg-white/10" aria-hidden="true" />
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
				<div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-white/5 bg-gradient-to-b from-navy-800 to-navy-900 px-6 pb-4 pt-6">
					<LogoLockup />
					<div className="h-px w-full bg-white/10" aria-hidden="true" />
					<nav className="flex flex-1 flex-col">{renderNavLinks()}</nav>
				</div>
			</div>
		</>
	)
}
