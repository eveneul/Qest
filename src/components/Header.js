'use client'

import {usePathname} from 'next/navigation'
import Search from './Search'
import {SidebarTrigger} from './ui/sidebar'

export default function Header() {
	const pathname = usePathname()

	return (
		<>
			<header className='p-2 w-full h-fit flex justify-between'>
				<div>
					<SidebarTrigger />
				</div>
				<div>
					<Search />
				</div>
			</header>
		</>
	)
}
