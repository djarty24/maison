import { SetStateAction, useState } from 'react';

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
	const [selectedPass, setSelectedPass] = useState(null);

	const handleChange = (event: { target: { name: any; value: any; }; }) => {
		const { name, value } = event.target;
		setFormData(prevData => ({
			...prevData,
			[name]: value
		}));
	};

	const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		alert("Your form has been submitted!");
	};

	const selectPass = (pass: string | SetStateAction<null>) => {
		setSelectedPass(pass);
	};

	return (
		<div>
			<div className='p-16 pb-0 flex flex-col items-center'>
				<h1 className='text-center text-3xl sm:w-2/3 md:w-1/2 lg:w-5/12 lg:text-4xl'>Register for Our Spring Gala</h1>
				<p className='text-center sm:w-2/3 md:w-[55%]'>Thank you so much for supporting our cause! For a detailed breakdown of how your money is used, please check our <span className='underline text-[#39996B]'>monetary policies</span> page.<br /><br />After filling out the registration form, all attendees will receive an email regarding information about the event.</p>
			</div>

			<div className='m-auto bg-white shadow-xl w-4/5 sm:w-2/3 my-8 p-6 border border-gray-100 rounded-xl flex flex-col lg:flex-row justify-evenly gap-5'>
				<div className='text-center lg:text-left border-2 border-transparent border-b-gray-100 lg:border-b-transparent lg:border-r-gray-100 w-full lg:w-1/3'>
					<p className='font-semibold text-black'>DESCRIPTION</p>
					<p>Enjoy a detailed tour of our work along with food and refreshments.</p>
				</div>
				<div className='text-center lg:text-left border-2 border-transparent border-b-gray-100 lg:border-b-transparent lg:border-r-gray-100 w-full lg:w-1/3'>
					<p className='font-semibold text-black'>LOCATION</p>
					<p>The Ritz-Carlton at Half-Moon Bay.</p>
				</div>
				<div className='text-center lg:text-left w-full lg:w-1/3'>
					<p className='font-semibold text-black'>DATE & TIME</p>
					<p>April 12 2024 | 6:00 - 10:00 PM EST</p>
				</div>
			</div>

			<div className='my-12 w-4/5 sm:w-2/3 m-auto'>
	            <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
	                <div className={`box-shadow px-8 py-8 md:py-5 border border-transparent rounded-xl flex flex-col gap-3 items-center ${selectedPass === 'gold' ? 'bg-green-200' : ''}`} onClick={() => selectPass('gold')}>
	                    <div>
	                        <div style={{ fontFamily: 'Raleway, sans-serif' }} className='text-[#D7BA80] flex flex-row items-center gap-2 font-medium'><img className='size-8' src="/radial-gradients/gold-gradient.svg" alt="" />Gold Guest Pass</div>
	                        <br />
	                        <h1>$49.99</h1>
	                        <div>
	                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Named as gold patron</div>
	                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Complimentary refreshments</div>
	                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Complimentary food</div>
	                        </div>
	                        <p className='italic text-sm pt-2'>.</p>
	                    </div>
	                    <div className="m-auto button">Select</div>
	                </div>
	                <div className={`box-shadow px-8 py-8 md:py-5 border border-transparent rounded-xl flex flex-col gap-3 items-center ${selectedPass === 'platinum' ? 'bg-green-200' : ''}`} onClick={() => selectPass('platinum')}>
	                    <div>
	                        <div style={{ fontFamily: 'Raleway, sans-serif' }} className='text-[#929493] flex flex-row items-center gap-2 font-medium'><img className='size-8' src="/radial-gradients/platinum-gradient.svg" alt="" />Platinum Guest Pass</div>
	                        <br />
	                        <h1>$99.99</h1>
	                        <div>
	                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Named as platinum patron</div>
	                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Early gala entrance</div>
	                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Access to platinum lounge</div>
	                        </div>
	                        <p className='italic text-sm pt-2'>* All benefits from gold pass included.</p>
	                    </div>
	                    <div className="m-auto button">Select</div>
	                </div>
	                <div className={`box-shadow px-8 py-8 md:py-5 border border-transparent rounded-xl flex flex-col gap-3 items-center ${selectedPass === 'diamond' ? 'bg-green-200' : ''}`} onClick={() => selectPass('diamond')}>
	                    <div>
	                        <div style={{ fontFamily: 'Raleway, sans-serif' }} className='text-[#39996B] flex flex-row items-center gap-2 font-medium'><img className='size-8' src="/radial-gradients/diamond-gradient.svg" alt="" />Diamond Guest Pass</div>
	                        <br />
	                        <h1>$139.99</h1>
	                        <div>
	                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Named as diamond patron</div>
	                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />One-on-one meetings</div>
	                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Access to diamond lounge</div>
	                        </div>
	                        <p className='italic text-sm pt-2'>* All benefits from platinum pass included.</p>
	                    </div>
	                    <div className="m-auto button">Select</div>
	                </div>
	            </div>
	        </div>

			<div className='p-16 pb-0 flex flex-col items-center'>
				<h2 className='text-center text-2xl sm:w-2/3 md:w-1/2 lg:w-5/12 lg:text-3xl'>Registration Form</h2>
				<p className='text-center sm:w-2/3 md:w-1/2 lg:w-[40%]'>Thank you so much for supporting our cause! We promise— this is the last step! Please fill out this registration form so we can contact you prior to the event as well as process your transaction.</p>
			</div>

			<div className='flex flex-col items-center pt-5 pb-16 m-auto w-4/5 sm:w-2/3 md:w-1/2 lg:w-[35%]'>
				<form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
					<div className="flex flex-row justify-evenly w-full">
						<input
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							placeholder="First Name"
							className="w-full italic border-[3px] border-[#39996B] rounded-xl p-2 my-2 mr-2"
							required
						/>
						<input
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							placeholder="Last Name"
							className="w-full italic border-[3px] border-[#39996B] rounded-xl p-2 my-2 ml-2"
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
					<div className="flex flex-row justify-evenly w-full">
						<input
							type="text"
							name="expirationDate"
							value={formData.expirationDate}
							onChange={handleChange}
							placeholder="MM/YY"
							className="w-full italic border-[3px] border-[#39996B] rounded-xl p-2 my-2 mr-2"
							required
						/>
						<input
							type="text"
							name="cvc"
							value={formData.cvc}
							onChange={handleChange}
							placeholder="CVC"
							className="w-full italic border-[3px] border-[#39996B] rounded-xl p-2 my-2 ml-2"
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
