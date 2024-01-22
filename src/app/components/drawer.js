'use client'
const Drawer = ({ drawer, hidden }) => {
	return (
		<div
			id='drawer-nav'
			className={`fixed top-0 left-0 overflow-hidden bg-slate-950 text-slate-200 h-screen ${drawer} z-20 transition-all duration-500 ease-in-out bg-slate-300 opacity-90`}
		>
			<div className='relative top-0'>
				<ul
					className={`${hidden} h-screen flex flex-col justify-center gap-2 items-center`}
				>
					<li className='text-xl'>Drawer text</li>
					<li className='text-xl'>Drawer text</li>
					<li className='text-xl'>Drawer text</li>
				</ul>
			</div>
		</div>
	)
}

export default Drawer
