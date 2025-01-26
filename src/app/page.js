'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AssignedQACard from '../components/dashboard/AssignedQACard';

export default function Home() {
	return (
		<>
			<div id='dashboard' className='grid grid-rows-2 gap-6'>
				<div className='grid grid-cols-2 gap-4'>
					{/* 새로 올라온 QA */}
					<AssignedQACard />
					<div className='flex flex-col'>
						<Link href='/project'>프로젝트</Link>
						<Link href='/settings/projects'>프로젝트 셋팅</Link>
						<Link href='/settings/projects/create'>프로젝트 생성</Link>
					</div>
				</div>
			</div>
		</>
	);
}
