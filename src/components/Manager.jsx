import React, { use } from 'react'
import { useRef } from 'react';

const Manager = () => {
	const ref = useRef();
	const showPassword = ()=>{
		alert("Show the password");
		if (ref.current.src.includes("public/icons/eyecross.png")){
			ref.current.src = "public/icons/eye.png"
		}
		else{
			ref.current.src = "public/icons/eyecross.png"
		}
		

	}

	return (
		<>
			<div className='background'>
				<div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
			</div>

			<div className="container mx-auto max-w-4xl  pt-20">
				<div className='text-black font-extrabold text-4xl text-center'>
					<span className='text-[#ffac4c]'> &lt;</span>
					Vault
					<span className='text-[#ffac4c]'>Mate/&gt;</span>
				</div>
				<div className='text-[#3c0265] font-bold text-l text-center'>
					<p>Your own secure vault for managing passwords</p>
				</div>

				<div className='text-black flex flex-col gap-6 p-4 items-center'>
					<input placeholder='Enter website URL' className='border border-[#3c0265] w-full rounded-full p-2 pl-5 py-1 ' type="text" name="" id="" />
					<div className="flex w-full justify-between gap-4">
						<input placeholder='Enter Username' className='border border-[#3c0265] w-full rounded-full p-2 pl-5 py-1 ' type="text" name="" id="" />

						<div className='relative '>
							<input placeholder='Enter Password' className='border border-[#3c0265] w-full rounded-full p-2 pl-5 py-1 ' type="text" name="" id="" />
							<span className='absolute right-[3px] top-[3px] cursor-pointer' onClick={showPassword}>
								<img ref={ref} className='p-1' width={22} src="public/icons/eye.png" alt="eye" />
							</span>
						</div>
						
					</div>

					<button className='flex justify-center items-center bg-[#3c0265] hover:bg-[#4a067a] rounded-full px-10 py-2 text-white w-fit gap-4'>
						<lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"
							colors="primary:#ffffff,secondary:#ffffff"
							style={{width: '25px', height: '25px'}}></lord-icon>
						Add Password
					</button>

				</div>
			</div>
		</>
	)
}

export default Manager
