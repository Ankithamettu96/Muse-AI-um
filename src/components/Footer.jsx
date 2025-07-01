import React, { useState } from 'react';
import { Brain, Sparkles, Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Youtube,  } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleSocialClick = (platform) => {
    alert(`Opening ${platform} page. This would navigate to our ${platform} profile.`);
  };

  const handleLinkClick = (page) => {
    alert(`Opening ${page} page. This would navigate to the ${page} section.`);
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative">
                <Brain className="h-10 w-10 text-purple-400" />
                <Sparkles className="h-5 w-5 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Muse-AI-um
              </span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              The world's premier digital museum where artificial intelligence meets art and culture. 
              Discover the future of creativity through immersive exhibitions and interactive experiences.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('Linkedin')}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </button>
              <button 
                onClick={() => handleSocialClick('Twitter')}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
              >
                <Twitter className="h-5 w-5 text-white" />
              </button>
              <button 
                onClick={() => handleSocialClick('Facebook')}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
              >
                <Facebook className="h-5 w-5 text-white" />
              </button>
              <button 
                onClick={() => handleSocialClick('YouTube')}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
              >
                <Youtube className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('exhibitions')}
                  className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block text-left"
                >
                  Exhibitions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block text-left"
                >
                  About Us
                </button>
              </li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center text-white/70">
                <MapPin className="h-5 w-5 mr-3 text-purple-400" />
                <span>Machilipatnam, AndhraPradesh</span>
              </div>
              <div className="flex items-center text-white/70">
                <Mail className="h-5 w-5 mr-3 text-purple-400" />
                <span>TheInnovators1819@gmail.com</span>
              </div>
              <div className="flex items-center text-white/70">
                <Phone className="h-5 w-5 mr-3 text-purple-400" />
                <span>+91 8123456789</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-l-full px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-purple-400"
                  required
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-r-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  <Mail className="h-4 w-4 text-white" />
                </button>
              </form>
              {isSubscribed && (
                <p className="text-green-400 text-sm mt-2">Thank you for subscribing!</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © 2025 Muse-AI-um. All rights reserved. | Powered by Artificial Intelligence & Human Creativity
          </div>
          <div className="flex space-x-6 text-sm">
            <button 
              onClick={() => handleLinkClick('Privacy Policy')}
              className="text-white/50 hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleLinkClick('Terms of Service')}
              className="text-white/50 hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => handleLinkClick('Accessibility')}
              className="text-white/50 hover:text-white transition-colors"
            >
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;