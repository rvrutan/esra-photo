import { useState } from 'react';

function Work() {
  const experiences = [
    {
      id: 1,
      title: "Medical Photographer",
      company: "Hospital Name",
      period: "2020 - Present",
      description: "Specialized in medical photography, documenting surgical procedures, and creating educational materials for medical professionals.",
      skills: ["Medical Photography", "Surgical Documentation", "Educational Materials"]
    },
    {
      id: 2,
      title: "Freelance Photographer",
      company: "Self-Employed",
      period: "2018 - 2020",
      description: "Worked with various clients on personal and commercial photography projects, specializing in portrait and event photography.",
      skills: ["Portrait Photography", "Event Coverage", "Commercial Photography"]
    },
    {
      id: 3,
      title: "Photography Assistant",
      company: "Studio Name",
      period: "2016 - 2018",
      description: "Assisted in studio photography sessions, managed equipment, and helped with post-production work.",
      skills: ["Studio Management", "Equipment Handling", "Post-Production"]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
          <p className="text-lg">My professional journey in photography</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{experience.title}</h2>
                    <p className="text-gray-600">{experience.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {experience.period}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{experience.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;