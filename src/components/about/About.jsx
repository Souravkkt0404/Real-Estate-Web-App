import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/services.jpg";
import "./about.css";
import img1 from "../projects/PR11.jpg"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back  name='' title='About Us - Who We Are?'  cover={img} />
        <div className='container flex'>
          <div className='left row'>
            <Heading  title='ABOUT US ' subtitle='Check out our company story and work process' />
            <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">About company:</h1>
            <p>Established two decades ago, Global Enterprises a real estate agency in Bangalore has been a trusted name in the industry, providing comprehensive real estate solutions. With an extensive portfolio of successful transactions, we have earned a reputation for excellence, transparency, and reliability. Our commitment to client satisfaction has enabled us to flourish in the dynamic real estate market of Bangalore.</p>
            <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">CEO Message:</h1>
           <p>As the CEO of Global Enterprises, I extend a warm welcome to you. For the past twenty years, our team has relentlessly pursued excellence, ensuring that our clients' dreams of finding the perfect property come true. We believe in building lasting relationships based on trust, integrity, and personalized service. Our journey has been characterized by adaptability and innovation, enabling us to stay ahead in an ever-evolving real estate landscape.We look forward to assisting you in your real estate endeavors and making your experience with us exceptional.</p>
           <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">How We Work:</h1>
           <p>At our agency, we prioritize a client-centric approach. We begin by understanding our clients' unique requirements, preferences, and budget constraints. Our experienced team of real estate experts then leverages their in-depth market knowledge to identify the most suitable properties available. From there, we facilitate smooth transactions, guiding our clients through the buying, renting, or leasing process. Our dedication to professionalism and attention to detail set us apart, ensuring a seamless and stress-free experience for all our clients.</p>
           <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Mission and Vision:</h1>
           <p>Mission: Our mission is to be the preferred choice for real estate solutions in Bangalore, offering exceptional services that exceed clients' expectations. We strive to build long-term relationships by delivering value, trust, and transparency in every interaction.</p>
           <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Vision:</h1>
           <p>Our vision is to be a leading force in shaping the future of real estate in Bangalore. We aim to continually innovate, adapt to market dynamics, and provide innovative solutions to meet the diverse needs of our clients.
           </p>
           
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src={img1} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
