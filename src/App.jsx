// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Exhibitions from './components/Exhibitions';
import About from './components/About';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import ArtworkDetail from './components/ArtworkDetail';
import AiArtCreator from './components/AiArtCreator';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [user, setUser] = useState(null);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);
  
  const openArtworkDetail = (artwork) => setSelectedArtwork(artwork);
  const closeArtworkDetail = () => setSelectedArtwork(null);

  const handleLogin = (userData) => {
    setUser(userData);
    closeAuthModal();
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen">
      <Header 
        user={user} 
        onAuthClick={openAuthModal} 
        onLogout={handleLogout} 
      />

      <Hero />
      <Exhibitions />
      <div id="create">
        <AiArtCreator />
      </div>
      <Gallery onArtworkClick={openArtworkDetail} />
      <About />
      <Footer />
      
      {isAuthModalOpen && (
        <AuthModal 
          onClose={closeAuthModal} 
          onLogin={handleLogin} 
        />
      )}
      
      {selectedArtwork && (
        <ArtworkDetail 
          artwork={selectedArtwork} 
          onClose={closeArtworkDetail} 
        />
      )}
    </div>
  );
}

export default App;