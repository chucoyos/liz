'use client'
const Drawer = ({ drawer }) => {
	return (
		<div
			className={`fixed top-0 left-0 bg-slate-950 text-slate-200 h-screen z-20 ${drawer} transition-all duration-300 ease-in-out bg-slate-300 opacity-90`}
		>
			<div className='flex justify-between items-center p-2 overflow-hidden'>
				<ul className={`flex flex-col p-32 mt-32`}>
					<li>Drawer text</li>
					<li>Drawer text</li>
					<li>Drawer text</li>
				</ul>
			</div>
		</div>
	)
}

export default Drawer
