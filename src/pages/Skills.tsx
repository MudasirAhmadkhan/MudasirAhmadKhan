import React from 'react';
import { CheckCircle, Code, Smartphone, Globe, Database, Settings, Bug, FileText } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Testing Fundamentals',
      icon: CheckCircle,
      skills: [
        { name: 'Manual Testing', level: 75 },
        { name: 'Functional Testing', level: 70 },
        { name: 'Test Case Design', level: 80 },
        { name: 'Bug Reporting', level: 85 },
        { name: 'Regression Testing', level: 65 },
        { name: 'User Acceptance Testing', level: 60 }
      ]
    },
    {
      title: 'Testing Platforms',
      icon: Globe,
      skills: [
        { name: 'Web Testing', level: 75 },
        { name: 'Mobile Testing', level: 60 },
        { name: 'Cross-browser Testing', level: 65 },
        { name: 'Responsive Testing', level: 70 },
        { name: 'API Testing (Basic)', level: 40 },
        { name: 'Database Testing (Basic)', level: 35 }
      ]
    },
    {
      title: 'Tools & Software',
      icon: Settings,
      skills: [
        { name: 'JIRA', level: 70 },
        { name: 'TestRail', level: 50 },
        { name: 'Postman (Basic)', level: 40 },
        { name: 'Chrome DevTools', level: 65 },
        { name: 'Excel/Sheets', level: 80 },
        { name: 'Documentation Tools', level: 75 }
      ]
    },
    {
      title: 'Documentation Skills',
      icon: FileText,
      skills: [
        { name: 'Test Case Writing', level: 85 },
        { name: 'Bug Report Writing', level: 90 },
        { name: 'Test Documentation', level: 75 },
        { name: 'Requirements Review', level: 60 },
        { name: 'Test Planning (Basic)', level: 50 },
        { name: 'Status Reporting', level: 65 }
      ]
    }
  ];

  const learningGoals = [
    'Automation Testing Basics',
    'Selenium WebDriver',
    'API Testing (Advanced)',
    'Performance Testing',
    'Agile Testing Methods',
    'SQL for Testing',
    'Test Management Tools',
    'ISTQB Certification'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Technical Skills</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Building expertise in quality assurance and software testing
            </p>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-800 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <category.icon className="h-8 w-8 text-green-400 mr-3" />
                  <h2 className="text-xl font-bold text-white">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                        <span className="text-green-400 font-semibold text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Approaches */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Testing Approaches I Know</h2>
            <p className="text-gray-400 text-base">
              Basic testing methodologies I'm learning and applying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <Bug className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Black Box Testing</h3>
              <p className="text-gray-400 text-sm">
                Learning to test software functionality without knowing internal code structure
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <Code className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Boundary Testing</h3>
              <p className="text-gray-400 text-sm">
                Understanding how to test edge cases and boundary conditions
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <Smartphone className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Usability Testing</h3>
              <p className="text-gray-400 text-sm">
                Basic understanding of user experience and interface testing
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <Database className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Data Validation</h3>
              <p className="text-gray-400 text-sm">
                Learning to verify data accuracy and validation rules
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <Globe className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Compatibility Testing</h3>
              <p className="text-gray-400 text-sm">
                Testing software across different browsers and devices
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <Settings className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Smoke Testing</h3>
              <p className="text-gray-400 text-sm">
                Basic understanding of initial testing to verify core functionality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Goals */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What I'm Learning Next</h2>
            <p className="text-gray-400 text-base">
              Skills and technologies I'm planning to master
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningGoals.map((goal, index) => (
              <div key={index} className="bg-gray-800 hover:bg-green-600 p-4 rounded-lg text-center transition-colors duration-300 cursor-pointer">
                <span className="text-white font-medium text-sm">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Current Learning Focus</h2>
            <p className="text-gray-400 text-base">
              Areas where I'm actively improving my skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Test Case Design</h3>
              <p className="text-gray-400 text-sm">
                Improving my ability to write comprehensive and effective test cases
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <Bug className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Bug Reporting</h3>
              <p className="text-gray-400 text-sm">
                Learning to write clear, detailed bug reports with proper documentation
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <Settings className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Testing Tools</h3>
              <p className="text-gray-400 text-sm">
                Getting familiar with industry-standard testing and project management tools
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;