'use client';

import { supabaseClient } from '@/lib/supabase';
import { useForm } from 'react-hook-form';

export default function CreateProject() {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = async (data) => {
		const { name, description, status, startDate } = data;
		const { error } = await supabaseClient.from('projects').insert([{ name, description, status, created_at: startDate }]);

		if (error) {
			console.log(error, 'error');
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex items-center'>
					<label htmlFor='name'>프로젝트명</label>
					<input type='text' {...register('name')} />
				</div>
				<div className='flex items-center'>
					<label htmlFor='description'>프로젝트명</label>
					<input type='text' {...register('description')} />
				</div>
				<div className='flex items-center'>
					<label>프로젝트 상태</label>
					<select name='' id='' {...register('status')}>
						<option value='1'>진행 중</option>
						<option value='2'>종료</option>
						<option value='0'>중단</option>
					</select>
				</div>
				<div className='flex items-center'>
					<label>프로젝트 시작일</label>
					<input type='date' {...register('startDate')} />
				</div>
				<button type='submit'>생성</button>
			</form>
		</div>
	);
}
