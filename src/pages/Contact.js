import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import backgroundImage from '../images/contact5.jpeg';
import contactImage from '../images/contact.webp';


function Contact() {
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
        Talk to us
      </h1>
      <p className="text-lg">
      We’d love to hear from you! Reach out to us with any inquiries, questions, or feedback, and our team will be happy to assist.
      </p>
    </div>
  </section>
  <section className="bg-white py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={contactImage}
            alt="Contact Us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-3xl font-bold text-center lg:text-left mb-6">
            Contact Us
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-amber-500 text-blue-950 py-3 rounded hover:bg-blue-950 hover:text-amber-500 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
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

export default Contact;
