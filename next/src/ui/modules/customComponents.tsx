import React from 'react'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

//TODO: Custom components for Portable Text er det mulig å se på
// Define custom components for Portable Text
export const customComponents: PortableTextComponents = {
	types: {
		image: ({ value }) => {
			return (
				<div className="my-8">
					<Image
						src={urlFor(value.asset)}
						alt={value.alt || ' '}
						width={438}
						height={438}
						className="rounded-lg"
					/>
					{value.caption && (
						<p className="mt-2 text-sm text-gray-500">{value.caption}</p>
					)}
				</div>
			)
		},
	},
	block: {
		h1: ({ children }) => (
			<h1 className="my-6 text-4xl font-bold leading-tight text-gray-900">
				{children}
			</h1>
		),
		h2: ({ children }) => (
			<h2 className="my-4 text-3xl font-bold leading-tight text-gray-800">
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className="my-3 text-2xl font-semibold leading-tight text-gray-700">
				{children}
			</h3>
		),
		normal: ({ children }) => (
			<p className="mb-6 text-lg leading-7 text-gray-600">{children}</p>
		),
	},
	list: {
		bullet: ({ children }) => (
			<ul className="my-4 ml-5 list-disc">{children}</ul>
		),
		number: ({ children }) => (
			<ol className="my-4 ml-5 list-decimal">{children}</ol>
		),
	},
	marks: {
		strong: ({ children }) => (
			<strong className="font-semibold text-gray-900">{children}</strong>
		),
		em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
		link: ({ value, children }) => (
			<a
				href={value.href}
				className="text-indigo-600 hover:underline"
				target="_blank"
				rel="noopener noreferrer"
			>
				{children}
			</a>
		),
	},
}
