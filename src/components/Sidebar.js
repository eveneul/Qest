'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from './ui/sidebar';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { useSidebar } from './ui/sidebar';
import { SidebarMenu } from './ui/sidebar';
import { Dot, Home, PanelsTopLeft } from 'lucide-react';
import Link from 'next/link';
import { Collapsible } from './ui/collapsible';
import { SidebarMenuItem } from './ui/sidebar';
import { CollapsibleTrigger } from './ui/collapsible';
import { SidebarMenuButton } from './ui/sidebar';
import { CollapsibleContent } from '@radix-ui/react-collapsible';
import { SidebarMenuSub } from './ui/sidebar';
import { SidebarMenuSubItem } from './ui/sidebar';

export default function QestSidebar() {
	const pathname = usePathname();

	// 로그인, 회원가입 페이지에는 사이드바 비노출
	if (pathname === '/login' || pathname === '/join') return null;

	const items = [];

	return (
		<Sidebar variant='floating' collapsible='icon'>
			<SidebarHeader>
				<Link href='/'>
					<h1 className='font-logo text-2xl font-bold tracking-tighter'>Q</h1>
				</Link>
			</SidebarHeader>
			<SidebarContent className='gap-0'></SidebarContent>
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
	);
}
