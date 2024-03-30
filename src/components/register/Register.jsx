import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className='w-2/3 mx-auto'>
        <div className='w-4/5 m-auto'>
            <h1 className='text-center'>Register for our Spring Gala</h1>
            <p className='text-center'>Thank you so much for supporting our cause! For a more detailed breakdown of how your money is used, please check out our <span className='text-[#39996B] underline'>monetary policies</span> page.<br /><br />After filling out the registration form, all attendees will receive an email regarding information about the event.</p>
        </div>

        <div className='box-shadow flex flex-col md:flex-row justify-evenly my-12 border border-transparent rounded-xl gap-12'>
            <div className='w-1/3 px-8 py-5 border border-transparent border-e-gray-200'>
                <div className='flex flex-row mb-2 items-center gap-3'><svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><h5 className='m-0' style={{ fontFamily: 'PT Sans, sans-serif' }}>DESCRIPTION</h5></div>
                <p className='text-sm'>Enjoy a detailed tour of our work along with food and refreshments.</p>
            </div>
            <div className='w-1/3 py-5 border border-transparent border-e-gray-200'>
                <div className='flex flex-row mb-2 items-center gap-3'><svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg><h5 className='m-0' style={{ fontFamily: 'PT Sans, sans-serif' }}>LOCATION</h5></div>
                <p className='text-sm'>The Ritz-Carlton at Half-Moon Bay</p>
            </div>
            <div className='w-1/3 py-5'>
                <div className='flex flex-row mb-2 items-center gap-3'><svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg><h5 className='m-0' style={{ fontFamily: 'PT Sans, sans-serif' }}>DATE & TIME</h5></div>
                <p className='text-sm'>April 12 2024 | 6:00 - 10:00 PM EST</p>
            </div>
        </div>

        <div className='my-16'>
            <div className='flex flex-col lg:flex-row lg:justify-evenly gap-5'>
                <div className='box-shadow px-8 py-8 md:py-5 border border-transparent rounded-xl flex flex-col gap-3 items-center'>
                    <div>
                        <div style={{ fontFamily: 'Raleway, sans-serif' }} className='text-[#D7BA80] flex flex-row items-center gap-2 font-medium'><img className='size-8' src="/radial-gradients/gold-gradient.svg" alt="" />Gold Guest Pass</div>
                        <br />
                        <h1>$49.99</h1>
                        <div>
                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Named as gold patron</div>
                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Complimentary refreshments</div>
                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Complimentary food</div>
                        </div>
                        <p className='italic text-sm pt-2'>* Some subtext here.</p>
                    </div>
                    <div className="m-auto button">Select</div>
                </div>
                <div className='box-shadow px-8 py-8 md:py-5 border border-transparent rounded-xl flex flex-col gap-3 items-center'>
                    <div>
                        <div style={{ fontFamily: 'Raleway, sans-serif' }} className='text-[#929493] flex flex-row items-center gap-2 font-medium'><img className='size-8' src="/radial-gradients/platinum-gradient.svg" alt="" />Platinum Guest Pass</div>
                        <br />
                        <h1>$49.99</h1>
                        <div>
                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Named as platinum patron</div>
                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Early gala entrance</div>
                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Reason three</div>
                        </div>
                        <p className='italic text-sm pt-2'>* All benefits from gold pass included.</p>
                    </div>
                    <div className="m-auto button">Select</div>
                </div>
                <div className='box-shadow px-8 py-8 md:py-5 border border-transparent rounded-xl flex flex-col gap-3 items-center'>
                    <div>
                        <div style={{ fontFamily: 'Raleway, sans-serif' }} className='text-[#39996B] flex flex-row items-center gap-2 font-medium'><img className='size-8' src="/radial-gradients/diamond-gradient.svg" alt="" />Diamond Guest Pass</div>
                        <br />
                        <h1>$49.99</h1>
                        <div>
                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Named as diamond patron</div>
                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />One-on-one meetings</div>
                            <div className='flex flex-row gap-2 items-center leading-loose'><img className='size-4' src="/star.svg" alt="" />Access to diamond lounge</div>
                        </div>
                        <p className='italic text-sm pt-2'>* All benefits from platinum pass included.</p>
                    </div>
                    <div className="m-auto button">Select</div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Register