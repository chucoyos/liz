import Link from 'next/link'
const Nav = () => {
	return (
		<nav class='fixed top-0 w-full drop-shadow-lg z-10'>
			<div class='flex justify-between items-center p-2 bg-slate-300'>
				<p class='font-bold text-lg italic'>Art Mageour</p>
				<button className=''>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-8 h-8'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
						/>
					</svg>
				</button>
			</div>
		</nav>
	)
}

export default Nav
