import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {

    return (
        <footer className='bg-gray-900 text-white m-0'>
            <div className='flex flex-col px-8 py-14 md:p-14 gap-5 md:flex-row md:justify-between md:items-center'>
                <div className='flex flex-col justify-between gap-12 md:w-1/2'>
                    <div>
                        <p className='text-white'>Sign up for our email list!</p>
                        <h3 className='font-normal'>Short weekly updates.</h3>
                        <input className='w-full bg-inherit outline-none italic pl-5 pb-2 border border-transparent border-b-white' type="email" placeholder='Your email' style={{ fontFamily: 'Raleway, sans-serif' }} />
                    </div>
                    <div className=''>
                        <h4 className='m-0'>Maison</h4>
                        <p className='text-white'>Everyone deserves a place to stay.</p>
                    </div>
                </div>
                <div className='w-full md:w-1/3'>
                    <div className='flex flex-col gap-11 md:flex-row my-8'>
                        <div className='leading-loose md:w-1/2'>
                            <h5 className='pb-2 border border-transparent border-b-white my-2'>Quick Links</h5>
                            <ul className=''>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/about"}>About</Link></li>
                                <li><Link to={"/donate"}>Donate</Link></li>
                                <li><Link to={"/register"}>Register</Link></li>
                            </ul>
                        </div>
                        <div className='leading-loose md:w-1/2'>
                            <h5 className='pb-2 border border-transparent border-b-white my-2'>Other</h5>
                            <ul className=''>
                                <li><Link to={"/"}>Privacy Policy</Link></li>
                                <li><Link to={"/"}>Cookie Policy</Link></li>
                                <li><Link to={"/"}>Terms and Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='leading-loose'>
                        <h5 className='pb-2 border border-transparent border-b-white my-2'>Socials</h5>
                        <div className='flex flex-row gap-6 my-5'>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 text-white fill-white"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 text-white fill-white"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 text-white"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-6 h-6 text-white fill-white"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='w-full flex flex-col items-center'>
                <hr className='w-11/12 my-5' />
                <p className='text-center text-white mb-5'>© 2024 Maison. All rights reserved.</p>
            </div> */}
        </footer>
    )
}

export default Footer