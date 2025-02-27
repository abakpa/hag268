import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import backgroundImage from '../images/classic2.jpg';
import product1 from '../images/milano22.jpg';
import product2 from '../images/nail2.jpg';
import product3 from '../images/classic8.avif';
import product4 from '../images/shingle.jpg';
import product5 from '../images/ridgeshag2.avif';
import product6 from '../images/Classic-min-1024x1024.png';
import product7 from '../images/sealant.jpg';
import product8 from '../images/flatsheet.avif';


const products = [
  { id: 1, name: 'Milano', image: product1 },
  { id: 2, name: 'Nails', image: product2 },
  { id: 3, name: 'Bond', image: product3 },
  { id: 4, name: 'Shingles', image: product4 },
  { id: 5, name: 'Ridges', image: product5 },
  { id: 6, name: 'Classic', image: product6 },
  { id: 7, name: 'Sealant', image: product7 },
  { id: 8, name: 'Flat Sheets', image: product8 },
];

function Products() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-6 max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">
            Explore Our Premium Roofing Solutions
          </h1>
          <p className="text-lg">
            Discover a wide range of high-quality roofing materials tailored to suit your building needs. From durable roofing sheets to elegant classic tiles, our products combine style, strength, and reliability to ensure your structure stands the test of time.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-4 text-center flex flex-col justify-between"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mb-4 w-full h-80 object-cover rounded"
                />
                <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                <Link to={`/products/${product.id}`} className=''>
                <button className="bg-amber-500 text-blue-950 py-2 px-24 rounded hover:bg-amber-600 transition-all">
                  View More
                </button>
                </Link>
              </div>
            ))}
          </div>
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

export default Products;
