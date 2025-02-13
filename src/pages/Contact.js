import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import backgroundImage from '../images/contact5.jpeg';
import contactImage from '../images/contact.webp';


function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    to_name:"HAG268",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_prqh4f9", // Replace with your Service ID
        "template_e5flt68", // Replace with your Template ID
        formData,
        "KBKrU3Pe_5jQx4OvV" // Replace with your Public Key
      )
      .then(
        (response) => {
          setSuccessMessage("Message sent successfully!");
          setErrorMessage("");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          setErrorMessage("Failed to send message. Please try again.");
          setSuccessMessage("");
        }
      );
  };
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
          {successMessage && (
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-100 text-red-800 px-4 py-2 rounded mb-4">
          {errorMessage}
        </div>
      )}
          <form className="space-y-4" onSubmit={sendEmail}>
            <input
                 type="text"
                 name="from_name"
                 id="from_name"
                 value={formData.from_name}
                 onChange={handleChange}
                 required
              placeholder="Name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
                  type="email"
                  name="from_email"
                  id="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
              placeholder="Email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <textarea
               name="message"
               id="message"
               rows="5"
               value={formData.message}
               onChange={handleChange}
               required
              placeholder="Message"
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

export default Contact;
