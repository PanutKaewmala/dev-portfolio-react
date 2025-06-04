const experiences = [
  {
    role: "Frontend Developer",
    company: "Creative Studio",
    period: "2022 - Present",
    description: "Developed responsive web applications using React and Tailwind CSS. Worked closely with designers and backend developers to build a seamless UX."
  },
  {
    role: "UI/UX Designer",
    company: "Freelance",
    period: "2020 - 2022",
    description: "Designed wireframes, prototypes, and complete UIs for web and mobile apps. Focused on accessibility and intuitive interfaces."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border-l-4 border-indigo-500"
            >
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600 italic">{exp.company} • {exp.period}</p>
              <p className="mt-3 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
