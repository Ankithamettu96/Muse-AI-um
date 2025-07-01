import React, { useState } from 'react';
import { X, Heart, Share2, Download, Eye, Calendar, User, Palette } from 'lucide-react';

const ArtworkDetail = ({ artwork, onClose }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(artwork.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: artwork.title,
        text: `Check out this amazing AI artwork: ${artwork.title} by ${artwork.artist}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleDownload = () => {
    // Simulate download
    const link = document.createElement('a');
    link.href = artwork.image;
    link.download = `${artwork.title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">{artwork.title}</h2>
            <button
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="space-y-6">
              <div className="relative group">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    isLiked 
                      ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{likes.toLocaleString()}</span>
                </button>
                
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
                
                <button
                  onClick={handleDownload}
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  <Download className="h-5 w-5" />
                  <span>Download</span>
                </button>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{artwork.title}</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Eye className="h-5 w-5 text-purple-400" />
                      <span className="text-white/80 text-sm">Views</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{artwork.views?.toLocaleString() || '5,432'}</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-5 w-5 text-purple-400" />
                      <span className="text-white/80 text-sm">Created</span>
                    </div>
                    <p className="text-2xl font-bold text-white">2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <Palette className="h-6 w-6 text-purple-400" />
                  <span>Artwork Details</span>
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-white/60 text-sm">Category:</span>
                    <p className="text-white capitalize">{artwork.category}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/60 text-sm">AI Model:</span>
                    <p className="text-white">Neural Style Transfer v3.2</p>
                  </div>
                  
                  <div>
                    <span className="text-white/60 text-sm">Resolution:</span>
                    <p className="text-white">4096 x 4096 pixels</p>
                  </div>
                  
                  
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4">Description
                </h4>
                <p className="text-white/80 leading-relaxed">{artwork.des}
                </p>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;