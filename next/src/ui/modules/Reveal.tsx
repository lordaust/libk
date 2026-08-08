'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
	children: ReactNode
	/** Delay in ms before the element animates in (for staggering). */
	delay?: number
	className?: string
	/** Render as a different element than div. */
	as?: 'div' | 'section' | 'li'
}

export default function Reveal({
	children,
	delay = 0,
	className = '',
	as = 'div',
}: RevealProps) {
	const ref = useRef<HTMLElement | null>(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const node = ref.current
		if (!node) return

		// Respect reduced-motion: show immediately.
		if (
			typeof window !== 'undefined' &&
			window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
		) {
			setVisible(true)
			return
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(true)
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
		)

		observer.observe(node)
		return () => observer.disconnect()
	}, [])

	const Tag = as

	return (
		<Tag
			// @ts-expect-error - ref type varies by tag, safe at runtime
			ref={ref}
			className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
			style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
		>
			{children}
		</Tag>
	)
}
