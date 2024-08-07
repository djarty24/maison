import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {

  useEffect(() => {
    // Define the animations for sections that should rise up
    gsap.utils.toArray<HTMLElement>(".animate-rise").forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          duration: 5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          }
        });
    });

    // Define the animations for sections that should only fade in
    gsap.utils.toArray<HTMLElement>(".animate-fade").forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0 }, 
        {
          opacity: 1,
          duration: 5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          }
        });
    });
  }, []);

  return (
    <div className='mt-24'>
      <div className='animate-rise p-16 pb-0 flex flex-col items-center'>
        <h1 className='text-center text-3xl sm:w-2/3 md:w-1/2 lg:w-5/12 lg:text-4xl'>A commitment to providing homes for all.</h1>
        <p className='text-center sm:w-2/3 md:w-1/2 lg:w-5/12'>At Maison, our mission is to create living spaces for those without a place to stay. We create eco-friendly, heated, mobile homes for people needing a quick rest stop, free to use.</p>
        <div className='flex flex-col-reverse items-center md:flex-row'>
          <Link to={'/about'}><div className='button'>Read More</div></Link>
          <Link to={'/register'}><div className='button'>Join Us</div></Link>
        </div>
      </div>
      <img className='w-full lg:hidden py-14' src="/hero-small.png" alt="" />
      <img className='hidden lg:block pb-16' src="/hero-large.png" alt="" />

      <div className='animate-rise p-8 w-full flex flex-col items-center'>
        <h2 className='text-center lg:text-3xl'>Our Mission</h2>
        <p className='text-center px-8 pb-8 sm:w-2/3 md:w-1/2 lg:w-5/12'>Our mission is to provide shelter and protection for poverty-stricken individuals or families. We're dedicated to serving our community with our love, affection, and most importantly, warmth.</p>
      </div>

      <div className='animate-fade w-full overflow-hidden py-8'>
        <div className='flex gap-5 items-center animate-scroll md:gap-16'>
          <img className='w-1/3 lg:h-[40vh] aspect-square object-cover border border-transparent rounded-lg' src="/mission-1.png" alt="Mission 1" />
          <img className='w-1/3 lg:h-[40vh] aspect-square object-cover border border-transparent rounded-lg' src="/mission-2.png" alt="Mission 2" />
          <img className='w-1/3 lg:h-[40vh] aspect-square object-cover border border-transparent rounded-lg' src="/mission-3.png" alt="Mission 3" />
          <img className='w-1/3 lg:h-[40vh] aspect-square object-cover border border-transparent rounded-lg' src="/mission-4.png" alt="Mission 4" />
          <img className='w-1/3 lg:h-[40vh] aspect-square object-cover border border-transparent rounded-lg' src="/mission-5.png" alt="Mission 5" />
          <img className='w-1/3 lg:h-[40vh] aspect-square object-cover border border-transparent rounded-lg' src="/mission-1.png" alt="Mission 1" />
          <img className='w-1/3 lg:h-[40vh] aspect-square object-cover border border-transparent rounded-lg' src="/mission-2.png" alt="Mission 2" />
          <img className='w-1/3 lg:h-[40vh] aspect-square object-cover border border-transparent rounded-lg' src="/mission-3.png" alt="Mission 3" />
          <img className='w-1/3 lg:h-[40vh] aspect-square object-cover border border-transparent rounded-lg' src="/mission-4.png" alt="Mission 4" />
          <img className='w-1/3 lg:h-[40vh] aspect-square object-cover border border-transparent rounded-lg' src="/mission-5.png" alt="Mission 5" />
        </div>
      </div>

      <div className='animate-rise w-full flex flex-col items-center py-8'>
        <h2 className='text-center'>Annual Spring Gala</h2>
        <p className='text-center italic'>Saturday, July 1, 2024 at 9:00pm<br />The Ritz-Carlton at Half-Moon Bay</p>
        <div className='flex flex-col items-center lg:flex-row lg:w-2/3 p-8 gap-8 md:w-3/4'>
          <div className='flex flex-col md:items-center lg:items-start justify-between'>
            <h3 className='text-center lg:text-left'>Support Our Cause</h3>
            <p className='text-center lg:text-left'>Every spring, Maison hosts an annual gala to help support the creation of new mobile homes. With funding from sponsors and attendees, we hope to:<br /></p>
            <div>
              <div className='flex flex-row gap-3 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#39996B] size-4 md:size-[1.15rem] p-0" viewBox="0 0 1024 1024" version="1.1"><path d="M511.322571 63.620993c-246.971881 0-447.189925 200.206788-447.189925 447.184809s200.218044 447.184809 447.189925 447.184809c246.978021 0 447.189925-200.206788 447.189925-447.184809S758.300592 63.620993 511.322571 63.620993L511.322571 63.620993zM767.82041 394.804834 478.605426 684.031075l-0.011256 0.016373c-13.331633 13.331633-33.667797 15.410991-49.185212 6.249331-2.87856-1.699712-5.584182-3.790326-8.055466-6.249331-0.005117-0.005117-0.005117-0.005117-0.005117-0.005117L254.825756 517.519714c-15.796778-15.808034-15.796778-41.432645 0-57.245795 15.808034-15.808034 41.437761-15.808034 57.245795 0l137.90279 137.90279 260.611529-260.611529c15.802918-15.802918 41.437761-15.802918 57.240679 0C783.628444 353.378329 783.628444 379.001917 767.82041 394.804834L767.82041 394.804834zM767.82041 394.804834" /></svg>
                <p className='text-[#39996B] text-center lg:text-left p-0 m-0'>Increase mobile homes established</p>
              </div>
              <div className='flex flex-row gap-3 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#39996B] size-4 md:size-[1.15rem] p-0" viewBox="0 0 1024 1024" version="1.1"><path d="M511.322571 63.620993c-246.971881 0-447.189925 200.206788-447.189925 447.184809s200.218044 447.184809 447.189925 447.184809c246.978021 0 447.189925-200.206788 447.189925-447.184809S758.300592 63.620993 511.322571 63.620993L511.322571 63.620993zM767.82041 394.804834 478.605426 684.031075l-0.011256 0.016373c-13.331633 13.331633-33.667797 15.410991-49.185212 6.249331-2.87856-1.699712-5.584182-3.790326-8.055466-6.249331-0.005117-0.005117-0.005117-0.005117-0.005117-0.005117L254.825756 517.519714c-15.796778-15.808034-15.796778-41.432645 0-57.245795 15.808034-15.808034 41.437761-15.808034 57.245795 0l137.90279 137.90279 260.611529-260.611529c15.802918-15.802918 41.437761-15.802918 57.240679 0C783.628444 353.378329 783.628444 379.001917 767.82041 394.804834L767.82041 394.804834zM767.82041 394.804834" /></svg>
                <p className='text-[#39996B] text-center lg:text-left p-0 m-0'>Expand to more locations around the world</p>
              </div>
            </div>
            <div className='w-full lg:flex items-center justify-center lg:justify-start pt-6 hidden'>
              <Link to={'/register'}><div className='button'>Register</div></Link>
            </div>
          </div>
          <img className='rounded-lg lg:w-1/2 shadow-[20px_20px_rgba(242,_185,_92,_1)]' src="gala-2.webp" alt="" />
        </div>

        <div className='hidden sm:flex sm:flex-col py-8 mx-20 md:hidden lg:flex-row lg:w-3/4 lg:gap-16'>
          <div className='bg-[#F2FCF7] aspect-square items-center flex flex-col md:w-1/3 p-4 lg:p-20 rounded-lg shadow-2xl gap-5'>
            <img src="/food.png" alt="" />
            <p className='text-center text-base lg:text-lg'>Complementary food and drinks</p>
          </div>
          <div className='bg-[#F2FCF7] aspect-square items-center flex flex-col md:w-1/3 p-4 lg:p-20 rounded-lg shadow-2xl gap-5'>
            <img src="/homeless.png" alt="" />
            <p className='text-center text-base lg:text-lg'>Meet with experts & advocates</p>
          </div>
          <div className='bg-[#F2FCF7] aspect-square items-center flex flex-col md:w-1/3 p-4 lg:p-20 rounded-lg shadow-2xl gap-5'>
            <img className='filter grayscale' src="/people.png" alt="" />
            <p className='text-center text-base lg:text-lg'>Learn about homelessness today</p>
          </div>
        </div>
      </div>
      <img className='animate-rise w-full hidden md:block pt-8' src="/stats.png" alt="Stats" />
    </div>
  );
};

export default Home;