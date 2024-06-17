const About = () => {
	return (
		<div>
			<div className="w-full h-[88vh] relative">
				<img className="w-full h-full object-cover absolute" src="about-header.png" alt="" />
				<div className="absolute z-10 w-full h-[88vh] flex flex-col items-center justify-center">
					<h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white">This is Maison.</h1>
					<h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white opacity-80">This is Maison.</h1>
					<h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white opacity-55">This is Maison.</h1>
				</div>
			</div>

		</div>
	)
}

export default About