// src/ui/modules/TeamImage.tsx

import React from 'react'
import { urlFor } from '@/lib/sanity'

type TeamImageProps = {
	image: {
		asset?: { _ref: string }
		crop?: any
		hotspot?: any
	}
	alt: string
}

const TeamImage: React.FC<TeamImageProps> = ({ image, alt }) => {
	return (
		<div className="relative mt-2 overflow-hidden rounded-lg lg:h-96">
			{image.asset?._ref ? (
				<img
					src={urlFor(image).auto('format').url()}
					alt={alt}
					className="h-full w-full object-cover object-center"
				/>
			) : (
				<div className="h-full w-full bg-gray-200">Image not available</div>
			)}
		</div>
	)
}

export default TeamImage
