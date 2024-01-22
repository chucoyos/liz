'use client'
import Nav from './components/nav'
import Paint from './components/paint'
import Drawer from './components/drawer'
import { useState } from 'react'

export default function Home() {
	const [drawer, setDrawer] = useState('w-0')
	const [hidden, setHidden] = useState('hidden')
	const toggleDrawer = () => {
		if (drawer == 'w-0') {
			setHidden('block')
			setDrawer('w-full')
		} else {
			setHidden('hidden')
			setDrawer('w-0')
		}
	}
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

	return (
		<main className='flex min-h-screen flex-col'>
			<Nav toggleDrawer={toggleDrawer} />
			<Drawer
				drawer={drawer}
				hidden={hidden}
			/>
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
