import React from 'react';

function Skills() {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript (ES6)', 'Bootstrap', 'Tailwind CSS',
    'React.js', 'React Router', 'React Query', 'Axios', 'Redux',
    'REST API', 'Ant Design', 'Material UI', 'VSCode', 'Git & GitHub',
    'MySQL'
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map(skill => (
          <div key={skill} className="bg-white p-4 rounded shadow-md text-center">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
