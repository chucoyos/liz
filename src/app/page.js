import Nav from './components/nav'
import Paint from './components/paint'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Nav />
			<div className='mb-8 grid text-center lg:w-full pt-4'>
				<h1 class='text-xl font-bold text-center'>Gallery</h1>
			</div>
			<div class='flex flex-col items-center'>
				<Paint />
				<Paint />
				<Paint />
			</div>
		</main>
	)
}
