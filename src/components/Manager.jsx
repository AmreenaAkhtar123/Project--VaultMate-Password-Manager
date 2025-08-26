import React from 'react'
import { useRef, useState, useEffect } from 'react';

const Manager = () => {
	const ref = useRef();
	const [form, setForm] = useState({
		site: '',
		username: '',
		password: ''
	});
	const [passwordArray, setpasswordArray] = useState([]);

	useEffect(() => {
	  let passwords = localStorage.getItem("passwords")
	  if(passwords) {
		setpasswordArray(JSON.parse(passwords))
	  }
	}, [])

	
	

	const showPassword = ()=>{
		if (ref.current.src.includes("public/icons/eyecross.png")){
			alert("Show the password");
			ref.current.src = "public/icons/eye.png"
		}
		else{
			alert("Hide the password");
			ref.current.src = "public/icons/eyecross.png"
		}
	}

	const savePassword = ()=>{
		setpasswordArray([...passwordArray, form]);
		localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
		console.log(passwordArray)
	}

	const handleChange = (e)=>{
		setForm({...form, [e.target.name]: e.target.value});
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
					<input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='border border-[#3c0265] w-full rounded-full p-2 pl-5 py-1 ' type="text" name="site" id="site" />
					<div className="flex w-full justify-between gap-4">
						<input value={form.username} onChange={handleChange} placeholder='Enter Username' className='border border-[#3c0265] w-full rounded-full p-2 pl-5 py-1 ' type="text" name="username" id="username" />

						<div className='relative '>
							<input value={form.password} onChange={handleChange} placeholder='Enter Password' className='border border-[#3c0265] w-full rounded-full p-2 pl-5 py-1 ' type="text" name="password" id="password" />
							<span className='absolute right-[3px] top-[3px] cursor-pointer' onClick={showPassword}>
								<img ref={ref} className='p-1' width={22} src="public/icons/eye.png" alt="eye" />
							</span>
						</div>
						
					</div>

					<button onClick={savePassword} className='flex justify-center items-center bg-[#3c0265] hover:bg-[#4a067a] rounded-full px-10 py-2 text-white w-fit gap-4'>
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
