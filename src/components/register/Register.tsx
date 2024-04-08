import { useState } from 'react';

function RegistrationForm() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		cardNumber: '',
		expirationDate: '',
		cvc: ''
	});

	const handleChange = (event: { target: { name: any; value: any; }; }) => {
		const { name, value } = event.target;
		setFormData(prevData => ({
			...prevData,
			[name]: value
		}));
	};

	const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		// Handle form submission logic here
		alert("Your form has been submitted!");
	};

	return (
		<div>
			<div className='p-16 pb-0 flex flex-col items-center'>
				<h1 className='text-center text-3xl sm:w-2/3 md:w-1/2 lg:w-5/12 lg:text-4xl'>Register</h1>
				<p className='text-center sm:w-2/3 md:w-1/2 lg:w-5/12'>Thank you so much for supporting our cause! For a detailed breakdown of how your money is used, please check our <span className='underline text-[#39996B]'>monetary policies</span> page.<br /><br />After filling out the registration form, all attendees will receive an email regarding information about the event.</p>
			</div>

			<div className='p-16 pb-0 flex flex-col items-center'>
				<h2 className='text-center text-2xl sm:w-2/3 md:w-1/2 lg:w-5/12 lg:text-3xl'>Registration Form</h2>
				<p className='text-center sm:w-2/3 md:w-1/2 lg:w-5/12'>Thank you so much for supporting our cause! We promise— this is the last step! Please fill out this registration form so we can contact you prior to the event as well as process your transaction.</p>
			</div>

			<div className='w-full flex flex-col items-center pt-5 pb-16'>
				<form onSubmit={handleSubmit} className="flex flex-col items-center w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/4">
					<div className="flex">
						<input
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							placeholder="First Name"
							className="w-1/2 italic border-[3px] border-[#39996B] rounded-xl p-2 my-2 mr-2"
							required
						/>
						<input
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							placeholder="Last Name"
							className="w-1/2 italic border-[3px] border-[#39996B] rounded-xl p-2 my-2 ml-2"
							required
						/>
					</div>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Your Email"
						className="w-full italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
						required
					/>
					<input
						type="tel"
						name="phoneNumber"
						value={formData.phoneNumber}
						onChange={handleChange}
						placeholder="Phone Number"
						className="w-full italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
						required
					/>
					<input
						type="text"
						name="cardNumber"
						value={formData.cardNumber}
						onChange={handleChange}
						placeholder="Card Number"
						className="w-full italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
						required
					/>
					<div className="flex">
						<input
							type="text"
							name="expirationDate"
							value={formData.expirationDate}
							onChange={handleChange}
							placeholder="MM/YY"
							className="w-1/2 italic border-[3px] border-[#39996B] rounded-xl p-2 my-2 mr-2"
							required
						/>
						<input
							type="text"
							name="cvc"
							value={formData.cvc}
							onChange={handleChange}
							placeholder="CVC"
							className="w-1/2 italic border-[3px] border-[#39996B] rounded-xl p-2 my-2 ml-2"
							required
						/>
					</div>
					<div className="button button-inverse" onClick={() => alert("Your form has been submitted!")}>Submit</div>
				</form>
			</div>

		</div>
	);
}

export default RegistrationForm;
