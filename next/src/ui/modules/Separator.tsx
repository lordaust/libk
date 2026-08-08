import React from 'react'

export default function Separator() {
	return (
		<div className="my-5 flex items-center gap-3" aria-hidden="true">
			<span className="h-1 w-12 rounded-full bg-royal" />
			<span className="h-px flex-1 bg-gradient-to-r from-navy-200 to-transparent" />
		</div>
	)
}
