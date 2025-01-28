'use client';

import { ColumnDef } from '@tanstack/react-table';

const statusMap = {
	0: '중단',
	1: '진행 중',
	2: '종료',
};

export const columns = [
	{
		accessorKey: 'name',
		header: '프로젝트명',
	},
	{
		accessorKey: 'description',
		header: '프로젝트 설명',
	},
	{
		accessorKey: 'status',
		header: '상태',
		cell: ({ row }) => statusMap[row.original.status] || '알 수 없음',
	},
	{
		accessorKey: 'startDate',
		header: '프로젝트 시작일',
		cell: ({ row }) => {
			const date = new Date(row.original.created_at);
			return date.toLocaleDateString(); // 'YYYY-MM-DD' 형식으로 변환
		},
	},
];
