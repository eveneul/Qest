'use client';

import { supabaseClient } from '@/lib/supabase';
import { useState, useEffect } from 'react';

export default function ProjectsSetting() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchProjectList = async () => {
			const { data, error } = await supabaseClient.from('projects').select('*');
			if (error) {
				console.log('error');
			} else {
				console.log(data);
			}
		};

		fetchProjectList();
	}, []);

	return <h1>ProjectSetting</h1>;
}
