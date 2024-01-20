'use client'
import Nav from './components/nav'
import Paint from './components/paint'
import Drawer from './components/drawer'
import { useState } from 'react'

export default function Home() {
	const images = [
		'17',
		'16',
		'15',
		'14',
		'13',
		'12',
		'11',
		'10',
		'9',
		'8',
		'7',
		'6',
		'5',
		'4',
		'3',
		'2',
		'1',
	]
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
				{images.map((image, index) => (
					<Paint
						image={image}
						key={index}
					/>
				))}
			</div>
		</main>
	)
}
