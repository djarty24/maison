import { SetStateAction, useState } from 'react';
import './Donate.css';

function DonationForm() {
	const [formData, setFormData] = useState({
		donationType: '',
		legalFirstName: '',
		legalLastName: '',
		email: '',
		phoneNumber: '',
		streetAddressLine1: '',
		streetAddressLine2: '',
		city: '',
		country: '',
		postalCode: '',
		cardNumber: '',
		expirationDate: '',
		cvc: ''
	});
	const [selectedAmount, setSelectedAmount] = useState(null);

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

	const handleAmountClick = (amount: string | SetStateAction<null>) => {
		setSelectedAmount(amount);
		setFormData(prevData => ({
			...prevData,
			donationType: amount
		}));
	};

	return (
		<div>
			<div className='p-16 pb-0 flex flex-col items-center'>
				<h1 className='text-center text-3xl sm:w-2/3 md:w-1/2 lg:w-5/12 lg:text-4xl'>Donate Today</h1>
				<p className='text-center sm:w-2/3 md:w-[55%]'>Thank you so much for supporting our cause! For a detailed breakdown of how your money is used, please check our <span className='underline text-[#39996B]'>monetary policies</span> page.</p>
			</div>

			<div className='w-full flex flex-col items-center pt-5 pb-16'>
                <h4 className='text-left w-4/5 sm:w-2/3 md:w-1/2 mb-5 font-semibold'>Donation Amount</h4>
                <div className='flex flex-col md:flex-row md:justify-between w-4/5 sm:w-2/3 md:w-1/2 mb-5'>
                    {['500', '250', '100', '50'].map(amount => (
						<div
							key={amount}
							className={`button-donate w-full lg:w-1/5 text-center ${selectedAmount === amount ? 'selected' : ''}`}
							onClick={() => handleAmountClick(amount)}
						>
							${amount}
						</div>
					))}
					<div className={`button-donate w-full lg:w-1/5 text-center ${selectedAmount && !['500', '250', '100', '50'].includes(selectedAmount) ? 'selected' : ''}`}>
						$
						<input
							className='outline-none bg-inherit w-3/4 text-base'
							placeholder=' Custom'
							type="text"
							value={selectedAmount && !['500', '250', '100', '50'].includes(selectedAmount) ? selectedAmount : ''}
							onChange={(e) => handleAmountClick(e.target.value)}
						/>
					</div>
                </div>

				<form onSubmit={handleSubmit} className="flex flex-col items-center w-4/5 sm:w-2/3 md:w-1/2">
					{/* Legal Name */}
					<h4 className='w-full text-left font-semibold'>Legal Name</h4>
					<div className="flex flex-col w-full md:flex-row md:gap-5">
						<input
							type="text"
							name="legalFirstName"
							value={formData.legalFirstName}
							onChange={handleChange}
							placeholder="First Name"
							className="md:w-1/2 italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
							required
						/>
						<input
							type="text"
							name="legalLastName"
							value={formData.legalLastName}
							onChange={handleChange}
							placeholder="Last Name"
							className="md:w-1/2 italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
							required
						/>
					</div>

					{/* Email and Phone Number */}
					<h4 className='w-full text-left font-semibold pt-5'>Email and Phone Number</h4>
					<div className="flex flex-col w-full md:flex-row md:gap-5">
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Email"
							className="md:w-1/2 italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
							required
						/>
						<input
							type="tel"
							name="phoneNumber"
							value={formData.phoneNumber}
							onChange={handleChange}
							placeholder="Phone Number"
							className="md:w-1/2 italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
							required
						/>
					</div>

					{/* Billing Address */}
					<h4 className='w-full text-left font-semibold pt-5'>Billing Address</h4>
					<input
						type="text"
						name="streetAddressLine1"
						value={formData.streetAddressLine1}
						onChange={handleChange}
						placeholder="Street Address Line 1"
						className="w-full italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
						required
					/>
					<input
						type="text"
						name="streetAddressLine2"
						value={formData.streetAddressLine2}
						onChange={handleChange}
						placeholder="Street Address Line 2"
						className="w-full italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
					/>
					<div className="flex flex-col w-full md:flex-row md:gap-5">
						<input
							type="text"
							name="city"
							value={formData.city}
							onChange={handleChange}
							placeholder="City"
							className="md:w-1/2  italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
							required
						/>
						<input
							type="text"
							name="country"
							value={formData.country}
							onChange={handleChange}
							placeholder="Country"
							className="md:w-1/2 italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
							required
						/>
					</div>
					<input
						type="text"
						name="postalCode"
						value={formData.postalCode}
						onChange={handleChange}
						placeholder="Postal Code"
						className="w-full italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
						required
					/>

					{/* Credit Card Info */}
					<h4 className='w-full text-left font-semibold pt-5'>Credit Card</h4>
					<input
						type="text"
						name="cardNumber"
						value={formData.cardNumber}
						onChange={handleChange}
						placeholder="Card Number"
						className="w-full italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
						required
					/>
					<div className="flex flex-col w-full md:flex-row md:gap-5 mb-7">
						<input
							type="text"
							name="expirationDate"
							value={formData.expirationDate}
							onChange={handleChange}
							placeholder="MM/YY"
							className="md:w-1/2 italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
							required
						/>
						<input
							type="text"
							name="cvc"
							value={formData.cvc}
							onChange={handleChange}
							placeholder="CVC"
							className="md:w-1/2 italic border-[3px] border-[#39996B] rounded-xl p-2 my-2"
							required
						/>
					</div>

					{/* Submit Button */}
					<button className="button button-inverse">Submit</button>
				</form>
			</div>
		</div>
	);
}

export default DonationForm;