'use client';

import { supabaseClient } from '@/lib/supabase';
import { useState, useEffect } from 'react';
import ProjectsDataTable from './data-table';
import { columns } from './columns';
import QestPagination from '../../../components/Pagination';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';

export default function ProjectsSetting() {
	const [projects, setProjects] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(0);
	const ROW_PER_PAGE = 10; // 한 페이지당 보여 줄 게시글 개수
	const [loading, setLoading] = useState(false);
	const form = useForm({
		defaultValues: {
			pjName: '',
		},
	});

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

	const onSearch = form.handleSubmit(async (values) => {
		let query = supabaseClient.from('projects').select('*').order('id', { ascending: false });

		if (values.pjName) {
			query = query.ilike('name', `%${values.pjName}%`);
		}

		const { data, error } = await query;
		if (error) {
			console.log(error, 'error');
		} else {
			console.log(data, 'Data~~');
		}
	});

	return (
		<div>
			<Form {...form}>
				<form onSubmit={onSearch}>
					<FormField
						control={form.control}
						name='pjName'
						render={({ field }) => (
							<FormItem>
								<FormLabel>프로젝트명</FormLabel>
								<FormControl>
									<Input placeholder='shadcn' {...field} />
								</FormControl>
							</FormItem>
						)}></FormField>
					<Button type='submit'>검색</Button>
				</form>
			</Form>
			{/* <div className='flex flex-col gap-2'>
				<div className='flex items-center gap-1.5'>
					<Label htmlFor='pjName' className='text-sm font-medium text-black w-[120px]'>
						프로젝트명
					</Label>
					<Input type='pjName' id='pjName' placeholder='프로젝트명을 입력해 주세요.' className='w-[200px]' />
				</div>
				<div className='flex items-center gap-1.5'>
					<Label htmlFor='pjStatus' className='text-sm font-medium text-black w-[120px]'>
						프로젝트 상태
					</Label>
					<Input type='pjStatus' id='pjStatus' placeholder='프로젝트명을 입력해 주세요.' className='w-[200px]' />
				</div>
			</div> */}
			<ProjectsDataTable columns={columns} data={projects} />
			<QestPagination currentPage={page} totalPages={totalPage} onChangePage={(newPage) => setPage(newPage)} />
		</div>
	);
}
