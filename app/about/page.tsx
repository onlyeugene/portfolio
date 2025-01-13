import React from 'react';

const AboutPage = () => {
  return (
    <div className="p-8 min-h-screen">
      <div className="">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold uppercase tracking-wide text-white">
            About Me
          </h1>
          <hr className="w-20 border-4 border-white mt-4 mx-auto rounded" />
        </div>

        {/* Introduction */}
        <div className="mt-10">
          <p className="text-xl leading-relaxed text-white">
            Hello! My name is <span className="font-bold text-white">Eugene Okogun</span>. 
            I am a passionate <span className="font-semibold text-indigo-600">Full-Stack Developer</span> with expertise in modern web technologies 
            such as <span className="text-indigo-600">HTML, CSS, SCSS, JavaScript, TypeScript, React, Next.js and React Native</span>. My journey in software 
            development has been defined by my dedication to creating intuitive, engaging, and highly performant web applications that meet 
            both business and user needs.
          </p>
        </div>

        {/* Key Skills Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-white">Key Skills</h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-lg text-white">
            <li>
              Proficient in building responsive and pixel-perfect web interfaces using <span className="text-indigo-600">React</span> , <span className="text-indigo-600">Next.js</span> and <span className="text-indigo-600"> React Native</span>.
            </li>
            <li>
              Strong expertise in integrating RESTful APIs, collaborating closely with backend teams to ensure seamless data flow.
            </li>
            <li>
              Experienced in implementing high-fidelity UI/UX designs into production-ready applications.
            </li>
            <li>
              Adept at writing clean, maintainable, and scalable code, with a strong focus on performance optimization.
            </li>
            <li>
              Skilled in team collaboration, agile workflows, and performing thorough code reviews.
            </li>
            <li>
              Solid knowledge of frontend engineering, accessibility standards, and best practices.
            </li>
          </ul>
        </div>

        {/* Professional Experience */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-white">Professional Experience</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-indigo-600">Frontend Engineer</h3>
              <p className="text-white">Tech Studio Academy | Oct 2023 - Present</p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-white">
                <li>
                  Collaborated with UI/UX designers to implement responsive and pixel-perfect components.
                </li>
                <li>
                  Worked closely with backend engineers to integrate RESTful APIs, ensuring smooth data handling.
                </li>
                <li>
                  Participated in code reviews to ensure high-quality, performant, and maintainable code.
                </li>
                <li>
                  Contributed to an agile development environment through daily stand-ups, sprint planning, and retrospectives.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-indigo-600">Frontend Engineer (Internship)</h3>
              <p className="text-white">HNGi 11 | July 2024 - Aug 2024</p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-white">
                <li>
                  Delivered high-quality frontend code for web applications under tight deadlines.
                </li>
                <li>
                  Enhanced user experiences by optimizing web interfaces for performance and usability.
                </li>
                <li>
                  Gained hands-on experience working in a fast-paced, collaborative team environment.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-indigo-600">Frontend Engineer</h3>
              <p className="text-white">Link Technologies || Nov 2024 - Present </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-white">
                <li>
                  Delivered high-quality frontend code for web applications under tight deadlines.
                </li>
                <li>
                  Enhanced user experiences by optimizing web interfaces for performance and usability.
                </li>
                <li>
                  Gained hands-on experience working in a fast-paced, collaborative team environment.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-white">Notable Projects</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-indigo-600">Tedible Website</h3>
              <p className="text-white mt-2">
                A responsive single-page website outlining personal tech goals, built using HTML, CSS, and JavaScript. 
                Deployed on <a href="http://tedible-app.vercel.app" className="text-indigo-600 underline">Vercel</a>.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-indigo-600">Link Sharing App</h3>
              <p className="text-white mt-2">
                A full-stack Next.js app with Firebase integration, featuring CRUD operations, drag-and-drop functionality, 
                and user authentication. View it <a href="https://link-sharing-omega.vercel.app" className="text-indigo-600 underline">here</a>.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-indigo-600">Online Store</h3>
              <p className="text-white mt-2">
                A streamlined e-commerce platform focusing on fast shopping experiences. Explore it 
                <a href="https://john-turner-nine.vercel.app" className="text-indigo-600 underline"> here</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Education and Certifications */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-white">Education & Certifications</h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-lg text-white">
            <li>BSc (Hons.) in Statistics - Federal University Otuoke, Bayelsa State (2016 - 2021)</li>
            <li>Certificate in Data Science - January 2022 - March 2022</li>
            <li>Certificate in Frontend Engineering - October 2023 - March 2024 (Tech Studio Academy)</li>
            <li>Certificate in Backend Engineering - July 2024 - August 2024 (HNGi 11)</li>
          </ul>
        </div>

        {/* Interests */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-white">Interests</h2>
          <p className="text-lg leading-relaxed text-white mt-4">
            I have a deep passion for Web Development, Data Analytics, UI/UX Design, and Cloud Computing. These fields fuel my curiosity and 
            drive my mission to deliver innovative solutions in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
