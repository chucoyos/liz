'use client'
import Nav from './components/nav'
import Paint from './components/paint'
import Drawer from './components/drawer'
import { useState } from 'react'

export default function Home() {
	const [drawer, setDrawer] = useState('w-0')
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
				<Paint image='17' />
				<Paint image='16' />
				<Paint image='15' />
				<Paint image='14' />
				<Paint image='13' />
				<Paint image='12' />
				<Paint image='11' />
				<Paint image='10' />
				<Paint image='9' />
				<Paint image='8' />
				<Paint image='7' />
				<Paint image='6' />
				<Paint image='5' />
				<Paint image='4' />
				<Paint image='3' />
				<Paint image='2' />
				<Paint image='1' />
			</div>
		</main>
	)
}
