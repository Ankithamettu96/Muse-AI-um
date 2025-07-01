import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const Exhibitions = () => {
  const exhibitions = [
    {
      id: 1,
      title: "The Neural Renaissance",
      subtitle: "AI's Role in Modern Art Movement",
      date: "June28 - June 30, 2025",
      location: "Digital Wing A",
      attendees: 15420,
      image: "https://bernardmarr.com/wp-content/uploads/2023/04/The-Intersection-Of-AI-And-Human-Creativity_-Can-Machines-Really-Be-Creative_-1.jpg",
      featured: true,
      description: "Explore how artificial intelligence is creating a new renaissance in visual arts, challenging traditional boundaries between human and machine creativity."
    },
    {
      id: 2,
      title: "Algorithmic Expressions",
      subtitle: "When Code Becomes Canvas",
      date: "April 28 - June 30, 2025",
      location: "Interactive Gallery",
      attendees: 8750,
      image: "https://th.bing.com/th/id/OIP.eegfAgEWte_siV7u7cQGtwHaE7?w=233&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
      featured: false,
      description: "A deep dive into how algorithms are becoming the new paintbrushes of the digital age."
    },
    {
      id: 3,
      title: "Machine Dreams",
      subtitle: "AI's Vision of Beauty",
      date: "May 10 - July 20, 2025",
      location: "Virtual Reality Suite",
      attendees: 12300,
      image: "https://tse1.mm.bing.net/th/id/OIP.-CBdcBB6_NO3LPY-8LsgxAHaEO?rs=1&pid=ImgDetMain&o=7&rm=3",
      featured: false,
      description: "Step into immersive worlds created entirely by AI, where dreams and reality converge."
    }
  ];

  // State to track which exhibition tab is active for details
  // null means no tab open
  const [activeExhibitionId, setActiveExhibitionId] = useState(null);
  // State to track tab mode: "learnMore" or "explore"
  const [activeTabMode, setActiveTabMode] = useState(null);

  // When "Explore Exhibition" button clicked (featured)
  const handleExploreExhibition = (exhibition) => {
    setActiveExhibitionId(exhibition.id);
    setActiveTabMode('explore');
    // Scroll to the tabs/details section
    const element = document.getElementById('exhibition-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When "Learn More" button clicked (others)
  const handleLearnMore = (exhibition) => {
    setActiveExhibitionId(exhibition.id);
    setActiveTabMode('learnMore');
    // Scroll to the tabs/details section
    const element = document.getElementById('exhibition-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get current exhibition object by id
  const activeExhibition = exhibitions.find(exh => exh.id === activeExhibitionId);

  return (
    <section id="exhibitions" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Current Exhibitions
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience groundbreaking exhibitions that showcase the evolution of AI in art and culture
          </p>
        </div>

        {/* Featured Exhibition */}
        <div className="mb-16">
          {exhibitions
            .filter(exhibition => exhibition.featured)
            .map((featured) => (
              <div
                key={featured.id}
                className="relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] transform"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                      Featured Exhibition
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{featured.title}</h3>
                    <p className="text-xl text-purple-300 mb-4">{featured.subtitle}</p>
                    <p className="text-white/80 mb-6 leading-relaxed">{featured.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-white/70">
                        <Calendar className="h-5 w-5 mr-3 text-purple-400" />
                        <span>{featured.date}</span>
                      </div>
                      <div className="flex items-center text-white/70">
                        <MapPin className="h-5 w-5 mr-3 text-purple-400" />
                        <span>{featured.location}</span>
                      </div>
                      <div className="flex items-center text-white/70">
                        <Users className="h-5 w-5 mr-3 text-purple-400" />
                        <span>{featured.attendees.toLocaleString()} visitors</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => handleExploreExhibition(featured)}
                      className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 transform hover:shadow-2xl flex items-center space-x-2 w-fit"
                    >
                      <span>Explore Exhibition</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Exhibitions */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {exhibitions
            .filter(exhibition => !exhibition.featured)
            .map((exhibition) => (
              <div
                key={exhibition.id}
                className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 hover:scale-105 transform hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{exhibition.title}</h3>
                  <p className="text-purple-300 mb-3">{exhibition.subtitle}</p>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{exhibition.description}</p>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-center text-white/60">
                      <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                      <span>{exhibition.date}</span>
                    </div>
                    <div className="flex items-center text-white/60">
                      <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                      <span>{exhibition.location}</span>
                    </div>
                    <div className="flex items-center text-white/60">
                      <Users className="h-4 w-4 mr-2 text-purple-400" />
                      <span>{exhibition.attendees.toLocaleString()} visitors</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleLearnMore(exhibition)}
                    className="w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-white py-3 px-4 rounded-full hover:from-purple-500 hover:to-pink-500 hover:border-purple-400 transition-all duration-300 font-semibold"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Exhibition Details Tabs */}
        <div id="exhibition-details" className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white">
          {activeExhibition ? (
            <>
              <h3 className="text-4xl font-bold mb-4">{activeExhibition.title}</h3>
              <p className="text-purple-300 text-xl mb-6">{activeExhibition.subtitle}</p>
              <div className="flex flex-col md:flex-row gap-8">
                <img
                  src={activeExhibition.image}
                  alt={activeExhibition.title}
                  className="md:w-1/2 rounded-2xl object-cover max-h-96 w-full"
                />
                <div className="md:w-1/2 flex flex-col justify-between">
                  {activeTabMode ===  'learnMore' && (
                    <div>
                      <h4 className="text-2xl font-semibold mb-3">Learn More</h4>
                      <p className="mb-6">{activeExhibition.description}</p>
                      <div className="space-y-3">
                        <div className="flex items-center text-white/80">
                          <Calendar className="h-5 w-5 mr-3 text-purple-400" />
                          <span>{activeExhibition.date}</span>
                        </div>
                        <div className="flex items-center text-white/80">
                          <MapPin className="h-5 w-5 mr-3 text-purple-400" />
                          <span>{activeExhibition.location}</span>
                        </div>
                        <div className="flex items-center text-white/80">
                          <Users className="h-5 w-5 mr-3 text-purple-400" />
                          <span>{activeExhibition.attendees.toLocaleString()} visitors</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTabMode === 'explore' && (
                    <div>
                      <h4 className="text-2xl font-semibold mb-3">Explore Exhibition</h4>
                      <p className="mb-6">{activeExhibition.description}</p>
                      <p>
                        {/* Placeholder for more detailed interactive experience or info */}
                        Dive deep into the exhibition, explore artworks, attend workshops,
                        and engage with cutting-edge AI art installations.
                      </p>
                      <button
                        onClick={() => alert(`Navigating to detailed page for ${activeExhibition.title}...`)}
                        className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:from-purple-700 hover:to-pink-700 transition"
                      >
                        Visit Official Exhibition Page
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={() => setActiveExhibitionId(null)}
                  className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-semibold shadow-lg transition"
                  aria-label="Close exhibition details"
                >
                  Close
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-white/80 text-lg">Click “Learn More” or “Explore Exhibition” to see details here.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;