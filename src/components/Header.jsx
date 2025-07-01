// components/Header.js
import React, { useState } from 'react';
import { Menu, X, Palette, Brain, Sparkles, User, LogOut } from 'lucide-react';

const Header = ({ user, onAuthClick, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <Brain className="h-8 w-8 text-purple-400" />
              <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Muse-AI-um
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white/90 hover:text-purple-300 transition-all duration-300 hover:scale-105 transform relative group"
            >
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </button>

            <button 
              onClick={() => scrollToSection('exhibitions')}
              className="text-white/90 hover:text-purple-300 transition-all duration-300 hover:scale-105 transform relative group"
            >
              Exhibitions
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </button>

            {/* AiCreator link moved here as 'Create' */}
            <button 
              onClick={() => scrollToSection('create')}
              className="text-white/90 hover:text-purple-300 transition-all duration-300 hover:scale-105 transform relative group"
            >
              Create
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </button>

            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white/90 hover:text-purple-300 transition-all duration-300 hover:scale-105 transform relative group"
            >
              Gallery
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </button>

            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/90 hover:text-purple-300 transition-all duration-300 hover:scale-105 transform relative group"
            >
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-200"
                >
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-white text-sm">{user.name}</span>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/20 rounded-xl py-2">
                    <button className="w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </button>
                    <button 
                      onClick={onLogout}
                      className="w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center space-x-2"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={onAuthClick}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 transform"
              >
                Visit Now
              </button>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/20">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white/90 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('exhibitions')}
                className="text-white/90 hover:text-white transition-colors text-left"
              >
                Exhibitions
              </button>
              <button 
                onClick={() => scrollToSection('create')}
                className="text-white/90 hover:text-purple-300 transition-colors text-left py-3 px-4 rounded-xl hover:bg-purple-500/20"
              >
                Create
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-white/90 hover:text-white transition-colors text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/90 hover:text-white transition-colors text-left"
              >
                About
              </button>
              
              {user ? (
                <div className="space-y-2 pt-2 border-t border-white/20">
                  <div className="flex items-center space-x-2 text-white">
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{user.name}</span>
                  </div>
                  <button 
                    onClick={onLogout}
                    className="text-white/90 hover:text-white transition-colors text-left flex items-center space-x-2"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <button 
                  onClick={onAuthClick}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 mt-2"
                >
                  Visit Now
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;