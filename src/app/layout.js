import {Geist, Geist_Mono} from 'next/font/google'
import './globals.css'
import {SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar'
import QestSidebar from '@/components/Sidebar'
import Header from '@/components/Header'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata = {
	title: 'Qest',
	description: 'DFY QA System'
}

export default function RootLayout({children}) {
	return (
		<html lang='ko'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<SidebarProvider>
					<QestSidebar />
					<Header />
					<main>{children}</main>
				</SidebarProvider>
			</body>
		</html>
	)
}
