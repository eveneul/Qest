'use client';

import { supabaseClient } from '@/lib/supabase';
import { useState, useEffect } from 'react';
import ProjectsDataTable from './data-table';
import { columns } from './columns';
import QestPagination from '../../../components/Pagination';

export default function ProjectsSetting() {
	const [projects, setProjects] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(0);
	const ROW_PER_PAGE = 10; // 한 페이지당 보여 줄 게시글 개수
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchProjectList = async () => {
			const startRowIndex = (page - 1) * ROW_PER_PAGE; // 첫 번째 게시글
			const endRowIndex = startRowIndex + (ROW_PER_PAGE - 1); // 마지막 게시글 인덱스

			const { data, error, count } = await supabaseClient
				.from('projects') // API
				.select('*', { count: 'exact' }) // 모든 게시글 조회 및 개수 조회
				.order('id', { ascending: false })
				.range(startRowIndex, endRowIndex);

			if (error) {
				console.log('error');
			} else {
				setProjects(data);
				setTotalPage(Math.ceil(count / ROW_PER_PAGE));
			}
		};

		fetchProjectList();
	}, [page]);

	return (
		<div>
			<ProjectsDataTable columns={columns} data={projects} />
			<QestPagination currentPage={page} totalPages={totalPage} onChangePage={(newPage) => setPage(newPage)} />
		</div>
	);
}
