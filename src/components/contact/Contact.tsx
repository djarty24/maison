import { useState } from 'react';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = (e: { target: { name: any; value: any; }; }) => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const handleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		// You can handle form submission logic here
		console.log(formData);
		// Reset form after submission if needed
		setFormData({
			name: '',
			email: '',
			message: ''
		});
	};

	return (
		<div>
			<div className='p-16 pb-0 flex flex-col items-center'>
				<h1 className='text-center text-3xl sm:w-2/3 md:w-1/2 lg:w-5/12 lg:text-4xl'>Get in Touch</h1>
				<p className='text-center sm:w-2/3 md:w-1/2 lg:w-5/12'>Have questions? Feel free to ask!<br />We'll get back to you in 3-4 business days.</p>
			</div>
			<div className='w-full flex flex-col items-center pt-5 pb-16'>
				<form onSubmit={handleSubmit} className="flex flex-col items-center sm:w-2/3 md:w-1/2 lg:w-1/4">
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Your Name"
						className="w-full italic border-[3px] border-[#39996B] rounded-lg p-2 my-2"
						required
					/>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Your Email"
						className="w-full italic border-[3px] border-[#39996B] rounded-lg p-2 my-2"
						required
					/>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						placeholder="Your Message"
						className="w-full italic border-[3px] border-[#39996B] rounded-lg p-2 my-2 h-32"
						required
					></textarea>
					<div className="button button-inverse" onClick={() => alert("Your form has been submitted!")}>Submit</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
