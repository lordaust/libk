import React from 'react'
import { PortableText } from '@portabletext/react'
import { customComponents } from '@/ui/modules/customComponents'
import { AboutSectionType } from '@/types/types'
import { format } from 'date-fns'
import { nb } from 'date-fns/locale'

type AboutSectionsProps = {
	sections: AboutSectionType[]
}

const AboutSections: React.FC<AboutSectionsProps> = ({ sections }) => {
	if (!sections || sections.length === 0) {
		return null
	}

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
				<div className="divide-y divide-gray-200">
					{sections.map((section) => {
						const updated = section._updatedAt
							? format(new Date(section._updatedAt), 'dd. MMMM yyyy', {
									locale: nb,
								})
							: null

						return (
							<section key={section._id} className="py-10 first:pt-0">
								<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									{section.header}
								</h2>
								{section.subtitle && (
									<p className="mt-3 text-xl leading-8 text-gray-600">
										{section.subtitle}
									</p>
								)}
								<div className="mt-6 text-base leading-7 text-gray-700">
									<PortableText
										value={section.content}
										components={customComponents}
									/>
								</div>

								{section.contactPerson && (
									<div className="mt-6 flex items-center gap-x-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
										{section.contactPerson.photoUrl && (
											<img
												alt={`Bilde av ${section.contactPerson.name}`}
												src={section.contactPerson.photoUrl}
												className="h-14 w-14 flex-none rounded-full bg-gray-100 object-cover"
											/>
										)}
										<div className="text-sm leading-6">
											<p className="font-semibold text-gray-900">
												{section.contactPerson.name}
											</p>
											<p className="text-gray-600">
												{section.contactPerson.role}
											</p>
											<p className="text-gray-600">
												<a
													href={`mailto:${section.contactPerson.email}`}
													className="font-medium text-indigo-600 hover:text-indigo-500"
												>
													{section.contactPerson.email}
												</a>
												{section.contactPerson.phone && (
													<span> · Tlf: {section.contactPerson.phone}</span>
												)}
											</p>
										</div>
									</div>
								)}

								{updated && (
									<p className="mt-6 text-sm text-gray-400">
										Sist oppdatert: {updated}
									</p>
								)}
							</section>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default AboutSections
