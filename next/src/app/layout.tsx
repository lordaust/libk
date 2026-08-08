import Forside from '@/ui/forside'
import Nav from '@/ui/nav'
import Footer from '@/ui/footer'
import Separator from '@/ui/modules/Separator'

// import { GoogleTagManager } from '@next/third-parties/google'
import '@/styles/app.css'

import { Poppins } from 'next/font/google'
import fetchTeamsData from '@/lib/fetchTeamsData'

// Configure the Poppins font
const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
})

export const metadata = {
	title: 'Lørenskog Innebandyklubb',
	description:
		'Innebandy for alle. Vi har lag for alle aldre og nivåer. Velkommen til Lørenskog Innebandyklubb.',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const teams = await fetchTeamsData()

	return (
		<html className="h-full bg-white" lang="no">
			<body className={poppins.className}>
				<Nav teams={teams} />
				<div className="lg:pl-72">
					<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
						<Forside />
						<Separator />

						{children}
						<Footer />
					</div>
				</div>
			</body>
		</html>
	)
}
