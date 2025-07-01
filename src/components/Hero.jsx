import React, { useState } from 'react';
import { ArrowRight, Sparkles, Cpu, Palette, X, Play, Mail, CheckCircle, Brain, Zap, Eye } from 'lucide-react';

const Hero = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
    // Reset email form when closing modal
    setEmail('');
    setEmailError('');
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setEmailError('');

    // Simulate API call for feedback submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Auto close modal after success
      setTimeout(() => {
        closeModal();
      }, 3000);
    }, 2000);
  };

  const modalContent = {
    'ai-art': {
      title: 'AI-Generated Art',
      icon: Cpu,
      content: (
        <div className="space-y-6">
          <p className="text-white/80 text-lg leading-relaxed">
            Discover how artificial intelligence is revolutionizing the art world by creating stunning visual masterpieces 
            that challenge our understanding of creativity and artistic expression.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-3">Neural Networks</h4>
              <p className="text-white/70">
                Advanced neural networks analyze millions of artworks to understand patterns, styles, and techniques, 
                then generate entirely new pieces that blend multiple artistic influences.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-3">Style Transfer</h4>
              <p className="text-white/70">
                AI can take the style of one artwork and apply it to another image, creating unique hybrid pieces 
                that merge different artistic movements and techniques.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => { closeModal(); scrollToSection('gallery'); }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Explore Gallery
            </button>
            <button 
              onClick={() => { closeModal(); scrollToSection('create'); }}
              className="border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Create Art
            </button>
          </div>
        </div>
      )
    },
    'cultural-impact': {
      title: 'Cultural Impact',
      icon: Palette,
      content: (
        <div className="space-y-6">
          <p className="text-white/80 text-lg leading-relaxed">
            AI is transforming cultural expression by democratizing art creation, preserving cultural heritage, 
            and enabling new forms of collaborative creativity between humans and machines.
          </p>
          <div className="space-y-4">
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-3">Democratization of Art</h4>
              <p className="text-white/70">
                AI tools are making artistic creation accessible to everyone, regardless of traditional training or skill level, 
                opening up new possibilities for creative expression across all demographics.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-3">Cultural Preservation</h4>
              <p className="text-white/70">
                Machine learning algorithms help preserve and restore historical artworks, analyze cultural patterns, 
                and even recreate lost pieces based on historical data and artistic styles.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-3">New Art Movements</h4>
              <p className="text-white/70">
                AI is spawning entirely new artistic movements and genres, from generative art to algorithmic poetry, 
                creating fresh cultural narratives and aesthetic experiences.
              </p>
            </div>
          </div>
          <button 
            onClick={() => { closeModal(); scrollToSection('discover'); }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Discover More
          </button>
        </div>
      )
    },
    'future-vision': {
      title: 'Join the AI Art Revolution',
      icon: Mail,
      content: (
        <div className="space-y-6">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Shape the Future of AI Art</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  The future of AI and creativity promises revolutionary developments. Join our community to be part of this 
                  transformation and receive exclusive insights into the future of digital art and culture.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center space-x-2">
                    <Brain className="h-6 w-6 text-purple-400" />
                    <span>Collaborative Creation</span>
                  </h4>
                  <p className="text-white/70">
                    Future AI will work alongside human artists in real-time, offering suggestions and helping bring 
                    creative visions to life through seamless collaboration.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-400/30">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-cyan-400" />
                    <span>Emotional AI</span>
                  </h4>
                  <p className="text-white/70">
                    Next-generation AI will understand and express complex emotions, creating art that resonates 
                    on a deeper emotional level.
                  </p>
                </div>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    Join the Future - Share Your Email for Exclusive Updates
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError('');
                      }}
                      className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-4 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all text-lg"
                      placeholder="Enter your email to join the AI art revolution"
                      disabled={isSubmitting}
                    />
                  </div>
                  {emailError && (
                    <p className="text-red-400 text-sm mt-2 flex items-center space-x-2">
                      <span>⚠️</span>
                      <span>{emailError}</span>
                    </p>
                  )}
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-400/20">
                  <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-yellow-400" />
                    <span>What you'll receive:</span>
                  </h4>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Early access to revolutionary AI art features</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span>Exclusive insights into future AI developments</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Invitations to virtual AI art exhibitions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Community access to AI artists and creators</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Joining the Revolution...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      <span>Join the AI Art Future</span>
                    </>
                  )}
                </button>
              </form>

              <p className="text-white/50 text-sm text-center">
                🔒 We respect your privacy. Unsubscribe at any time. No spam, only AI art magic.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center animate-pulse">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Welcome to the Future!</h3>
              <p className="text-white/80 text-xl mb-6">
                Thank you for joining our AI art revolution. You're now part of an exclusive community shaping the future of creativity.
              </p>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-400/30 mb-6">
                <p className="text-white/70 text-lg">
                  🎨 Check your email for a welcome message with exclusive AI art content and early access to our latest features!
                </p>
              </div>
              <div className="text-white/60">
                <p>This modal will close automatically in a few seconds...</p>
              </div>
            </div>
          )}
        </div>
      )
    },
    
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Cpu className="h-12 w-12 text-purple-400/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Palette className="h-16 w-16 text-pink-400/30" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <Sparkles className="h-10 w-10 text-yellow-400/30" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
              Muse-AI-um
            </span>
            <span className="block text-2xl md:text-4xl text-white/90 font-light mt-4">
              Where AI Meets Art & Culture
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explore the revolutionary intersection of artificial intelligence and human creativity. 
            Discover how AI is reshaping art, culture, and our understanding of imagination itself.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('create')}
            className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 transform hover:shadow-2xl flex items-center space-x-2"
          >
            <span>Start Creating</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            onClick={() => openModal('ai-art')}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform cursor-pointer group"
          >
            <Cpu className="h-12 w-12 text-purple-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-2">AI-Generated Art</h3>
            <p className="text-white/70">Witness machines create masterpieces that challenge our perception of creativity</p>
            <div className="mt-4 text-purple-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Click to learn more →
            </div>
          </div>
          
          <div 
            onClick={() => openModal('cultural-impact')}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform cursor-pointer group"
          >
            <Palette className="h-12 w-12 text-pink-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-2">Cultural Impact</h3>
            <p className="text-white/70">Explore how AI is transforming cultural expression and artistic movements</p>
            <div className="mt-4 text-pink-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Click to learn more →
            </div>
          </div>
          
          <div 
            onClick={() => openModal('future-vision')}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform cursor-pointer group border-2 border-yellow-400/20 hover:border-yellow-400/40"
          >
            <div className="relative">
              <Sparkles className="h-12 w-12 text-yellow-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs px-2 py-1 rounded-full font-bold">
                JOIN
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Future Vision</h3>
            <p className="text-white/70">Join our community and help shape the future of AI art and creativity</p>
            <div className="mt-4 text-yellow-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>Click to join the future →</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  {modalContent[activeModal].icon && (
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                      {React.createElement(modalContent[activeModal].icon, { className: "h-8 w-8 text-white" })}
                    </div>
                  )}
                  <h2 className="text-3xl font-bold text-white">{modalContent[activeModal].title}</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              {modalContent[activeModal].content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;