import React from 'react';
import { Brain, Palette, Globe, Zap, Users, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'AI Artworks', value: '1,000+', icon: Palette },
    { label: 'Global Visitors', value: '0.5k+', icon: Globe },
    { label: 'AI Artists', value: '200+', icon: Brain },
    { label: 'Exhibitions', value: '50+', icon: Star }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Curation',
      description: 'Our proprietary AI algorithms curate and generate unique artistic experiences tailored to each visitor.'
    },
    {
      icon: Palette,
      title: 'Interactive Art Creation',
      description: 'Collaborate with AI to create your own masterpieces using cutting-edge generative models.'
    },
    {
      icon: Zap,
      title: 'Real-time Evolution',
      description: 'Watch artworks evolve and transform in real-time as AI learns from visitor interactions.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join a global community of art enthusiasts, AI researchers, and creative innovators.'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinMission = () => {
    alert('Thank you for your interest! This would open a membership signup form.');
  };

  const handleLearnMore = () => {
    alert('Loading detailed information about our mission and history...');
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              About Muse-AI-um
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              We are the world's first fully immersive digital museum dedicated to exploring the revolutionary 
              intersection of artificial intelligence and human creativity.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Founded in 2024, Muse-AI-um bridges the gap between cutting-edge technology and timeless artistic 
              expression. Our mission is to showcase how AI is not replacing human creativity, but amplifying it, 
              creating new forms of beauty that were previously impossible to imagine.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transform transition-all duration-300"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <IconComponent className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:text-pink-400 transition-colors" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              What Makes Us Unique
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 transform"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl mr-4 group-hover:scale-110 transform transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">{feature.title}</h4>
                  </div>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-purple-400/30">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h3>
            <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              "To create a world where artificial intelligence and human creativity dance together in perfect harmony, 
              inspiring new forms of beauty, understanding, and cultural expression that transcend the boundaries 
              of what we thought possible."
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                 onClick={() => scrollToSection('home')} 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 transform hover:shadow-2xl"
              >
                Join Our Mission
              </button>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;