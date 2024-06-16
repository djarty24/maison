const About = () => {
	return (
		<div>
			<div className='pt-16 flex flex-col items-center'>
				<h1 className='text-center text-3xl sm:w-2/3 md:w-1/2 lg:w-5/12 lg:text-4xl'>About Us</h1>
				<p className='text-center px-8  sm:w-2/3 md:w-1/2 lg:w-5/12'>We want to provide everyone a place to live, and laugh - so that they can be happier and healthier humans.</p>
			</div>

			<div className='w-full flex flex-col items-center'>
				<div className='lg:w-3/4 px-8 pt-8'>
					<div className='flex flex-col-reverse lg:flex-row gap-12 items-center pb-10'>
						<div className='md:w-1/2'>
							<h1 className="text-center lg:text-left">Who We Are</h1>
							<p className="text-center lg:text-left">At Maison, we’re more than just a name. We’re a team of passionate individuals committed to making a difference. Our mission is to provide shelter and protection for poverty-stricken individuals or families. We’re dedicated to serving our community with our love, affection, and most importantly, warmth.</p>
						</div>
						<img className='md:w-1/2 aspect-video object-cover border border-transparent rounded-xl' src="/about-1.jpg" alt="" />
					</div>

					<div className='flex flex-col-reverse lg:flex-row-reverse gap-12 items-center py-10'>
						<div className='md:w-1/2'>
							<h1 className="text-center lg:text-left">Our Approach</h1>
							<p className="text-center lg:text-left">From our products and services to our relationships with residents, partners, and the community, we uphold a standard of excellence that is unwavering.</p>
						</div>
						<img className='md:w-1/2 aspect-video object-cover border border-transparent rounded-xl' src="/about-2.jpg" alt="" />
					</div>
				</div>
			</div>

			<div className="w-full flex flex-col items-center pb-8">
				<h2 className="px-10 md:px-0 font-semibold text-center pt-10">Meet the minds behind the <span className="text-[#39996B]">movement</span>.</h2>
				<div className="px-10 md:px-0 sm:w-2/3 md:w-1/2 lg:w-8/12 flex flex-col lg:flex-row md:justify-evenly gap-12">
					<div className="h-fit shadow-xl border rounded-lg my-8">
						<img className="border rounded-t-lg" src="/revati.png" alt="" />
						<p className="text-center p-4"><span className="text-black font-semibold">Revati Tambe</span><br /><span className="text-[#39996B]">Co-Founder</span></p>
					</div>
					<div className="h-fit shadow-xl border rounded-lg my-8">
						<img className="border rounded-t-lg" src="/meghna.png" alt="" />
						<p className="text-center p-4"><span className="text-black font-semibold">Meghna Shenoy</span><br /><span className="text-[#39996B]">Co-Founder</span></p>
					</div>
					<div className="h-fit shadow-xl border rounded-lg my-8">
						<img className="border rounded-t-lg" src="/sruthi.png" alt="" />
						<p className="text-center p-4"><span className="text-black font-semibold">Anoushka Rathi</span><br /><span className="text-[#39996B]">Co-Founder</span></p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About