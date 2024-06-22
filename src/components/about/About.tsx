import { Link } from 'react-router-dom';
import { TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import './About.css'

const About = () => {
	return (
		<div className='mt-20 md:mt-24 relative'>
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
			<div className='p-8 flex flex-col lg:flex-row gap-16 md:justify-evenly lg:p-16 bg-[#FFF2DB] lg:m-auto'>
				<img src="about-mission.png" className='rounded-lg lg:w-1/2 aspect-video object-cover shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]' alt="" />
				<div className='lg:text-left text-center lg:w-1/2 lg:flex lg:flex-col lg:justify-evenly'>
					<h2>We build <span className='text-[#39996B]'>one home at a time.</span></h2>
					<p>From our products and services to our relationships with residents, partners, and the community, we uphold a standard of excellence that is unwavering. At Maison, our commitment runs deep, shaping every aspect of our work. We are steadfast in our dedication to our core principles, which serve as the foundation of our identity.</p>
					<h2>Questions? <span className='text-[#39996B]'>Contact Us!</span></h2>
				</div>
			</div>
			<div className='px-8 pt-8 md:p-16 md:pb-0 flex flex-row justify-between lg:-mb-32 xl:-mb-36'>
				<div className='text-center lg:text-left lg:w-1/2'>
					<h2 className='font-normal'>We’re here to get as many people <span className='text-[#39996B] font-semibold'>secure</span> as possible</h2>
					<p>At Maison, we're more than just a name. We're a team of passionate individuals committed to making a <span className='text-[#39996B] font-semibold'>difference</span>.<br /><br />Our mission is to provide shelter and protection for poverty-stricken individuals or families. We're dedicated to serving our community with our love, affection, and most importantly, <span className='text-[#39996B] font-semibold'>warmth</span>.</p>
				</div>
				<img className='hidden lg:w-1/2 lg:block' src="/mobile-home.png" alt="" />
			</div>
			<div className='relative'>
				<svg width="100%" height="100%" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="wave fill-[#39996B] transition duration-300 ease-in-out delay-150 p-0 m-0 z-0">
					<path d="M 0,600 L 0,150 C 88,139.7799043062201 176,129.5598086124402 268,148 C 360,166.4401913875598 456,213.54066985645932 553,221 C 650,228.45933014354068 747.9999999999999,196.2775119617225 841,167 C 934.0000000000001,137.7224880382775 1022,111.34928229665071 1121,109 C 1220,106.65071770334929 1330,128.32535885167465 1440,150 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="#7bdcb5" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
					<path d="M 0,600 L 0,350 C 95.49282296650716,332.3923444976076 190.98564593301433,314.7846889952153 290,328 C 389.0143540669857,341.2153110047847 491.5502392344499,385.25358851674645 590,399 C 688.4497607655501,412.74641148325355 782.8133971291865,396.20095693779905 865,394 C 947.1866028708135,391.79904306220095 1017.1961722488038,403.9425837320574 1111,399 C 1204.8038277511962,394.0574162679426 1322.401913875598,372.0287081339713 1440,350 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="#7bdcb5" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path>
				</svg>
				<div className='relative md:w-5/6 lg:w-4/5 m-auto -mt-16 md:-mt-32 lg:-mt-64 z-10'>
					<h1 className='text-white px-8 lg:p-8'>Meet the Team</h1>
					<div className='bg-white rounded-md mx-4 md:m-0 p-8 lg:p-16 flex flex-col md:flex-row gap-5 md:gap-8'>
						<div className='text-center md:text-left flex-1 flex flex-col min-h-full'>
							<img className='aspect-square rounded-lg mx-auto md:mx-0' src="revati.png" alt="" />
							<h3 className='pt-3 leading-relaxed'>Revati Tambe<br /><span className='text-[#39996B] text-base sm:text-lg md:text-xl font-semibold'>Co-Founder</span></h3>
							<h6 className='text-[#5E5E5E] flex-grow'>An engineer interested in applying her skills to solve socioeconomic problems. Committed to making a tangible impact by designing technical solutions that make a difference.</h6>
							<div className='flex flex-row justify-center md:justify-start gap-3 my-5'>
								<TwitterLogoIcon width="20" height="20" />
								<LinkedInLogoIcon width="20" height="20" />
							</div>
						</div>
						<div className='text-center md:text-left flex-1 flex flex-col min-h-full'>
							<img className='aspect-square rounded-lg mx-auto md:mx-0' src="meghna.png" alt="" />
							<h3 className='pt-3 leading-relaxed'>Meghna Shenoy<br /><span className='text-[#39996B] text-base sm:text-lg md:text-xl font-semibold'>Co-Founder</span></h3>
							<h6 className='text-[#5E5E5E] flex-grow'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
							<div className='flex flex-row justify-center md:justify-start gap-3 my-5'>
								<TwitterLogoIcon width="20" height="20" />
								<LinkedInLogoIcon width="20" height="20" />
							</div>
						</div>
						<div className='text-center md:text-left flex-1 flex flex-col min-h-full'>
							<img className='aspect-square rounded-lg mx-auto md:mx-0' src="anoushka.png" alt="" />
							<h3 className='pt-3 leading-relaxed'>Anoushka Rathi<br /><span className='text-[#39996B] text-base sm:text-lg md:text-xl font-semibold'>Co-Founder</span></h3>
							<h6 className='text-[#5E5E5E] flex-grow'>Anoushka Rathi has been working the housing industry for over eight years. She has worked with government officials to improve upon the current housing policies.</h6>
							<div className='flex flex-row justify-center md:justify-start gap-3 my-5'>
								<TwitterLogoIcon width="20" height="20" />
								<LinkedInLogoIcon width="20" height="20" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About;