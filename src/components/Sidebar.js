'use client'

import {usePathname} from 'next/navigation'
import {useEffect} from 'react'
import {Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader} from './ui/sidebar'
import {Avatar, AvatarImage} from '@radix-ui/react-avatar'

export default function QestSidebar() {
	const pathname = usePathname()

	// 로그인, 회원가입 페이지에는 사이드바 비노출
	if (pathname === '/login' || pathname === '/join') return null

	const items = []

	return (
		<Sidebar variant='floating' collapsible='icon'>
			<SidebarHeader>
				<h1 className='font-logo text-2xl font-bold tracking-tighter'>Q</h1>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup />
				<SidebarGroup />
			</SidebarContent>
			<SidebarFooter>
				<div>
					<Avatar className='flex align-items'>
						<AvatarImage src='https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg' className='w-8 h-8 rounded-full object-cover' />
						<div className='flex flex-col ml-2'>
							<em className='text-sm not-italic font-semibold  text-black'>오하늘</em>
							<span className='text-xs font-medium  text-black'>DFZ / 프론트엔드 개발자</span>
						</div>
					</Avatar>
				</div>
				<div></div>
			</SidebarFooter>
		</Sidebar>
	)
}
