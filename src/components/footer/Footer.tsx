import { Link } from 'react-router-dom'
import { InstagramLogoIcon, TwitterLogoIcon, EnvelopeClosedIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import './Footer.css'

const Footer = () => {

    return (
        <footer className='bg-[#2D2D2D] text-white m-0'>
            <div className='flex flex-col px-8 py-8 md:p-14 gap-5 md:flex-row md:justify-between md:items-center'>
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
                            <EnvelopeClosedIcon width="20" height="20" />
                            <LinkedInLogoIcon width="20" height="20" />
                            <InstagramLogoIcon width="20" height="20" />
                            <TwitterLogoIcon width="20" height="20" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full pb-5 flex flex-col items-center'>
                <hr className='w-11/12 my-5' />
                <p className='text-center text-white mb-5'>© 2024 Maison. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer