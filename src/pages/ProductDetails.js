import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import product1 from '../images/milanohag3.png';
import subproduct1 from '../images/milanoblack.jpeg';
import subproduct2 from '../images/milanoredandblack.jpg';
import subproduct3 from '../images/milanowine.jpg';
import product2 from '../images/nail2.jpg';
import subproduct21 from '../images/2-5-inch-mild-steel-wire-nails-500x500.webp';
import subproduct22 from '../images/black rung nails.avif';
import subproduct23 from '../images/150mm 6 inch round wire nails.jpg';
import product3 from '../images/bond4.jpg';
import subproduct31 from '../images/blackbond.jpg';
import subproduct32 from '../images/bluebond.webp';
import subproduct33 from '../images/greenbond.jpg';
import product4 from '../images/shingles43.jpeg';
import subproduct41 from '../images/blackandwhiteshingle.avif';
import subproduct42 from '../images/blackshingle.avif';
import subproduct43 from '../images/blackandwineshingle.jpg';
import product5 from '../images/ridgeshag2.avif';
import subproduct51 from '../images/ridges4.jpg';
import subproduct52 from '../images/ridges6.jpg';
import subproduct53 from '../images/ridges5.jpg';
import product6 from '../images/classicnew3.jpg';
import subproduct61 from '../images/subclassic2.jpg';
import subproduct62 from '../images/subclasic1.avif';
import subproduct63 from '../images/subclassic3.avif';
import product7 from '../images/sealant.jpg';
import subproduct71 from '../images/sealant1.jpg';
import subproduct72 from '../images/sealant2.jpeg';
import subproduct73 from '../images/seallant3.jpeg';
import product8 from '../images/flatsheetroof.webp';
import subproduct81 from '../images/subflat1.avif';
import subproduct82 from '../images/subflat2.avif';
import subproduct83 from '../images/subflat3.webp';
import { useParams } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Milano Roofing Sheets',
        image: product1,
        description: 'Milano roofing sheets are a premium type of stone-coated steel roofing designed to combine durability, elegance, and superior weather resistance. Made from high-quality galvanized steel and coated with natural stone chips, they offer the classic look of clay tiles with the strength of metal. Their interlocking design ensures a secure fit, preventing leaks and enhancing roof stability. These sheets are highly resistant to harsh weather, including heavy rains, strong winds, and extreme temperatures. They are also energy-efficient, reflecting heat to keep interiors cool, and environmentally friendly due to their recyclable materials and long lifespan.',
        related: [
          { name: 'Black Milano', image: subproduct1, description: 'Long-lasting and durable nails.' },
          { name: 'Black and Wine Milano', image: subproduct2, description: 'Weather-resistant roofing nails.' },
          { name: 'Wine Milano', image: subproduct3, description: 'Premium nails with superior hold.' }
        ]
    },
    {
        id: 2,
        name: 'Roofing Nails',
        image: product2,
        description: 'Roofing nails are a small but essential component of any roofing system, designed to securely fasten roofing sheets and ensure stability. These nails are crafted from high-grade, corrosion-resistant materials, making them suitable for use in various environmental conditions. They come with a smooth or textured shank for enhanced grip and a large flat head to prevent tearing or damaging the roofing material. Roofing nails are versatile and can be used with metal sheets, shingles, and tiles, providing a firm hold that stands the test of time. Whether you are constructing a new roof or performing repairs, these nails are your trusted partner in achieving a durable and safe roof structure.',
        related: [
          { name: 'Miled wire Steel Nails', image: subproduct21, description: 'Long-lasting and durable nails.' },
          { name: 'Black Rung Nails', image: subproduct22, description: 'Weather-resistant roofing nails.' },
          { name: 'Round Wire Nails', image: subproduct23, description: 'Premium nails with superior hold.' }
        ]
    },
    {
        id: 3,
        name: 'Bond Roofing Sheets',
        image: product3,
        description: 'Bond roofing sheets are a durable and stylish roofing solution designed to combine strength with aesthetic appeal. Made from high-quality steel and coated with stone chips, they provide excellent resistance to harsh weather conditions, including heavy rain, strong winds, and UV rays. Their interlocking design ensures a secure fit, reducing the risk of leaks and enhancing structural integrity. Available in various colors and textures, bond roofing sheets add a touch of elegance to both residential and commercial buildings while offering long-lasting protection.',
        related: [
          { name: 'Black Bond', image: subproduct31, description: 'Long-lasting and durable nails.' },
          { name: 'Blue Bond', image: subproduct32, description: 'Weather-resistant roofing nails.' },
          { name: 'Green Bond', image: subproduct33, description: 'Premium nails with superior hold.' }
        ]
    },
    {
        id: 4,
        name: 'Shingles Roofing Sheets',
        image: product4,
        description: 'Shingles roofing sheets offer a perfect blend of beauty and durability, making them a popular choice for modern and classic architecture. Made from high-quality materials with a textured finish, they provide excellent weather resistance, protecting against rain, wind, and UV exposure. Their lightweight nature ensures easy installation, while their wide range of colors and designs enhances the aesthetic appeal of any building. Shingles roofing sheets are ideal for homeowners seeking both elegance and long-lasting performance.',
        related: [
          { name: 'Black and White Shingle', image: subproduct41, description: 'Long-lasting and durable nails.' },
          { name: 'Black Shingle', image: subproduct42, description: 'Weather-resistant roofing nails.' },
          { name: 'Black and Wine Shingle', image: subproduct43, description: 'Premium nails with superior hold.' }
        ]
    },
    {
        id: 5,
        name: 'Ridges',
        image: product5,
        description: 'Roofing ridges are essential components that provide the finishing touch to a roof by sealing the joint where two slopes meet. Designed for durability and weather resistance, they help prevent water leakage, improve ventilation, and enhance the overall strength of the roofing system. Available in various materials and colors, roofing ridges not only protect but also add a polished look to any roof structure.',
        related: [
          { name: 'Brown Ridge', image: subproduct51, description: 'Long-lasting and durable nails.' },
          { name: 'Black Ridge', image: subproduct52, description: 'Weather-resistant roofing nails.' },
          { name: 'Red Ridge', image: subproduct53, description: 'Premium nails with superior hold.' }
        ]
    },
    {
        id: 6,
        name: 'Classic Roofing Sheet',
        image: product6,
        description: 'Classic roofing sheets offer a perfect combination of elegance and durability, making them a top choice for both residential and commercial buildings. Made from high-quality steel and coated with stone chips, they provide excellent weather resistance against rain, wind, and UV rays. Their timeless design enhances the aesthetic appeal of any structure while ensuring long-lasting protection. Classic roofing sheets are a reliable and stylish roofing solution for any project.',
        related: [
          { name: 'Blue Classic', image: subproduct61, description: 'Long-lasting and durable nails.' },
          { name: 'Black Classic', image: subproduct62, description: 'Weather-resistant roofing nails.' },
          { name: 'Wine Classic', image: subproduct63, description: 'Premium nails with superior hold.' }
        ]
    },
    {
        id: 7,
        name: 'Roofing Sealant',
        image: product7,
        description: 'Roofing sealant is a vital protective layer that helps prevent leaks and enhances the durability of a roof. Designed to withstand harsh weather conditions, it seals gaps, cracks, and joints, ensuring a watertight and secure roofing system. Ideal for various roofing materials, roofing sealants provide long-lasting protection against moisture, UV rays, and temperature changes, keeping your roof in top condition for years.',
        related: [
          { name: 'Big Size Sealant', image: subproduct71, description: 'Long-lasting and durable nails.' },
          { name: 'Medium Size Sealant', image: subproduct72, description: 'Weather-resistant roofing nails.' },
          { name: 'Small Size Seaalant', image: subproduct73, description: 'Premium nails with superior hold.' }
        ]
    },
    {
        id: 8,
        name: 'Flat Roofing Sheets',
        image: product8,
        description: 'Flat roofing sheets are a modern and versatile roofing solution, ideal for commercial, industrial, and residential buildings. Designed for durability and weather resistance, they provide a sleek, low-maintenance finish while ensuring excellent water drainage. Available in various materials like aluminum, steel, and PVC, flat roofing sheets offer energy efficiency, easy installation, and a contemporary aesthetic, making them a popular choice for modern architecture.',
        related: [
          { name: 'Gray Flaat Sheet', image: subproduct81, description: 'Long-lasting and durable nails.' },
          { name: 'Wine Flat Sheet', image: subproduct82, description: 'Weather-resistant roofing nails.' },
          { name: 'Green Flat Sheet', image: subproduct83, description: 'Premium nails with superior hold.' }
        ]
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
  className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
  style={{ backgroundImage: `url(${product.image})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Product Details */}
  <div className="relative z-20 text-center text-white p-8 max-w-2xl bg-black bg-opacity-40 rounded-lg shadow-lg">
    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
    <p className="text-lg">{product.description}</p>
  </div>
</section>

        <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Different Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.related.map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4 rounded" />
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                {/* <p className="text-gray-600">{item.description}</p> */}
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

export default ProductDetails;
