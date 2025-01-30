import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import product1 from '../images/hag26816.png';
import product2 from '../images/hag268nail.jpg';
import product3 from '../images/hag26817.avif';
import product4 from '../images/hag26815.avif';
import backgroundImage from '../images/hag268prod3.jpg';
import { useParams } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Corrugated Roofing Sheets',
        image: product1,
        description: 'Corrugated roofing sheets are the epitome of durability and versatility, making them an excellent choice for both residential and commercial buildings. These sheets are designed to withstand harsh weather conditions, including heavy rain, intense sunlight, and strong winds, providing reliable protection for years. Manufactured from high-quality materials, they feature a distinct wavy pattern that not only enhances structural integrity but also ensures efficient water drainage. Easy to install and cost-effective, corrugated roofing sheets are a popular choice for those seeking an affordable yet long-lasting roofing solution. They are available in various sizes and finishes to complement your building’s aesthetic and functional needs, offering both practicality and style.'
    },
    {
        id: 2,
        name: 'Roofing Nails',
        image: product2,
        description: 'Roofing nails are a small but essential component of any roofing system, designed to securely fasten roofing sheets and ensure stability. These nails are crafted from high-grade, corrosion-resistant materials, making them suitable for use in various environmental conditions. They come with a smooth or textured shank for enhanced grip and a large flat head to prevent tearing or damaging the roofing material. Roofing nails are versatile and can be used with metal sheets, shingles, and tiles, providing a firm hold that stands the test of time. Whether you are constructing a new roof or performing repairs, these nails are your trusted partner in achieving a durable and safe roof structure.'
    },
    {
        id: 3,
        name: 'Aluminum Roofing Sheets',
        image: product3,
        description: 'Aluminum roofing sheets offer the perfect blend of lightweight performance and superior durability, making them a top choice for modern construction projects. These sheets are highly resistant to rust and corrosion, ensuring they maintain their appearance and strength over the years. Ideal for both residential and commercial buildings, aluminum sheets are energy-efficient, reflecting heat and keeping interiors cool even in hot climates. Their lightweight nature makes installation faster and easier, reducing labor costs and structural load. Additionally, aluminum sheets are environmentally friendly and recyclable, making them an excellent choice for sustainable construction. Available in a variety of finishes and colors, they combine functionality with sleek aesthetics, elevating the look of your building.'
    },
    {
        id: 4,
        name: 'Stone Coated Sheets',
        image: product4,
        description: 'Stone-coated roofing sheets are a premium roofing solution designed to add elegance and durability to any structure. These sheets are made from high-quality steel and coated with natural stone granules, offering a unique blend of strength and beauty. The stone coating provides an attractive finish while also enhancing resistance to harsh weather, including UV rays, heavy rains, and strong winds. Stone-coated sheets are available in a variety of styles and colors, allowing homeowners and builders to achieve their desired look while maintaining top-notch performance. They are engineered to resist fading, cracking, and rusting, ensuring your roof remains vibrant and functional for decades. Perfect for both modern and traditional buildings, stone-coated sheets are an investment in style and longevity.'
    },
    {
        id: 5,
        name: 'Corrugated Roofing Sheets',
        image: product1,
        description: 'Corrugated roofing sheets are the epitome of durability and versatility, making them an excellent choice for both residential and commercial buildings. These sheets are designed to withstand harsh weather conditions, including heavy rain, intense sunlight, and strong winds, providing reliable protection for years. Manufactured from high-quality materials, they feature a distinct wavy pattern that not only enhances structural integrity but also ensures efficient water drainage. Easy to install and cost-effective, corrugated roofing sheets are a popular choice for those seeking an affordable yet long-lasting roofing solution. They are available in various sizes and finishes to complement your building’s aesthetic and functional needs, offering both practicality and style.'
    },
    {
        id: 6,
        name: 'Roofing Nails',
        image: product2,
        description: 'Roofing nails are a small but essential component of any roofing system, designed to securely fasten roofing sheets and ensure stability. These nails are crafted from high-grade, corrosion-resistant materials, making them suitable for use in various environmental conditions. They come with a smooth or textured shank for enhanced grip and a large flat head to prevent tearing or damaging the roofing material. Roofing nails are versatile and can be used with metal sheets, shingles, and tiles, providing a firm hold that stands the test of time. Whether you are constructing a new roof or performing repairs, these nails are your trusted partner in achieving a durable and safe roof structure.'
    },
    {
        id: 7,
        name: 'Aluminum Roofing Sheets',
        image: product3,
        description: 'Aluminum roofing sheets offer the perfect blend of lightweight performance and superior durability, making them a top choice for modern construction projects. These sheets are highly resistant to rust and corrosion, ensuring they maintain their appearance and strength over the years. Ideal for both residential and commercial buildings, aluminum sheets are energy-efficient, reflecting heat and keeping interiors cool even in hot climates. Their lightweight nature makes installation faster and easier, reducing labor costs and structural load. Additionally, aluminum sheets are environmentally friendly and recyclable, making them an excellent choice for sustainable construction. Available in a variety of finishes and colors, they combine functionality with sleek aesthetics, elevating the look of your building.'
    },
    {
        id: 8,
        name: 'Stone Coated Sheets',
        image: product4,
        description: 'Stone-coated roofing sheets are a premium roofing solution designed to add elegance and durability to any structure. These sheets are made from high-quality steel and coated with natural stone granules, offering a unique blend of strength and beauty. The stone coating provides an attractive finish while also enhancing resistance to harsh weather, including UV rays, heavy rains, and strong winds. Stone-coated sheets are available in a variety of styles and colors, allowing homeowners and builders to achieve their desired look while maintaining top-notch performance. They are engineered to resist fading, cracking, and rusting, ensuring your roof remains vibrant and functional for decades. Perfect for both modern and traditional buildings, stone-coated sheets are an investment in style and longevity.'
    },
];


function ProductDetails() {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));

    if (!product) {
        return <p className="text-center mt-10">Product not found.</p>;
    }

    return (
        <>
        <section
            className="min-h-screen bg-cover bg-center flex justify-center items-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 mt-40 mb-10  w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start">
                {/* Product Image */}
                <div className="w-full md:w-1/2">
                    <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                    <p className="text-lg text-gray-600">{product.description}</p>
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
          <span className="mr-2">📍</span> No 2 Abimbola street isolo industrial estate by IBWAS FILLING station isolo Lagos Nigeria.
        </li>
        <li className="flex items-center">
          <span className="mr-2">📞</span> +234 8023205544
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

export default ProductDetails;
