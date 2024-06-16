import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div>
			<div className='p-16 pb-0 flex flex-col items-center'>
				<h1 className='text-center text-3xl sm:w-2/3 md:w-1/2 lg:w-5/12 lg:text-4xl'>A commitment to providing homes for all.</h1>
				<p className='text-center sm:w-2/3 md:w-1/2 lg:w-5/12'>At Maison, our mission is to create living spaces for those without a place to stay. We create eco-friendly, heated, mobile homes for people needing a quick rest stop, completely free to use.</p>
				<div className='flex flex-col-reverse items-center md:flex-row'>
					<div className="button"><Link to={"/about"}>Read More</Link></div>
					<div className="button"><Link to={"/register"}>Join Us</Link></div>
				</div>
			</div>
			<img className='w-full lg:hidden py-14' src="/hero-small.png" alt="" />
			<img className='hidden lg:block pb-16' src="/hero-large.png" alt="" />
			
			<div className='p-8s w-full flex flex-col items-center'>
				<h2 className='text-center lg:text-3xl'>Our Mission</h2>
				<p className='text-center px-8 pb-8 sm:w-2/3 md:w-1/2 lg:w-5/12'>Our mission is to provide shelter and protection for poverty-stricken individuals or families. We're dedicated to serving our community with our love, affection, and most importantly, warmth.</p>
			</div>
			<div className='w-full overflow-hidden flex gap-5 items-center flex-row justify-center md:gap-16 pb-16'>
					<img className='w-1/3 md:h-[50vh] aspect-square object-cover border border-transparent rounded-lg' src="/mission-1.jpg" alt="" />
					<img className='w-1/3 md:h-[50vh] aspect-square object-cover border border-transparent rounded-lg' src="/mission-2.jpg" alt="" />
					<img className='w-1/3 md:h-[50vh] aspect-square object-cover border border-transparent rounded-lg' src="/mission-3.png" alt="" />
			</div>

			<div className='w-full flex flex-col items-center'>
				<h2 className='text-center'>Annual Spring Gala</h2>
				<p className='text-center italic'>Saturday, April 12, 2024 at 9:00pm<br />The Ritz-Carlton at Half-Moon Bay</p>
				<div className="button"><Link to="/register">Register</Link></div>
				
				<div className='lg:w-3/4 px-8 pt-10'>
					<div className='flex flex-col lg:flex-row gap-12 items-center'>
						<div className='md:w-1/2'>
							<h1 className='text-center md:text-left'>Support Our Cause</h1>
							<p className='text-center md:text-left'>Every spring, Maison hosts an annual gala to help support the creation of new mobile homes. With funding from sponsors and attendees, we hope to increase both the number of homes established, as well as expand to more locations.</p>
						</div>
						<img className='md:w-1/2 border border-transparent rounded-xl' src="/gala-1.jpg" alt="" />
					</div>

					<div className='flex flex-col lg:flex-row-reverse gap-12 items-center py-8'>
						<div className='md:w-1/2'>
							<h1>What You'll Experience</h1>
							<ul className='list-disc'>
								<li>Complementary food and drinks</li>
								<li>Conversing organization officials</li>
								<li>Listen to a group of acclaimed guest speakers</li>
								<li>Learn about homelessness in today’s world</li>
							</ul>
						</div>
						<img className='md:w-1/2 border border-transparent rounded-xl' src="/gala-2.webp" alt="" />
					</div>
				</div>
			</div>

			<img className='hidden md:block' src="/stats.png" alt="" />
		</div>
	)
}

export default Home