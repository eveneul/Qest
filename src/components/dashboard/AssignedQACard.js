'use client';

import { Dot, EllipsisVertical } from 'lucide-react';
import Link from 'next/link';
import { CardTitle } from '../ui/card';
import { CardContent } from '../ui/card';
import { CardDescription } from '../ui/card';
import { CardHeader } from '../ui/card';
import { Card } from '../ui/card';

function RecentQAList(props) {
	const { link, project, title } = props;
	return (
		<li className='rounded-sm hover:bg-white hover:bg-opacity-50 transition'>
			<Link href={link} className='flex items-center p-1'>
				<Dot size={12} />
				<span className='text-xs text-gray-500 min-w-fit'>{project}</span>
				<p className='truncate text-sm text-black ml-2'>{title}</p>
			</Link>
		</li>
	);
}

export default function AssignedQACard() {
	return (
		<Card className='bg-begie border-none shadow-none ring-0'>
			<CardHeader className='p-4 flex flex-row justify-between'>
				<CardTitle className=''>새로 올라온 QA를 확인하세요.</CardTitle>
				<Link href='/project' className='!m-0'>
					<EllipsisVertical size={16} />
				</Link>
			</CardHeader>
			<CardContent>
				<ul className='flex flex-col'>
					<RecentQAList link={'/project'} project={'이노션'} title={'[디자인] IR 페이지 테이블 패딩 수정 요청'} />
					<RecentQAList link={'/project'} project={'이노션'} title={'[기능] 리센트 산업 분야 필터 오류 수정 요청'} />
					<RecentQAList link={'/project'} project={'YG Buffz!'} title={'[디자인] 마이페이지 공지사항 고정 글 아이콘 추가'} />
					<RecentQAList link={'/project'} project={'이노션'} title={'[디자인] IR 페이지 테이블 패딩 수정 요청'} />
					<RecentQAList link={'/project'} project={'이노션'} title={'[디자인] IR 페이지 테이블 패딩 수정 요청'} />
				</ul>
			</CardContent>
		</Card>
	);
}
