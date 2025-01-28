'use client';
import { Pagination } from '@/components/ui/pagination';
import { PaginationContent } from '@/components/ui/pagination';
import { PaginationItem } from '@/components/ui/pagination';
import { PaginationLink } from '@/components/ui/pagination';
import { PaginationEllipsis } from '@/components/ui/pagination';
import { PaginationPrevious } from '@/components/ui/pagination';
import { PaginationNext } from '@/components/ui/pagination';
import { ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function QestPagination(props) {
	const { currentPage, totalPages, onChangePage } = props;

	const limit = 5;
	const [pageGroup, setPageGroup] = useState(1); // 페이지 그룹
	const pageGroupStart = (pageGroup - 1) * limit + 1;
	const pageGroupLast = Math.min(pageGroupStart + limit - 1, totalPages);
	const maxPageGroup = Math.ceil(totalPages / limit);

	// 페이지 클릭 이벤트
	const handlePrevPageGroup = () => {
		if (pageGroup > 1) {
			setPageGroup(pageGroup - 1);
		}
	};

	const handleNextPageGroup = () => {
		if (pageGroup < maxPageGroup) {
			setPageGroup(pageGroup + 1);
		}
	};

	return (
		<Pagination className='my-10'>
			<PaginationContent>
				<PaginationItem>
					<Button variant='ghost' disabled={pageGroupStart === 1} className='disabeld:opacity-20' onClick={handlePrevPageGroup}>
						<ChevronLeft />
					</Button>
				</PaginationItem>
				{Array.from({ length: pageGroupLast - pageGroupStart + 1 }, (_, i) => (
					<PaginationItem key={pageGroupStart + i}>
						<PaginationLink
							href='#'
							isActive={currentPage === pageGroupStart + i}
							onClick={() => {
								onChangePage(pageGroupStart + i);
							}}>
							{pageGroupStart + i}
						</PaginationLink>
					</PaginationItem>
				))}

				<PaginationItem>
					<Button variant='ghost' disabled={pageGroup === maxPageGroup} className='disabeld:opacity-20' onClick={handleNextPageGroup}>
						<ChevronRight />
					</Button>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
