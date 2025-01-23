import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import aboutImage from '../images/hag26821.avif'; // Replace with your actual image path
import backgroundImage from '../images/S&M2.jpeg';


function About() {
  return (
    <>
    <section
    className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Content */}
    <div className="relative z-10 text-white px-6 max-w-3xl">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to HAG268 Roofing Solutions
      </h1>
      <p className="text-lg">
        Your one-stop destination for high-quality roofing materials, expert installation, and innovative building solutions. Let us help you build a future that stands strong.
      </p>
    </div>
  </section>
    <section className="relative py-16 bg-yellow-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-2/3 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-6">Welcome to HAG268</h2>
          <p className="text-sm text-gray-700">
            Welcome to HAG268! We are committed to providing high-quality roofing materials and expert installation services. With years of experience in the industry, we understand the importance of durable and reliable roofing solutions for both residential and commercial buildings. Our mission is to ensure customer satisfaction through affordability, quality, and professionalism.
            <br />
            <br />
            At HAG268, we believe that a strong and well-designed roof is the cornerstone of any structure. That’s why we partner with trusted manufacturers to supply only the best materials that meet industry standards. Whether you are constructing a new building, renovating, or seeking expert advice, our team is always ready to guide you every step of the way.
            <br />
            <br />
            From metal roofing sheets and asphalt shingles to clay roofing tiles, we offer a diverse range of products tailored to suit your needs. Our professional installation team works with precision and attention to detail, ensuring that your roof not only looks great but also provides lasting protection for years to come.
            <br />
            <br />
            Your satisfaction is our top priority, and we are dedicated to delivering exceptional service and innovative solutions that you can trust. Choose HAG268 for all your roofing needs, and let us help you build a future that stands strong.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/3">
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
    <section className="py-16 bg-gray-800 text-white">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Our Products Section */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Our Products</h3>
      <ul className="space-y-2">
        <li className="flex items-center text-sm">
          <span className="mr-2">✔</span> Metal Roofing Sheets
        </li>
        <li className="flex items-center text-sm">
          <span className="mr-2">✔</span> Asphalt Shingles
        </li>
        <li className="flex items-center text-sm">
          <span className="mr-2">✔</span> Clay Roofing Tiles
        </li>
        <li className="flex items-center text-sm">
          <span className="mr-2">✔</span> PVC Roofing Materials
        </li>
      </ul>
    </div>
    
    {/* Company Links Section */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Company Links</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <Link to="/" className="hover:text-yellow-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-yellow-400">Products</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </li>
      </ul>
    </div>

    {/* Contact Us Section */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center">
          <span className="mr-2">📍</span> 123 Roofing Ave, City, Country
        </li>
        <li className="flex items-center">
          <span className="mr-2">📞</span> +123 456 789
        </li>
        <li className="flex items-center">
          <span className="mr-2">📧</span> info@hag268.com
        </li>
        <li className="flex space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-700">
            <FaInstagram />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-700">
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>
    </>
  );
}

export default About;
