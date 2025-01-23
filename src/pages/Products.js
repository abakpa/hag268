import React from 'react';
import backgroundImage from '../images/hag268prod3.jpg';


const products = [
  { id: 1, name: 'Corrugated Roofing Sheets', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Aluminum Roofing Sheets', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Stone Coated Sheets', image: 'https://via.placeholder.com/300' },
  { id: 4, name: 'Roofing Nails', image: 'https://via.placeholder.com/300' },
];

function Products() {
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
      Explore Our Premium Roofing Solutions
      </h1>
      <p className="text-lg">
      Discover a wide range of high-quality roofing materials tailored to suit your building needs. From durable metal sheets to elegant clay tiles, our products combine style, strength, and reliability to ensure your structure stands the test of time.
      </p>
    </div>
  </section>
    <section className="bg-gray-100 py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4 text-center">
              <img src={product.image} alt={product.name} className="mb-4 w-full h-48 object-cover rounded" />
              <h3 className="text-xl font-bold">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Products;
