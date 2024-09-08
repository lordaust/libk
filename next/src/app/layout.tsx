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
	console.log(teams)

	return (
		<html className="h-full bg-white" lang="no">
			<body className={poppins.className}>
				<div className="flex h-full">
					<nav className="bg-slate_blue h-full w-64">
						<Nav teams={teams} />
					</nav>
					<div className="ml-5 flex-1 p-8">
						<Forside />
						<Separator />

						{children}
						<Footer />
					</div>
				</div>
			</body>
			{/* <GoogleTagManager gtmId='' /> */}
		</html>
	)
}
