import Image from 'next/image'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<div className='mb-8 grid text-center lg:w-full pt-4'>
				<h1 class='text-xl font-bold text-center'>Liz Gallery</h1>
			</div>
			<div class='flex flex-col items-center'>
				<div>
					<Image
						src='/belleza-efimera.jpg'
						alt='Belleza Efimera'
						width={250}
						height={250}
					/>
				</div>
			</div>
		</main>
	)
}
