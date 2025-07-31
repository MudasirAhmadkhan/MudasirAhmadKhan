import React from 'react';
import { Calendar, CheckCircle, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website Testing',
      category: 'Web Application',
      duration: '2 months',
      team: '3 members',
      description: 'Participated in testing a basic e-commerce website including user registration, product browsing, and shopping cart functionality.',
      responsibilities: [
        'Created 100+ test cases for user workflows',
        'Performed manual testing on different browsers',
        'Tested mobile responsiveness',
        'Identified and reported 20+ bugs with clear steps',
        'Participated in regression testing'
      ],
      technologies: ['Manual Testing', 'Web Testing', 'Mobile Testing', 'Cross-browser Testing'],
      outcomes: [
        'Successfully completed first testing project',
        'Learned proper bug reporting techniques',
        'Gained experience with test case writing',
        'Improved understanding of user workflows'
      ],
      status: 'Completed'
    },
    {
      title: 'Mobile App Basic Testing',
      category: 'Mobile Application',
      duration: '1 month',
      team: '5 members',
      description: 'Assisted in testing a simple mobile application with basic features like login, profile management, and content viewing.',
      responsibilities: [
        'Tested app functionality on Android devices',
        'Checked user interface elements',
        'Verified basic user flows',
        'Documented found issues',
        'Participated in team testing sessions'
      ],
      technologies: ['Mobile Testing', 'Android Testing', 'UI Testing', 'Functional Testing'],
      outcomes: [
        'First experience with mobile app testing',
        'Learned mobile-specific testing approaches',
        'Understood device compatibility basics',
        'Improved attention to detail'
      ],
      status: 'Completed'
    },
    {
      title: 'Learning Management System',
      category: 'Web Application',
      duration: '1.5 months',
      team: '6 members',
      description: 'Currently participating in testing a simple learning platform with course viewing and basic student features.',
      responsibilities: [
        'Testing course content display',
        'Verifying student login and registration',
        'Checking basic navigation flows',
        'Learning to write detailed test cases',
        'Collaborating with senior testers'
      ],
      technologies: ['Web Testing', 'Functional Testing', 'User Testing', 'Documentation'],
      outcomes: [
        'Gaining experience with educational software',
        'Learning team collaboration in testing',
        'Improving test documentation skills',
        'Understanding user-centered testing'
      ],
      status: 'In Progress'
    }
  ];

  const achievements = [
    {
      metric: '5+',
      label: 'Projects Participated',
      description: 'Gained hands-on experience across different types of applications'
    },
    {
      metric: '100+',
      label: 'Test Cases Written',
      description: 'Created test cases for various features and functionalities'
    },
    {
      metric: '50+',
      label: 'Bugs Found',
      description: 'Identified issues and learned proper reporting techniques'
    },
    {
      metric: '3',
      label: 'Testing Tools Used',
      description: 'Gained experience with basic testing and documentation tools'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">My Testing Experience</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Projects I've worked on as I build my QA skills and experience
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{achievement.metric}</div>
                <div className="text-lg font-semibold text-white mb-2">{achievement.label}</div>
                <div className="text-gray-400 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Projects I've Worked On</h2>
            <p className="text-gray-400 text-base">
              Learning experiences and contributions to testing projects
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <h3 className="text-xl font-bold text-white mr-4">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-green-600 text-green-100' 
                            : 'bg-blue-600 text-blue-100'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{project.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span className="text-sm">{project.team}</span>
                        </div>
                        <div className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                          {project.category}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6 text-sm">{project.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-base font-semibold text-white mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                        My Contributions
                      </h4>
                      <ul className="space-y-2">
                        {project.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start text-sm">
                            <span className="text-green-400 mr-2 mt-1">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h4 className="text-base font-semibold text-white mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                        What I Learned
                      </h4>
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start text-sm">
                            <span className="text-green-400 mr-2 mt-1">•</span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8">
                    <h4 className="text-base font-semibold text-white mb-4">Testing Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">My Learning Approach</h2>
            <p className="text-gray-400 text-base">
              How I approach learning and contributing to testing projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Observe & Learn</h3>
              <p className="text-gray-400 text-sm">
                Watch experienced testers and learn from their approaches and techniques
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Practice & Apply</h3>
              <p className="text-gray-400 text-sm">
                Apply learned concepts to real projects and practice writing test cases
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Document & Report</h3>
              <p className="text-gray-400 text-sm">
                Focus on clear documentation and detailed bug reporting to improve communication
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Seek Feedback</h3>
              <p className="text-gray-400 text-sm">
                Actively seek feedback from senior team members to continuously improve
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
