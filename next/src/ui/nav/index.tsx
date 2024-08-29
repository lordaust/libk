'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Separator from '../modules/Separator'

import navigation from './navigation_data'
//import teams2 from './teams_data'
import fetchTeamsData from '@/lib/fetchTeamsData'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default async function NavBar() {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const teams = await fetchTeamsData()

	return (
		<div>
			<div>
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
								<Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-300"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-300"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute left-full top-0 flex w-16 justify-center pt-5">
											<button
												type="button"
												className="-m-2.5 p-2.5"
												onClick={() => setSidebarOpen(false)}
											>
												<span className="sr-only">Close sidebar</span>
												<XMarkIcon
													className="h-6 w-6 text-white"
													aria-hidden="true"
												/>
											</button>
										</div>
									</Transition.Child>
									{/* Sidebar component, swap this element with another sidebar if you like */}
									<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-background_blue px-6 pb-2">
										{/*<div className="flex items-center h-16 pb-5 mb-5 shrink-0">
											<Image
												className="w-auto h-8"
												src="/images/logo-LIBK-512x512.png"
												alt="Your Company"
												height={512}
												width={512}
											/>
										</div> */}
										<nav className="flex flex-1 flex-col">
											<ul role="list" className="flex flex-1 flex-col gap-y-7">
												<li>
													<ul role="list" className="-mx-2 space-y-1">
														{navigation.map((item) => (
															<li key={item.name}>
																<a
																	href={item.href}
																	className={classNames(
																		item.current
																			? 'bg-blue-800 text-white'
																			: 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
																		'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
																	)}
																>
																	<item.icon
																		className={classNames(
																			item.current
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
													<div className="text-xs font-semibold leading-6 text-indigo-200">
														Våre lag
													</div>
													<ul role="list" className="-mx-2 mt-2 space-y-1">
														{teams.map((team) => (
															<li key={team.teamName.current}>
																<a
																	href={`/lag/${team.teamName.current}`}
																	className="group flex gap-x-3 rounded-md bg-background_blue p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
																>
																	<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
																		{team.teamCategory.charAt(0)}
																	</span>
																	<span className="truncate">
																		{team.teamTitle}
																	</span>
																</a>
															</li>
														))}
													</ul>
												</li>
											</ul>
										</nav>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="overflow-y-none items-left flex h-full w-full flex-col bg-primary_blue">
						{/* 						<div className="flex items-center pt-2 bg-white shrink-0">
							<Image
								className="w-auto"
								src="/images/logo_libk.png"
								alt="Lørenskog Innebandy Logo"
								height={212}
								width={261}
							/>
						</div> */}
						<nav className="ml-2 flex flex-1 flex-col">
							<ul role="list" className="flex flex-1 flex-col gap-y-7">
								<li>
									<ul role="list" className="space-y-1">
										{navigation.map((item) => (
											<li key={item.name}>
												<a
													href={item.href}
													className={classNames(
														item.current
															? 'bg-blue-600 text-white'
															: 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
														'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
													)}
												>
													<item.icon
														className={classNames(
															item.current
																? 'text-nav_tex_color'
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
									<div className="text-xs font-semibold leading-6 text-indigo-200">
										Våre lag
									</div>
									<ul role="list" className="mt-2 space-y-1">
										{teams.map((team) => (
											<li key={team.teamName.current}>
												<a
													href={`/lag/${team.teamName.current}`}
													className="group flex gap-x-3 rounded-md bg-background_blue p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
												>
													<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
														{team.teamCategory.charAt(0)}
													</span>
													<span className="truncate">{team.teamTitle}</span>
												</a>
											</li>
										))}
									</ul>
									<Separator />
									<div className="text-xs">
										<div className="group flex gap-x-3 rounded-md p-2 text-sm font-normal leading-6 text-indigo-200">
											<strong>A:</strong> Aldersbestemt trinn
										</div>
										<div className="group flex gap-x-3 rounded-md p-2 text-sm font-normal leading-6 text-indigo-200">
											<strong>H:</strong> Herrer
										</div>
										<div className="group flex gap-x-3 rounded-md p-2 text-sm font-normal leading-6 text-indigo-200">
											<strong>D:</strong> Damer
										</div>
									</div>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	)
}
