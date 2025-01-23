import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/hag268prod3.jpg';
import product1 from '../images/hag26816.png';
import product2 from '../images/hag268nail.jpg';
import product3 from '../images/hag26817.avif';
import product4 from '../images/hag26815.avif';

const products = [
  { id: 1, name: 'Corrugated Roofing Sheets', image: product1 },
  { id: 2, name: 'Roofing Nails', image: product2 },
  { id: 3, name: 'Aluminum Roofing Sheets', image: product3 },
  { id: 4, name: 'Stone Coated Sheets', image: product4 },
  { id: 5, name: 'Corrugated Roofing Sheets', image: product1 },
  { id: 6, name: 'Roofing Nails', image: product2 },
  { id: 7, name: 'Aluminum Roofing Sheets', image: product3 },
  { id: 8, name: 'Stone Coated Sheets', image: product4 },
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
            Discover a wide range of high-quality roofing materials tailored to suit your building needs. From durable metal sheets to elegant clay tiles, our products combine style, strength, and reliability to ensure your structure stands the test of time.
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
    </>
  );
}

export default Products;
