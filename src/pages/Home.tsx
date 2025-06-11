import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Linkedin, Award, Users, CheckCircle } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '6Months+' },
    { icon: Users, label: 'Projects Worked On', value: '2' },
    { icon: CheckCircle, label: 'Test Cases Created', value: '50+' },
  ];

  const skills = [
    'Manual Testing',
    'Test Case Design',
    'Bug Reporting',
    'Web Testing',
    'Mobile Testing',
    'Functional Testing',
    'Regression Testing',
    'User Acceptance Testing'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  <span className="text-white">Mudasir</span>
                  <br />
                  <span className="text-green-400">Ahmad Khan</span>
                </h1>
                <div className="text-lg lg:text-xl text-gray-300 mb-6">
                  Quality Assurance Engineer
                </div>
                <div className="text-xl lg:text-2xl font-semibold text-green-400 mb-8 italic">
                  "I test, I break, I report, I protect"
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 mb-8">
                <a
                  href="mailto:mudasir.khan.sqa@gmail.com"
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mudasir-ahmad-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                <span>Learn More About Me</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-green-400 shadow-2xl">
                  <img
                    src="/WhatsApp Image 2024-11-19 at 19.32.04 (1).jpeg"
                    alt="Mudasir Ahmad Khan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
                  QA Engineer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core QA Skills</h2>
            <p className="text-gray-400 text-base">
              Building expertise in software quality assurance
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:bg-green-600 px-4 py-3 rounded-lg text-center transition-colors duration-300 cursor-pointer"
              >
                <span className="text-white font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/skills"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <span>View All Skills</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start My QA Journey?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Let's work together to ensure quality in your software projects
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            <span>Get In Touch</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;