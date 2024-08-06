import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce App',
      description: 'React front end with an Express.js and MongoDB back end. Secure login, product categories, and add-to-cart functionality.',
      link: 'https://github.com/satyaprakash0208/E-Commerce'
    },
    {
      title: 'MyTube',
      description: 'Ad-free YouTube-inspired web application leveraging the YouTube API from RapidAPI and Material UI for a sleek, modern interface.',
      link: 'https://github.com/satyaprakash0208/My-Tube'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <div key={project.title} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline mt-4 block">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
