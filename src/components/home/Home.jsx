import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
        <div>
            <h1 className='text-center'>A commitment to providing homes for all.</h1>
            <p className='text-center'>At Maison, our mission is to create living spaces for those without a place to stay. We create eco-friendly, heated, mobile homes for people needing a quick rest stop, completely free to use.</p>
            <div className='flex flex-row'>
                <div className="button">Read More</div>
                <div className="button">Join Us</div>
            </div>
        </div>
        <div>
            <h2 className='text-center'>Our Mission</h2>
            <p className='text-center'>Our mission is to provide shelter and protection for poverty-stricken individuals or families. We're dedicated to serving our community with our love, affection, and most importantly, warmth.</p>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
        <div>
            <h2 className='text-center'>Annual Spring Gala</h2>
            <p className='text-center italic'>Saturday, April 12, 2024 at 9:00pm<br />The Ritz-Carlton at Half-Moon Bay</p>
            <div className="button">Register</div>
            <div>
                <div>
                    <h3>Support Our Cause</h3>
                    <p>Every spring, Maison hosts an annual gala to help support the creation of new mobile homes. With funding from sponsors and attendees, we hope to increase both the number of homes established, as well as expand to more locations.</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>What You'll Experience</h3>
                    <ul className='list-disc'>
                        <li>Complementary food and drinks</li>
                        <li>Conversing organization officials</li>
                        <li>Listen to a group of acclaimed guest speakers</li>
                        <li>Learn about homelessness in today’s world</li>
                    </ul>
                </div>
            </div>
        </div>
        <div>

        </div>

    </div>
  )
}

export default Home