import { useState } from "react";

function Work() {
  const experiences = [
    {
      id: 1,
      title: "Freelance Photographer",
      company: "Self-Employed",
      period: "2018 - Present",
      description:
        "Worked with various clients on personal and commercial photography projects, specializing in portrait and event photography.",
      skills: [
        "Portrait Photography",
        "Event Coverage",
        "Commercial Photography",
      ],
    },
    {
      id: 2,
      title: "Medical Photographer",
      company: "Klinika Dent",
      period: "2020 - 2023",
      description:
        "Specialized in medical photography, documenting surgical procedures, and creating educational materials for medical professionals.",
      skills: [
        "Medical Photography",
        "Surgical Documentation",
        "Educational Materials",
      ],
    },

    {
      id: 3,
      title: "Photography Assistant",
      company: "Studio Name",
      period: "2016 - 2018",
      description:
        "Assisted in studio photography sessions, managed equipment, and helped with post-production work.",
      skills: ["Studio Management", "Equipment Handling", "Post-Production"],
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Work</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-black">
                      {experience.title}
                    </h2>
                    <p className="text-black">{experience.company}</p>
                  </div>
                  <span className="text-sm text-black px-3 py-1">
                    {experience.period}
                  </span>
                </div>

                <p className="text-black mb-4">{experience.description}</p>

                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-300 text-black px-3 py-1 rounded-full"
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
