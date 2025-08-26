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
					<button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-purple-200 rounded-full text-base mt-4 md:mt-0 text-black ring-black ring-1">
						<span className='font-bold'>GitHub</span>
						<img className='w-6 h-6 ml-1' src="public/icons/github.svg" alt="GitHub" />
					</button>
				</div>
			</header>
		</>
	)
}

export default Navbar
