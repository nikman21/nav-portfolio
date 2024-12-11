'use client';
import React, { useState } from 'react';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setMessage('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const error = await response.json();
        setMessage(`Failed to send message: ${error.message}`);
      }
    } catch (error) {
      setMessage(`Failed to send message: ${error.toString()}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-red-900 text-white">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Let's Connect</h2>
        <form
          className="contact-form bg-black/50 rounded-3xl p-8 shadow-lg backdrop-blur-sm"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 border-b-2 border-gray-300 bg-transparent focus:border-red-500 transition-colors duration-300 outline-none text-lg placeholder-gray-200 text-white"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 border-b-2 border-gray-300 bg-transparent focus:border-red-500 transition-colors duration-300 outline-none text-lg placeholder-gray-200 text-white"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-4 border-b-2 border-gray-300 bg-transparent focus:border-red-500 transition-colors duration-300 outline-none text-lg placeholder-gray-200 text-white resize-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-4 bg-red-600 text-white rounded-full text-lg font-semibold hover:bg-red-700 disabled:bg-red-300 transition-colors duration-300 shadow-md"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {message && (
            <p className="mt-4 text-center text-lg font-medium text-gray-200">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;

