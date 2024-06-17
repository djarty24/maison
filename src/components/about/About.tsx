import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div>
			<div className="w-full h-[88vh] relative">
				<img className="w-full h-full object-cover absolute" src="about-header.png" alt="" />
				<div className="absolute z-2 w-full h-[88vh] flex flex-col items-center justify-center">
					<h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white">This is Maison.</h1>
					<h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white opacity-80">This is Maison.</h1>
					<h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white opacity-55">This is Maison.</h1>
				</div>
			</div>
			<div>

			</div>
			<div className='bg-[#2F261B] p-8 flex flex-col md:flex-row md:justify-between items-center gap-5'>
				<h2 className='text-center md:text-left text-white text-xl md:text-3xl lg:text-5xl m-0'>Join us in ensuring <span className="italic">everyone</span> has a home.</h2>
				<div style={{ fontFamily: 'Raleway' }} className="m-0 w-fit h-fit hover:font-semibold hover:border-white hover:bg-[#2F261B] hover:text-white text-xl bg-white font-medium border-2 border-solid border-[#2F261B] text-[#2F261B] rounded-lg py-1 px-4 transition-colors duration-500 text-center"><Link to="/register">Register</Link></div>
			</div>
		</div>
	)
}

export default About