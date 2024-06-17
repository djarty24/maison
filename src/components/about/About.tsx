import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className='mt-20 md:mt-24'>
			<div className="w-full h-[88vh] relative">
				<img className="w-full h-full object-cover absolute" src="about-header.png" alt="" />
				<div className="absolute z-2 w-full h-[88vh] flex flex-col items-center justify-center">
					<h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white">This is Maison.</h1>
					<h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white opacity-80">This is Maison.</h1>
					<h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white opacity-55">This is Maison.</h1>
				</div>
			</div>
			<div className='flex flex-col p-8 md:flex-row md:justify-evenly md:gap-4 lg:gap-8 lg:p-16 md:items-stretch'>
				<h2 className='border-b-2 md:border-b-0 md:border-r-2 border-black md:w-1/3 md:h-auto flex items-center'>Our Vision</h2>
				<div className='md:w-1/3'>
					<h2 className='text-[#39996B]'>For the People</h2>
					<p>Everyone deserves a safe and secure place to call home, where they can thrive and reach their fullest potential. Our mission is to make a meaningful impact in the lives of our community.</p>
				</div>
				<div className='md:w-1/3'>
					<h2 className='text-[#39996B]'>For the Planet</h2>
					<p>Our mission is to provide energy-efficient mobile homes, reducing waste and benefiting both society and the environment by reducing the amount of people struggling to find homes.</p>
				</div>
			</div>
			<div className='bg-[#2F261B] p-8 flex flex-col md:flex-row md:justify-between items-center gap-5'>
				<h2 className='text-center md:text-left text-white text-xl md:text-3xl lg:text-5xl m-0'>Join us in ensuring <span className="italic">everyone</span> has a home.</h2>
				<div style={{ fontFamily: 'Raleway' }} className="m-0 w-fit h-fit hover:font-semibold hover:border-white hover:bg-[#2F261B] hover:text-white text-xl bg-white font-medium border-2 border-solid border-[#2F261B] text-[#2F261B] rounded-lg py-1 px-4 transition-colors duration-500 text-center"><Link to="/register">Register</Link></div>
			</div>
		</div>
	)
}

export default About