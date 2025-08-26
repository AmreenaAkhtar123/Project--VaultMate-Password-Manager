import React from 'react'

const Navbar = () => {
	return (
		<>
			<header className="text-white body-font bg-purple-950">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
						<div className='text-white font-bold text-xl'>
							<span className='text-[#ffac4c]'> &lt;</span>
							Vault
							<span className='text-[#ffac4c]'>Mate/&gt;</span>
						</div>
					</a>
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<a className="mr-5 hover:text-amber-500">Home</a>
						<a className="mr-5 hover:text-amber-500">About</a>
						<a className="mr-5 hover:text-amber-500">Contact</a>
					</nav>
					{/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
						<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</button> */}
				</div>
			</header>
		</>
	)
}

export default Navbar
