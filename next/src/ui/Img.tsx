'use client'

import { urlFor } from '@/lib/sanity'
import Image, { type ImageProps } from 'next/image'

export default function Img({
	image,
	imageWidth,
	alt = '',
	...props
}: {
	image?: Sanity.Image
	imageWidth?: number
	alt?: string
} & Omit<ImageProps, 'src' | 'alt'>) {
	if (!image) return null

	let builder = urlFor(image).auto('format').fit('max')
	if (imageWidth) builder = builder.width(imageWidth)
	const src = builder.url()

	// Sanity asset documents expose intrinsic dimensions via metadata.
	const dimensions = (image as { metadata?: { dimensions?: { width: number; height: number } } })
		?.metadata?.dimensions
	const width = imageWidth ?? dimensions?.width ?? 1200
	const height =
		imageWidth && dimensions
			? Math.round((imageWidth / dimensions.width) * dimensions.height)
			: (dimensions?.height ?? 800)

	return (
		<Image
			src={src}
			width={width}
			height={height}
			alt={image.alt || alt}
			loading="lazy"
			{...props}
		/>
	)
}
