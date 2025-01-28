'use client';

import { TableHead } from '@/components/ui/table';
import { TableRow } from '@/components/ui/table';
import { TableBody } from '@/components/ui/table';
import { TableCell } from '@/components/ui/table';
import { TableHeader } from '@/components/ui/table';
import { Table } from '@/components/ui/table';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useEffect } from 'react';

export default function ProjectsDataTable({ columns, data }) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<Table>
			<TableHeader>
				{table.getHeaderGroups().map((group) => (
					<TableRow key={group.id}>
						{group.headers.map((header) => {
							return <TableHead key={header.id}>{header.column.columnDef.header}</TableHead>;
						})}
					</TableRow>
				))}
			</TableHeader>
			<TableBody>
				{table.getRowModel().rows?.length ? (
					table.getRowModel().rows.map((row) => (
						<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
							{row.getVisibleCells().map((cell) => {
								return <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>;
							})}
						</TableRow>
					))
				) : (
					<TableRow>
						<TableCell colSpan={columns.length} className='h-24 text-center'>
							프로젝트가 없습니다.
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
