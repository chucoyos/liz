import Image from 'next/image'
const Paint = () => {
	return (
		<div className='mt-10'>
			<Image
				src='/belleza-efimera.jpg'
				alt='Belleza Efimera'
				width={250}
				height={250}
				className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 drop-shadow-2xl'
			/>
			<div className='pt-4'>
				<p>Lizette Glez.</p>
				<p className='text-sm mt-2 text-slate-600'>&apos;ROSTRO MUJER&apos;</p>
				<p className='text-sm text-slate-500'>oleo en lienzo | 75x95 cm</p>
				<p className='text-lg font-bold'>17,869.00 MXN</p>
			</div>
		</div>
	)
}

export default Paint
