import React from "react";

const Resume = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-1">
          <header className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">Jane Smith</h1>
            <p className="text-xl text-gray-600">Aspiring Full Stack Developer</p>
            <p className="text-sm text-gray-500 mt-2">
              janesmith@example.com | 123-456-7890 | linkedin.com/in/janesmith
            </p>
          </header>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
            <ul className="text-gray-600">
              <li>Email: janesmith@example.com</li>
              <li>Phone: 123-456-7890</li>
              <li>LinkedIn: linkedin.com/in/janesmith</li>
              <li>GitHub: github.com/janesmith</li>
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <div>JavaScript (ES6)</div>
              <div>React.js</div>
              <div>Node.js</div>
              <div>Express.js</div>
              <div>MongoDB</div>
              <div>Tailwind CSS</div>
              <div>Git</div>
              <div>HTML5</div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Software Development Intern</h3>
                <p className="text-gray-600">XYZ Company, Jun 2023 - Aug 2023</p>
                <ul className="list-disc ml-6 text-gray-600">
                  <li>Developed and maintained web applications using React.js and Node.js</li>
                  <li>Assisted in database design and queries with MongoDB</li>
                  <li>Collaborated with teams to implement new features</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-700">Bachelor of Science in Computer Science</p>
                <p className="text-gray-600">University of ABC, 2020 - 2024</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Personal Portfolio Website</h3>
                <p className="text-gray-600">A personal website showcasing my projects and skills. Built with React, Tailwind CSS, and hosted on GitHub Pages.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Task Manager App</h3>
                <p className="text-gray-600">A full-stack web application to manage tasks and to-do lists. Built with React for the frontend, Node.js for the backend, and MongoDB for database.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <footer className="text-center text-gray-500 mt-8">
        <p>&copy; 2024 Jane Smith</p>
      </footer>
    </div>
  );
};

export default Resume;
