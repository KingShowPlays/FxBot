"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Github, Linkedin, Twitter, Rocket, Zap, Palette, Users } from 'lucide-react'

function Team() {
  const teamMembers = [
    {
      id: 1,
      image: 'https://i.pravatar.cc/300?img=8',
      name: 'Alex Rivera',
      role: 'Senior Full Stack Developer',
      handle: '@alexrivera',
      experience: '8+ years',
      specialties: ['React', 'Node.js', 'TypeScript'],
      borderColor: 'border-indigo-500',
      gradientFrom: 'from-indigo-500',
      gradientTo: 'to-purple-600',
      social: {
        github: 'https://github.com/',
        linkedin: 'https://linkedin.com/in/',
        twitter: 'https://twitter.com/'
      }
    },
    {
      id: 2,
      image: 'https://i.pravatar.cc/300?img=11',
      name: 'Jordan Chen',
      role: 'Lead DevOps Engineer',
      handle: '@jordanchen',
      experience: '6+ years',
      specialties: ['AWS', 'Docker', 'Kubernetes'],
      borderColor: 'border-emerald-500',
      gradientFrom: 'from-emerald-500',
      gradientTo: 'to-teal-600',
      social: {
        github: 'https://github.com/',
        linkedin: 'https://linkedin.com/in/'
      }
    },
    {
      id: 3,
      image: 'https://i.pravatar.cc/300?img=3',
      name: 'Morgan Blake',
      role: 'Creative Director & UI/UX Designer',
      handle: '@morganblake',
      experience: '7+ years',
      specialties: ['Figma', 'Design Systems', 'User Research'],
      borderColor: 'border-amber-500',
      gradientFrom: 'from-amber-500',
      gradientTo: 'to-orange-600',
      social: {
        linkedin: 'https://linkedin.com/in/',
        twitter: 'https://twitter.com/'
      }
    },
    {
      id: 4,
      image: 'https://i.pravatar.cc/300?img=16',
      name: 'Casey Park',
      role: 'Senior Data Scientist',
      handle: '@caseypark',
      experience: '5+ years',
      specialties: ['Python', 'Machine Learning', 'Analytics'],
      borderColor: 'border-red-500',
      gradientFrom: 'from-red-500',
      gradientTo: 'to-pink-600',
      social: {
        github: 'https://github.com/',
        linkedin: 'https://linkedin.com/in/'
      }
    },
    {
      id: 5,
      image: 'https://i.pravatar.cc/300?img=25',
      name: 'Sam Kim',
      role: 'Mobile Development Lead',
      handle: '@thesamkim',
      experience: '6+ years',
      specialties: ['React Native', 'Flutter', 'iOS/Android'],
      borderColor: 'border-violet-500',
      gradientFrom: 'from-violet-500',
      gradientTo: 'to-purple-600',
      social: {
        github: 'https://github.com/',
        twitter: 'https://twitter.com/'
      }
    },
    {
      id: 6,
      image: 'https://i.pravatar.cc/300?img=60',
      name: 'Tyler Rodriguez',
      role: 'Principal Cloud Architect',
      handle: '@tylerrod',
      experience: '10+ years',
      specialties: ['AWS', 'Azure', 'Infrastructure'],
      borderColor: 'border-cyan-500',
      gradientFrom: 'from-cyan-500',
      gradientTo: 'to-blue-600',
      social: {
        github: 'https://github.com/',
        linkedin: 'https://linkedin.com/in/',
        twitter: 'https://twitter.com/'
      }
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 bg-gray-900">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-wider bg-indigo-400/10 px-4 py-2 rounded-full border border-indigo-400/20">
              Our Team
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Meet the Innovators
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Behind Avulex
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together decades of experience in cutting-edge technology, 
            creative design, and strategic innovation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-white">50+</span>
              <p className="text-sm text-gray-400">Years Combined Experience</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-white">100+</span>
              <p className="text-sm text-gray-400">Projects Delivered</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-white">24/7</span>
              <p className="text-sm text-gray-400">Support & Innovation</p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member) => (
            <Card 
              key={member.id}
              className={`group relative overflow-hidden bg-transparent border-gray-700/50 hover:${member.borderColor} transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer`}
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative overflow-hidden h-96">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.gradientFrom} ${member.gradientTo} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />
                  
                  {/* Social Links - Show on Hover */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    {member.social.github && (
                      <a 
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Twitter className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>

                  {/* Content Overlay - Always visible gradient at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/80">
                    {/* Name and Handle - Start at bottom, move up on hover */}
                    <div className="p-6 pb-4 transition-all duration-500 group-hover:pb-2">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-gray-300 text-sm">{member.handle}</p>
                    </div>

                    {/* Role and Experience - Hidden, slides up on hover */}
                    <div className="px-6 pb-6 space-y-3 max-h-0 opacity-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500">
                      <div>
                        <p className="text-white font-medium">{member.role}</p>
                        <p className="text-gray-300 text-sm">{member.experience} experience</p>
                      </div>

                      {/* Specialties */}
                      <div>
                        <p className="text-gray-300 text-xs uppercase tracking-wider mb-2">Specialties</p>
                        <div className="flex flex-wrap gap-1">
                          {member.specialties.map((specialty, index) => (
                            <span 
                              key={index}
                              className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} text-white`}
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Values */}
        <div className="text-center">
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Each team member brings unique expertise and passion to every project. 
            Hover over the profiles above to learn more about our talented professionals.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-3">
                <Rocket className="w-12 h-12 text-indigo-500" />
              </div>
              <h4 className="text-white font-semibold mb-1">Innovation</h4>
              <p className="text-gray-400 text-sm">Cutting-edge solutions</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-3">
                <Zap className="w-12 h-12 text-emerald-500" />
              </div>
              <h4 className="text-white font-semibold mb-1">Performance</h4>
              <p className="text-gray-400 text-sm">Optimized delivery</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-3">
                <Palette className="w-12 h-12 text-orange-500" />
              </div>
              <h4 className="text-white font-semibold mb-1">Design</h4>
              <p className="text-gray-400 text-sm">Beautiful interfaces</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-3">
                <Users className="w-12 h-12 text-cyan-500" />
              </div>
              <h4 className="text-white font-semibold mb-1">Collaboration</h4>
              <p className="text-gray-400 text-sm">Seamless teamwork</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team