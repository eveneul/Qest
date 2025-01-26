'use client';

import { Popover, PopoverTrigger } from '@radix-ui/react-popover';
import { Bell } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { PopoverContent } from './ui/popover';

export default function Notification() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant='ghost' size='icon'>
					<Bell />
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<div className='flex items-center justify-end gap-2'>
					<Button variant='ghost' className='p-0 h-auto text-xs text-gray-500'>
						전체 읽음
					</Button>
					<Button variant='ghost' className='p-0 h-auto text-xs text-gray-500 '>
						전체 삭제
					</Button>
				</div>
				<ul>
					<li>
						<Link href='/'>
							<Button variant='link' className='p-0'>
								<em className=''>이노션</em>
								<span className='truncate'>[디자인] Network 애니메이션 수정 요청</span>
							</Button>
						</Link>
					</li>
				</ul>
			</PopoverContent>
		</Popover>
	);
}
