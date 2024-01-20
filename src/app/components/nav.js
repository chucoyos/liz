import Link from 'next/link'
const Nav = ({ toggleDrawer }) => {
	return (
		<nav className='fixed top-0 left-0 w-full drop-shadow-lg z-30'>
			<div className='flex justify-between items-center p-2 bg-slate-300'>
				<p className='font-bold text-lg italic'>Liz Glez</p>
				<button
					className=''
					onClick={toggleDrawer}
				>
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
