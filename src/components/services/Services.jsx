import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css";
import FeaturedCard from "../home/featured/FeaturedCard";
import "../services/Services.css";

const Services = () => {
  return (
    <>
      <section className='services '>
        <Back name='' title='Services -All Services' cover={img} />
        <div className='featured container'>
          <h1 class=" top text-3xl font-bold mb-6 mt-6 lg:text-left text-center">Our Services and Values:</h1>
          <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Buy Services:</h1>
          <p>Whether you are looking for an apartment, villa, plot, or commercial property, we have an extensive inventory that caters to every requirement. Our expert team guides you through the entire buying process, ensuring a seamless experience.</p>
          <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Rent Services:</h1>
          <p >Finding the ideal rental property can be challenging. Our agency simplifies the process by offering a wide selection of rental properties. We assist you in finding the perfect space to suit your lifestyle and budget.</p>
          <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Lease Services:</h1>
          <p className="mb-4"> For landlords seeking reliable tenants or tenants looking to lease their property, our agency provides comprehensive lease services. We handle the documentation and negotiations, making the leasing process hassle-free.</p>
          <p className="mb-4">Our diverse range of services and the wealth of expertise we possess enables us to cater to a wide spectrum of clients, from individuals to corporate entities.</p>
          <p className="mb-4">At our agency, we are dedicated to making your real estate journey in Bangalore a fulfilling and rewarding one. Partner with us, and let us help you find the property of your dreams or manage your real estate investments with utmost care.</p>
          <h1 class="text-3xl font-bold mb-6 mt-6 lg:text-left text-center">Values:</h1>
          <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Experience and Expertise: </h1>
          <p>With a rich legacy of two decades in the real estate industry, our company brings a wealth of experience and expertise to the table. Our seasoned professionals have a deep understanding of the Bangalore market, making us a reliable partner for all your real estate needs.</p>
          <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Personalized Service: </h1>
          <p>We believe in building lasting relationships with our clients, and personalized service is at the heart of our approach. Understanding that each client has unique requirements, we take the time to listen and tailor our solutions to match their preferences and budget.</p>
          <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Transparency and Integrity: </h1>
          <p>Honesty and transparency are the cornerstones of our operations. We ensure open communication and full disclosure of information, providing our clients with a clear understanding of each transaction. Our commitment to integrity has earned us the trust of countless satisfied clients.</p>
          <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Comprehensive Property Solutions: </h1>
          <p> Our company offers a one-stop destination for all types of real estate services. Whether you are buying, renting, or leasing apartments, villas, plots, or commercial properties, we have an extensive inventory to meet your needs.
          </p>
          <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Market Insights:  </h1>
          <p>Our team continuously monitors the real estate market in Bangalore, allowing us to provide valuable insights to our clients. We keep them informed about market trends, investment opportunities, and potential risks, empowering them to make informed decisions.</p>
          <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Professionalism and Efficiency: </h1>
          <p>We take pride in our professionalism and efficiency in handling real estate transactions. From property research to documentation and negotiations, we ensure a smooth and streamlined process for our clients.
          </p>
          <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Client-Centric Approach:</h1>
          <p>Putting our clients' needs first is the foundation of our company's values. We prioritize their satisfaction and go the extra mile to exceed their expectations, fostering long-term relationships.</p>
          <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Innovative Solutions:</h1>
          <p>Embracing innovation, we continually evolve to meet the changing demands of the real estate industry. Our use of advanced technologies and creative solutions enhances the client experience and sets us apart from the competition.
          </p>
          <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Social Responsibility:  </h1>
          <p>We are committed to giving back to the community and being socially responsible. Our company actively supports initiatives that promote sustainable development and upliftment of the local neighborhoods.
          </p>
          <h1 class="text-1xl font-bold mb-6 mt-6 lg:text-left text-center">Reliable and Trustworthy:</h1>
          <p className="mt-4"> Our track record speaks for itself, making us a reliable and trustworthy partner in the real estate sector. Clients can rely on us for honest advice, transparent dealings, and exceptional service.
          </p>
          <p>At our company, we take immense pride in delivering value to our clients and making their real estate journey in Bangalore a seamless and rewarding experience. With our strong values and commitment to excellence, we look forward to serving you and helping you achieve your real estate goals with confidence.</p>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services
