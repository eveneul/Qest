'use client'

import {useEffect, useState} from 'react'
import {Button} from './ui/button'
import {Search as SearchIcon} from 'lucide-react'
import {Input} from './ui/input'
import {CommandDialog, CommandInput} from './ui/command'
import {DialogTitle} from './ui/dialog'

export default function Search() {
	const [query, setQuery] = useState('')
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const keyDown = (e) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}

		document.addEventListener('keydown', keyDown)

		return () => document.removeEventListener('keydown', down)
	}, [])

	useEffect(() => {
		console.log(open)
	}, [open])

	return (
		<>
			<div className='relative'>
				<Button className='flex items-center gap-4' onClick={() => setOpen(true)}>
					<span>프로젝트를 검색해 주세요!</span>
					<kbd className='pointer-events-none  inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 py-0.5  text-[10px] font-medium text-muted-foreground opacity-100'>
						<span className='text-sm'>⌘</span>
						<span className='font-basic translate-y-[-1px]'>K</span>
					</kbd>
				</Button>
			</div>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<DialogTitle className='hidden'>프로젝트 검색하기</DialogTitle>
				<CommandInput placeholder='프로젝트명을 입력해 주세요.' />
			</CommandDialog>
		</>
	)
}
