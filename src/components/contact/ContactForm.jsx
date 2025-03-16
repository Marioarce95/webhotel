import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6">Contactar al anunciante</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex items-center space-x-2 text-gray-700 mb-2">
              <UserIcon className="h-5 w-5" />
              <span>Nombre</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zonaprop-blue focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700 mb-2">
              <EnvelopeIcon className="h-5 w-5" />
              <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zonaprop-blue focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700 mb-2">
              <PhoneIcon className="h-5 w-5" />
              <span>Teléfono</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zonaprop-blue focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 mb-2 block">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zonaprop-blue focus:border-transparent"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-zonaprop-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Contactar al anunciante
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;