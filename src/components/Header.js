'use client';

import { Bell } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Notification from './Notification';
import Search from './Search';
import { Button } from './ui/button';
import { SidebarTrigger } from './ui/sidebar';

export default function Header() {
	const pathname = usePathname();

	return (
		<>
			<header className='py-2 px-6 w-full h-fit flex justify-between'>
				<div>
					<SidebarTrigger />
				</div>
				<div className='flex items-center gap-6'>
					<Search />
					<Notification />
				</div>
			</header>
		</>
	);
}
