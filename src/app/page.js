import Nav from './components/nav'
import Paint from './components/paint'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Nav />
			<div className='grid text-center lg:w-full pt-4'>
				<h1 class='text-xl font-medium text-center'>
					OBRAS DE ARTE ORIGINALES
				</h1>
			</div>
			<div class='flex flex-col items-center'>
				<Paint />
				<Paint />
				<Paint />
			</div>
		</main>
	)
}
