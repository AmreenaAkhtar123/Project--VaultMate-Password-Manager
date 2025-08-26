import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
	const ref = useRef();
	const passwordRef = useRef();
	const [form, setForm] = useState({
		site: '',
		username: '',
		password: ''
	});
	const [passwordArray, setpasswordArray] = useState([]);

	useEffect(() => {
		let passwords = localStorage.getItem("passwords")
		if (passwords) {
			setpasswordArray(JSON.parse(passwords))
		}
	}, [])




	const showPassword = () => {

		if (ref.current.src.includes("public/icons/eyecross.png")) {
			alert("Show the password");
			ref.current.src = "public/icons/eye.png"
			passwordRef.current.type = "text"
		}
		else {
			alert("Hide the password");
			ref.current.src = "public/icons/eyecross.png"
			passwordRef.current.type = "password"
		}
	}

	// const savePassword = () => {
	// 	setpasswordArray([...passwordArray, {...form, id: uuidv4()}]);
	// 	localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]));
	// 	console.log(passwordArray)
	// }
	const savePassword = () => {
		if (form.id) {
			// update existing password
			const updatedPasswords = passwordArray.map(item =>
				item.id === form.id ? form : item
			);
			setpasswordArray(updatedPasswords);
			localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
		} else {
			// add new password
			const newPassword = { ...form, id: uuidv4() };
			const newPasswords = [...passwordArray, newPassword];
			setpasswordArray(newPasswords);
			localStorage.setItem("passwords", JSON.stringify(newPasswords));
		}
		

		// reset form after save
		setForm({ site: "", username: "", password: "" });
		toast('Password Saved', {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
		
	};


	const deletePassword = (id) => {
		const confirmed = window.confirm("Are you sure you want to delete this password?");
		if (confirmed) {
			const updatedPasswords = passwordArray.filter(password => password.id !== id);
			setpasswordArray(updatedPasswords);
			localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
		}
		toast('Deleted Password', {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};



	const editPassword = (id) => {
		console.log("Editing password with id", id);
		const passwordToEdit = passwordArray.find(item => item.id === id);
		setForm(passwordToEdit);   // just load into form
	};


	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	const copyText = (text) => {
		navigator.clipboard.writeText(text);
		toast('Copied to clipboard', {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}
	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={2000}   // 2 seconds
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition={Bounce}
			/>

			<div className='background'>
				<div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
			</div>

			<div className="container mx-auto max-w-4xl  pt-20 ">
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
							<input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='border border-[#3c0265] w-full rounded-full p-2 pl-5 py-1 ' type="password" name="password" id="password" />
							<span className='absolute right-[3px] top-[3px] cursor-pointer' onClick={showPassword}>
								<img ref={ref} className='p-1' width={22} src="public/icons/eyecross.png" alt="eye" />
							</span>
						</div>

					</div>

					<button onClick={savePassword} className='flex justify-center items-center bg-[#3c0265] hover:bg-[#4a067a] rounded-full px-10 py-2 text-white w-fit gap-4'>

						Save
						<lord-icon
							src="https://cdn.lordicon.com/jgnvfzqg.json"
							trigger="hover"
							colors="primary:#ffffff,secondary:#ffffff"
							style={{ width: '25px', height: '25px' }}></lord-icon>
					</button>

				</div>

				<div>
					<p className='text-2xl font-bold mt-5 mb-2'>Your Passwords</p>
					{passwordArray.length === 0 && <div>No passwords saved yet</div>}
					{passwordArray.length > 0 &&
						<table className="table-auto w-full rounded-md overflow-hidden ">
							<thead className='bg-[#3c0265] text-white'>
								<tr>
									<th className='py-2 text-[12px]'>Site</th>
									<th className='py-2 text-[12px]'>Username</th>
									<th className='py-2 text-[12px]'>Password</th>
									<th className='py-2 text-[12px]'>Actions</th>
								</tr>
							</thead>
							<tbody className='bg-[#e3d4ed]'>
								{passwordArray.map((item) => {
									return (
										<tr key={item.id}>
											<td className='text-center w-40 py-2 border-1 border-white'>
												<div className='flex items-center justify-center '>
													<a href={item.site} target='_blank'>{item.site}</a>
													<div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
														<lord-icon
															style={{ "width": "23px", "height": "23px", "paddingTop": "3px", "paddingLeft": "3px" }}
															src="https://cdn.lordicon.com/iykgtsbt.json"
															trigger="hover" >
														</lord-icon>
													</div>
												</div>

											</td>
											<td className='text-center w-40 py-2 border-1 border-white'>
												<div className='flex items-center justify-center '>
													<span>{item.username}</span>
													<div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
														<lord-icon
															style={{ "width": "23px", "height": "23px", "paddingTop": "3px", "paddingLeft": "3px" }}
															src="https://cdn.lordicon.com/iykgtsbt.json"
															trigger="hover" >
														</lord-icon>
													</div>
												</div>

											</td>
											<td className='text-center w-40 py-2 border-1 border-white'>
												<div className='flex items-center justify-center '>
													<span>{item.password}</span>
													<div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
														<lord-icon
															style={{ "width": "23px", "height": "23px", "paddingTop": "3px", "paddingLeft": "3px" }}
															src="https://cdn.lordicon.com/iykgtsbt.json"
															trigger="hover" >
														</lord-icon>
													</div>
												</div>
											</td>

											<td className='text-center w-40 py-2 border-1 border-white'>
												<div className='flex items-center justify-center '>
													<span onClick={() => editPassword(item.id)}>
														<lord-icon
															src="https://cdn.lordicon.com/gwlusjdu.json"
															trigger="hover"
															style={{ "width": "18px", "height": "18px" }}>
														</lord-icon>
													</span>
													<span onClick={() => deletePassword(item.id)}>
														<lord-icon
															src="https://cdn.lordicon.com/skkahier.json"
															trigger="hover"
															style={{ "width": "18px", "height": "18px" }}>
														</lord-icon></span>

												</div>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					}

				</div>
			</div>
		</>
	)
}

export default Manager
