'use client'
import Nav from './components/nav'
import Paint from './components/paint'
import Drawer from './components/drawer'
import { useState } from 'react'

export default function Home() {
	const [drawer, setDrawer] = useState('w-full')
	const toggleDrawer = () => {
		if (drawer === 'w-full') {
			setDrawer('w-0')
		} else {
			setDrawer('w-full')
		}
	}
	return (
		<main className='flex min-h-screen flex-col'>
			<Nav toggleDrawer={toggleDrawer} />
			<Drawer drawer={drawer} />
			<div className='grid text-center lg:w-full pt-4 mt-16'>
				<h1 className='text-xl font-medium text-center'>
					OBRAS DE ARTE ORIGINALES
				</h1>
			</div>
			<div className='flex flex-col items-center'>
				<Paint />
				<Paint />
				<Paint />
			</div>
		</main>
	)
}
