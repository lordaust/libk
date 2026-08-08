'use client'

import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
	value: string | number
	className?: string
	durationMs?: number
}

/**
 * Animates a numeric value from 0 to its target when scrolled into view.
 * Non-numeric values (or any surrounding text like "ca." / "+") are preserved
 * as prefix/suffix. Respects prefers-reduced-motion.
 */
export default function CountUp({
	value,
	className,
	durationMs = 1400,
}: CountUpProps) {
	const raw = String(value)
	const match = raw.match(/^(\D*)([\d\s.,]+)(\D*)$/)
	const prefix = match ? match[1] : ''
	const suffix = match ? match[3] : ''
	const target = match ? parseInt(match[2].replace(/[^\d]/g, ''), 10) : NaN
	const isNumeric = !Number.isNaN(target)

	const ref = useRef<HTMLSpanElement>(null)
	const [display, setDisplay] = useState<number>(isNumeric ? 0 : 0)
	const [started, setStarted] = useState(false)

	useEffect(() => {
		if (!isNumeric || started) return
		const node = ref.current
		if (!node) return

		const prefersReduced = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return
					setStarted(true)
					observer.disconnect()

					if (prefersReduced) {
						setDisplay(target)
						return
					}

					const start = performance.now()
					const tick = (now: number) => {
						const progress = Math.min((now - start) / durationMs, 1)
						// easeOutCubic for a lively but settled feel
						const eased = 1 - Math.pow(1 - progress, 3)
						setDisplay(Math.round(eased * target))
						if (progress < 1) requestAnimationFrame(tick)
					}
					requestAnimationFrame(tick)
				})
			},
			{ threshold: 0.4 },
		)

		observer.observe(node)
		return () => observer.disconnect()
	}, [isNumeric, started, target, durationMs])

	if (!isNumeric) {
		return <span className={className}>{raw}</span>
	}

	return (
		<span ref={ref} className={className}>
			{prefix}
			{display.toLocaleString('nb-NO')}
			{suffix}
		</span>
	)
}
