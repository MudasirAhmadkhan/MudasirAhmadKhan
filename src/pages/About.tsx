import React from 'react';
import { CheckCircle, Target, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Attention to Detail',
      description: 'Careful examination of every feature and functionality'
    },
    {
      icon: CheckCircle,
      title: 'Quality Focus',
      description: 'Committed to learning and delivering quality results'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Eager to collaborate and learn from experienced team members'
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      description: 'Always seeking to improve my testing skills and knowledge'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Aspiring Quality Assurance Engineer passionate about software testing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">My Journey</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-base leading-relaxed">
                  As an aspiring Quality Assurance Engineer, I bring enthusiasm and dedication to software testing 
                  with my motto: "I test, I break, I report, I protect." This philosophy drives my approach 
                  to learning and ensuring software quality.
                </p>
                <p className="text-base leading-relaxed">
                  With over 1 year of experience in the field, I have started contributing to projects 
                  and learning the fundamentals of quality assurance. My focus is on manual testing, 
                  test case design, and bug reporting.
                </p>
                <p className="text-base leading-relaxed">
                  I am passionate about learning new technologies and methodologies in the QA field, 
                  constantly updating my skills to grow as a professional tester.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-lg overflow-hidden border-4 border-green-400 shadow-2xl">
                  <img
                    src="/WhatsApp Image 2024-11-19 at 19.32.04 (1).jpeg"
                    alt="Mudasir Ahmad Khan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">My Core Values</h2>
            <p className="text-gray-400 text-base">
              The principles that guide my approach to quality assurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-600 p-4 rounded-full">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">My Learning Journey</h2>
            <p className="text-gray-400 text-base">
              My path in Quality Assurance Engineering
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-400"></div>
              
              <div className="space-y-8">
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full border-4 border-black"></div>
                  <div className="ml-6">
                    <h3 className="text-lg font-bold text-white">Junior QA Engineer</h3>
                    <p className="text-green-400 font-medium">2023 - Present</p>
                    <p className="text-gray-400 mt-2 text-sm">
                      Learning manual testing fundamentals, test case design, and bug reporting. 
                      Gaining hands-on experience with various testing tools and methodologies.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full border-4 border-black"></div>
                  <div className="ml-6">
                    <h3 className="text-lg font-bold text-white">QA Training & Certification</h3>
                    <p className="text-green-400 font-medium">2022 - 2023</p>
                    <p className="text-gray-400 mt-2 text-sm">
                      Completed foundational training in software testing principles and 
                      started building practical skills in quality assurance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Beyond Work</h2>
            <p className="text-gray-400 text-base">
              What drives me outside of professional responsibilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-3">Learning & Growth</h3>
              <p className="text-gray-400 text-sm">
                Continuously exploring new testing tools and methodologies 
                to enhance my skills and knowledge in quality assurance.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-3">Technology Interest</h3>
              <p className="text-gray-400 text-sm">
                Interested in emerging technologies and their impact on software development 
                and testing processes.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-3">Problem Solving</h3>
              <p className="text-gray-400 text-sm">
                Enjoy finding bugs and issues in software applications 
                and learning how to report them effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;