import React from 'react';

function Contact() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
      <div className="text-center">
        <p className="text-gray-700">Email: <a href="mailto:satyaprakashsingh0208@gmail.com" className="text-blue-500 hover:underline">satyaprakashsingh0208@gmail.com</a></p>
        <p className="text-gray-700">Phone: +919554323200</p>
        <p className="text-gray-700">Location: Noida, Uttar Pradesh</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/satyaprakash0208" className="text-blue-500 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/satyaprakashsingh0208/" className="text-blue-500 hover:underline">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
