import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import image1 from '../images/shingles33.jpeg';
import image2 from '../images/milanohag4.jpg';
import image3 from '../images/classic1.jpg';
import product1 from '../images/milano22.jpg';
import product2 from '../images/nail2.jpg';
import product3 from '../images/classic8.avif';
import product4 from '../images/shingle.jpg';
import product5 from '../images/ridgeshag2.avif';
import product6 from '../images/Classic-min-1024x1024.png';
import product7 from '../images/sealant.jpg';
import product8 from '../images/flatsheet.avif';
import backgroundImage from '../images/S&M2.jpeg';
import aboutImage from '../images/hag26821.avif'; // Replace with the correct image path

function Home() {
  const slides = [
    {
      image: image1,
      title: "Roofing Materials",
      description: "We provide high-quality roofing sheets for all types of buildings.",
    },
    {
      image: image2,
      title: "Affordable Pricing",
      description: "Affordable pricing for top-notch roofing materials and services.",
    },
    {
      image: image3,
      title: "Sales & Discounts",
      description: "Enjoy great deals and discounts on all our roofing products.",
    },
  ];

  const products = [
    {
      image: product1,
      title: "Milano",
      description: "A premium stone-coated roofing sheet known for its strength, durability, and elegant finish, perfect for residential and commercial buildings.",
    },
    {
      image: product2,
      title: "Nails",
      description: "High-quality roofing nails designed for secure fastening, ensuring stability and long-lasting performance in all weather conditions.",
    },
    {
      image: product3,
      title: "Bond",
      description: "Stone-coated bond roofing sheets provide a sleek, modern look with exceptional durability and weather resistance.",
    },
    {
      image: product4,
      title: "Shingle",
      description: "Stylish and durable shingle roofing sheets that offer a classic aesthetic with superior protection against harsh weather conditions.",
    },
    {
      image: product5,
      title: "Ridges",
      description: "Roofing ridges ensure a seamless finish at roof peaks, providing additional strength, protection, and aesthetic appeal.",
    },
    {
      image: product6,
      title: "Classic",
      description: "Classic stone-coated roofing sheets offer a traditional yet sophisticated design with outstanding durability and weather resistance.",
    },
    {
      image: product7,
      title: "Sealant",
      description: "Premium roofing sealant designed to prevent leaks and enhance the lifespan of your roof by providing a strong, waterproof barrier.",
    },
    {
      image: product8,
      title: "Flat Sheets",
      description: "Versatile flat roofing sheets that provide a smooth, modern look with excellent durability and energy efficiency for various structures.",
    },
  ];
  

  const [currentSlide, setCurrentSlide] = useState(0);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
        {/* Fading images */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={slide.title}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg">{slides[currentSlide].description}</p>
        </div>
      </section>
      <section className="bg-amber-500 text-center py-6">
  <div className="container mx-auto px-4">
    <p className="text-lg font-semibold text-gray-800 italic">
      "A strong roof is the foundation of a secure and lasting home. Build it right, build it strong."
    </p>
  </div>
</section>


      {/* About Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-2/3 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6">Welcome to Hag268</h2>
            <p className="text-sm text-gray-700">
            Welcome to HAG268! We are committed to providing high-quality roofing materials and expert installation services. With years of experience in the industry, we understand the importance of durable and reliable roofing solutions for both residential and commercial buildings. Our mission is to ensure customer satisfaction through affordability, quality, and professionalism.

At HAG268, we believe that a strong and well-designed roof is the cornerstone of any structure. That’s why we partner with trusted manufacturers to supply only the best materials that meet industry standards. Whether you are constructing a new building, renovating, or seeking expert advice, our team is always ready to guide you every step of the way.

From metal roofing sheets and asphalt shingles to clay roofing tiles, we offer a diverse range of products tailored to suit your needs. Our professional installation team works with precision and attention to detail, ensuring that your roof not only looks great but also provides lasting protection for years to come.

Your satisfaction is our top priority, and we are dedicated to delivering exceptional service and innovative solutions that you can trust. Choose HAG268 for all your roofing needs, and let us help you build a future that stands strong.
            </p>
            <p className='text-center mt-10'>
            <Link
      to="/about"
      className="bg-amber-500 text-gray-800 py-2 px-6 rounded-full text-xl font-semibold transition-all duration-300 hover:bg-yellow-500"
    >
      About Us
    </Link>
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

      {/* Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Mission and Vision</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Mission Statement */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-amber-500 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-3-3v6m-8-4a9 9 0 0118 0v2a9 9 0 01-18 0v-2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Our Mission</h3>
        <p className="text-gray-600 max-w-md">
          To provide the highest quality roofing materials and services that combine durability, affordability, 
          and reliability. We aim to exceed our customers' expectations with professional expertise and outstanding service.
        </p>
      </div>

      {/* Vision Statement */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-amber-500 rounded-full mb-4">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8 text-gray-800"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 10V7a3 3 0 016 0v3m-1 4a2 2 0 01-4 0M12 5a3 3 0 11-3 3 3 3 0 013-3zm3 9c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V5h8v9z"
      />
    </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Our Vision</h3>
        <p className="text-gray-600 max-w-md">
          To become a global leader in roofing solutions by setting the standard for quality, innovation, 
          and customer satisfaction in the industry.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Contact Us CTA Section */}
<section
  className="relative bg-cover bg-center h-80 flex items-center justify-center text-center"
  style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better readability */}

  <div className="relative z-10 text-white px-4">
    <h2 className="text-3xl font-bold mb-4">NOT SURE OF YOUR BUILDING NEEDS?</h2>
    <p className="text-lg mb-6">Speak to our expert today for personalized advice and solutions!</p>
    <Link
      to="/contact"
      className="bg-amber-500 text-gray-800 py-2 px-6 rounded-full text-xl font-semibold transition-all duration-300 hover:bg-yellow-500"
    >
      Contact Us
    </Link>
  </div>
</section>
<section className="py-16 bg-gray-800 text-white">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Our Products Section */}
    <div>
  <h3 className="text-xl font-semibold mb-4">Our Products</h3>
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <li className="flex items-center text-sm">
      <span className="mr-2">✔</span> Milano Roofing Sheets
    </li>
    <li className="flex items-center text-sm">
      <span className="mr-2">✔</span> Shingles Roofing Sheets
    </li>
    <li className="flex items-center text-sm">
      <span className="mr-2">✔</span> Classic Roofing Sheets
    </li>
    <li className="flex items-center text-sm">
      <span className="mr-2">✔</span> Bond Roofing Sheets
    </li>
    <li className="flex items-center text-sm">
      <span className="mr-2">✔</span> Flat Roofing Sheets
    </li>
    <li className="flex items-center text-sm">
      <span className="mr-2">✔</span> Ridges
    </li>
    <li className="flex items-center text-sm">
      <span className="mr-2">✔</span> Sealants
    </li>
    <li className="flex items-center text-sm">
      <span className="mr-2">✔</span> Nails
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
          <span className="mr-2">📍</span> No 2 Abimbola street isolo industrial estate by IBWAS FILLING station isolo Lagos Nigeria.
        </li>
        <li className="flex items-center">
          <span className="mr-2">📞</span> +234 8169525150, 8103025751, 8037625357.
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
          <a href="https://wa.me/08169525150" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-700">
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

export default Home;
