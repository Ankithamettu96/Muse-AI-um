import React, { useState, useRef, useEffect } from 'react';
import { Palette, Download, RefreshCw, Sparkles, Zap, Settings, Play, Save, Share2, Eye } from 'lucide-react';

const AIArtCreator = () => {
  const canvasRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStyle, setCurrentStyle] = useState('neural');
  const [colorPalette, setColorPalette] = useState('vibrant');
  const [complexity, setComplexity] = useState(50);
  const [generatedArt, setGeneratedArt] = useState(null);
  const [artHistory, setArtHistory] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(50);
  const [brushSize, setBrushSize] = useState(25);

  const styles = [
    { 
      id: 'neural', 
      name: 'Neural Dreams', 
      description: 'Surreal, dream-like patterns',
      pattern: 'neural'
    },
    { 
      id: 'geometric', 
      name: 'Geometric AI', 
      description: 'Mathematical precision meets creativity',
      pattern: 'geometric'
    },
    { 
      id: 'organic', 
      name: 'Organic Flow', 
      description: 'Natural, flowing forms',
      pattern: 'organic'
    },
    { 
      id: 'abstract', 
      name: 'Abstract Fusion', 
      description: 'Pure color and form expression',
      pattern: 'abstract'
    },
    { 
      id: 'cyberpunk', 
      name: 'Cyberpunk', 
      description: 'Futuristic neon aesthetics',
      pattern: 'cyberpunk'
    },
    { 
      id: 'watercolor', 
      name: 'AI Watercolor', 
      description: 'Soft, flowing watercolor effects',
      pattern: 'watercolor'
    }
  ];

  const palettes = [
    { 
      id: 'vibrant', 
      name: 'Vibrant', 
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'] 
    },
    { 
      id: 'cosmic', 
      name: 'Cosmic', 
      colors: ['#6C5CE7', '#A29BFE', '#FD79A8', '#FDCB6E', '#E17055', '#00B894'] 
    },
    { 
      id: 'monochrome', 
      name: 'Monochrome', 
      colors: ['#2D3436', '#636E72', '#B2BEC3', '#DDD', '#FFF', '#74B9FF'] 
    },
    { 
      id: 'sunset', 
      name: 'Sunset', 
      colors: ['#FF7675', '#FD79A8', '#FDCB6E', '#E17055', '#D63031', '#FFEAA7'] 
    },
    { 
      id: 'ocean', 
      name: 'Ocean', 
      colors: ['#0984E3', '#74B9FF', '#00CEC9', '#55EFC4', '#81ECEC', '#A29BFE'] 
    },
    { 
      id: 'forest', 
      name: 'Forest', 
      colors: ['#00B894', '#55EFC4', '#6C5CE7', '#FDCB6E', '#E17055', '#FD79A8'] 
    }
  ];

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 500;
      canvas.height = 500;
      
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add initial pattern
      ctx.fillStyle = '#333';
      ctx.font = '24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('🎨 AI Art Creator', canvas.width / 2, canvas.height / 2 - 20);
      ctx.font = '16px Arial';
      ctx.fillStyle = '#666';
      ctx.fillText('Click "Generate Art" to create magic', canvas.width / 2, canvas.height / 2 + 20);
    }
  }, []);

  // Advanced AI art generation algorithm
  const generateArt = () => {
    setIsGenerating(true);
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas with gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#000');
    gradient.addColorStop(1, '#1a1a1a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const selectedPalette = palettes.find(p => p.id === colorPalette);
    const selectedStyle = styles.find(s => s.id === currentStyle);
    
    let progress = 0;
    const totalElements = Math.floor(complexity * 2);
    let elementsDrawn = 0;
    
    const interval = setInterval(() => {
      const elementsPerFrame = Math.max(1, Math.floor(totalElements / 50));
      
      for (let i = 0; i < elementsPerFrame && elementsDrawn < totalElements; i++) {
        drawAIElement(ctx, canvas, selectedPalette, selectedStyle);
        elementsDrawn++;
      }
      
      progress = (elementsDrawn / totalElements) * 100;
      
      if (progress >= 100) {
        clearInterval(interval);
        setIsGenerating(false);
        const artData = canvas.toDataURL();
        setGeneratedArt(artData);
        
        // Add to history
        const newArt = {
          id: Date.now(),
          data: artData,
          style: currentStyle,
          palette: colorPalette,
          complexity: complexity,
          timestamp: new Date().toLocaleString()
        };
        setArtHistory(prev => [newArt, ...prev.slice(0, 9)]); // Keep last 10
      }
    }, 101 - animationSpeed);
  };

  // Draw AI elements based on style
  const drawAIElement = (ctx, canvas, palette, style) => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * brushSize + 5;
    const color = palette.colors[Math.floor(Math.random() * palette.colors.length)];
    const alpha = Math.random() * 0.8 + 0.2;
    
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.random() * 3 + 1;
    
    switch (style.pattern) {
      case 'neural':
        drawNeuralPattern(ctx, x, y, size, color);
        break;
      case 'geometric':
        drawGeometricPattern(ctx, x, y, size);
        break;
      case 'organic':
        drawOrganicPattern(ctx, x, y, size);
        break;
      case 'abstract':
        drawAbstractPattern(ctx, x, y, size);
        break;
      case 'cyberpunk':
        drawCyberpunkPattern(ctx, x, y, size, color);
        break;
      case 'watercolor':
        drawWatercolorPattern(ctx, x, y, size, color);
        break;
      default:
        drawAbstractPattern(ctx, x, y, size);
    }
  };

  const drawNeuralPattern = (ctx, x, y, size, color) => {
    // Neural network nodes
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    
    // Neural connections
    for (let i = 0; i < 3; i++) {
      const endX = x + (Math.random() - 0.5) * 100;
      const endY = y + (Math.random() - 0.5) * 100;
      
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(
        x + (Math.random() - 0.5) * 50,
        y + (Math.random() - 0.5) * 50,
        endX,
        endY
      );
      ctx.stroke();
    }
  };

  const drawGeometricPattern = (ctx, x, y, size) => {
    const shapes = ['rect', 'triangle', 'hexagon'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.random() * Math.PI * 2);
    
    switch (shape) {
      case 'rect':
        ctx.fillRect(-size/2, -size/2, size, size);
        break;
      case 'triangle':
        ctx.beginPath();
        ctx.moveTo(0, -size/2);
        ctx.lineTo(-size/2, size/2);
        ctx.lineTo(size/2, size/2);
        ctx.closePath();
        ctx.fill();
        break;
      case 'hexagon':
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const hx = Math.cos(angle) * size/2;
          const hy = Math.sin(angle) * size/2;
          if (i === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.fill();
        break;
    }
    ctx.restore();
  };

  const drawOrganicPattern = (ctx, x, y, size) => {
    ctx.beginPath();
    ctx.ellipse(x, y, size, size * (0.5 + Math.random() * 0.5), Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
    
    // Add flowing lines
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(
      x + Math.random() * 50 - 25,
      y + Math.random() * 50 - 25,
      x + Math.random() * 100 - 50,
      y + Math.random() * 100 - 50,
      x + Math.random() * 150 - 75,
      y + Math.random() * 150 - 75
    );
    ctx.stroke();
  };

  const drawAbstractPattern = (ctx, x, y, size) => {
    const patterns = ['circle', 'splash', 'line'];
    const pattern = patterns[Math.floor(Math.random() * patterns.length)];
    
    switch (pattern) {
      case 'circle':
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 'splash':
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.arc(
            x + (Math.random() - 0.5) * size,
            y + (Math.random() - 0.5) * size,
            Math.random() * size/3,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
        break;
      case 'line':
        ctx.beginPath();
        ctx.moveTo(x - size, y);
        ctx.lineTo(x + size, y + (Math.random() - 0.5) * 20);
        ctx.lineWidth = size / 5;
        ctx.stroke();
        break;
    }
  };

  const drawCyberpunkPattern = (ctx, x, y, size, color) => {
    // Neon glow effect
    ctx.shadowColor = color;
    ctx.shadowBlur = 20;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.rect(x - size/2, y - size/2, size, size);
    ctx.stroke();
    
    // Inner glow
    ctx.beginPath();
    ctx.rect(x - size/4, y - size/4, size/2, size/2);
    ctx.stroke();
    
    ctx.shadowBlur = 0;
  };

  const drawWatercolorPattern = (ctx, x, y, size, color) => {
    // Multiple overlapping circles for watercolor effect
    for (let i = 0; i < 3; i++) {
      ctx.globalAlpha = 0.1 + Math.random() * 0.2;
      ctx.beginPath();
      ctx.arc(
        x + (Math.random() - 0.5) * size/2,
        y + (Math.random() - 0.5) * size/2,
        size * (0.8 + Math.random() * 0.4),
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  };

  const downloadArt = () => {
    if (generatedArt) {
      const link = document.createElement('a');
      link.download = `ai-artwork-${currentStyle}-${Date.now()}.png`;
      link.href = generatedArt;
      link.click();
    }
  };

  const saveToGallery = () => {
    if (generatedArt) {
      alert('Artwork saved to your personal gallery! (This would integrate with a backend service)');
    }
  };

  const shareArt = () => {
    if (generatedArt && navigator.share) {
      navigator.share({
        title: 'Check out my AI-generated artwork!',
        text: `I created this amazing ${currentStyle} style artwork using AI`,
        url: window.location.href
      });
    } else if (generatedArt) {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setGeneratedArt(null);
  };

  const loadFromHistory = (artwork) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      setGeneratedArt(artwork.data);
      setCurrentStyle(artwork.style);
      setColorPalette(artwork.palette);
      setComplexity(artwork.complexity);
    };
    img.src = artwork.data;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center space-x-3">
              <Palette className="h-12 w-12 text-purple-400" />
              <span>AI Art Creator</span>
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Unleash your creativity with AI. Create stunning artworks using advanced neural networks and machine learning algorithms.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-2">
                <Settings className="h-6 w-6 text-purple-400" />
                <span>AI Parameters</span>
              </h3>

              {/* Style Selection */}
              <div className="mb-6">
                <label className="block text-white/80 text-sm font-medium mb-4">Art Style</label>
                <div className="grid grid-cols-1 gap-2">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setCurrentStyle(style.id)}
                      className={`p-3 rounded-xl text-left transition-all duration-300 ${
                        currentStyle === style.id
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      <div className="font-semibold text-sm">{style.name}</div>
                      <div className="text-xs opacity-80">{style.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Palette */}
              <div className="mb-6">
                <label className="block text-white/80 text-sm font-medium mb-4">Color Palette</label>
                <div className="space-y-2">
                  {palettes.map((palette) => (
                    <button
                      key={palette.id}
                      onClick={() => setColorPalette(palette.id)}
                      className={`w-full p-3 rounded-xl flex items-center space-x-3 transition-all duration-300 ${
                        colorPalette === palette.id
                          ? 'bg-white/20 border-2 border-purple-400'
                          : 'bg-white/10 hover:bg-white/15'
                      }`}
                    >
                      <div className="flex space-x-1">
                        {palette.colors.slice(0, 4).map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full border border-white/20"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                      <span className="text-white text-sm">{palette.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    Complexity: {complexity}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={complexity}
                    onChange={(e) => setComplexity(e.target.value)}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    Animation Speed: {animationSpeed}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={animationSpeed}
                    onChange={(e) => setAnimationSpeed(e.target.value)}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    Brush Size: {brushSize}px
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={brushSize}
                    onChange={(e) => setBrushSize(e.target.value)}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mt-8">
                <button
                  onClick={generateArt}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Creating Magic...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      <span>Generate Art</span>
                    </>
                  )}
                </button>

                <button
                  onClick={clearCanvas}
                  className="w-full bg-white/10 border border-white/20 text-white py-3 px-6 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span>Clear Canvas</span>
                </button>
              </div>
            </div>

            {/* Art History */}
            {artHistory.length > 0 && (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-purple-400" />
                  <span>Recent Creations</span>
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {artHistory.slice(0, 4).map((artwork) => (
                    <button
                      key={artwork.id}
                      onClick={() => loadFromHistory(artwork)}
                      className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-purple-400"
                    >
                      <img
                        src={artwork.data}
                        alt="Generated artwork"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Canvas Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white flex items-center space-x-2">
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                  <span>Your AI Masterpiece</span>
                </h3>
                {generatedArt && (
                  <div className="flex space-x-2">
                    <button
                      onClick={downloadArt}
                      className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center space-x-2"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                    <button
                      onClick={saveToGallery}
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 flex items-center space-x-2"
                    >
                     
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                )}
              </div>
              
              <div className="flex justify-center">
                <canvas
                  ref={canvasRef}
                  className="border-2 border-white/20 rounded-xl max-w-full h-auto shadow-2xl"
                  style={{ maxWidth: '500px', maxHeight: '500px' }}
                />
              </div>
              
              {isGenerating && (
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 text-white/80 bg-white/10 rounded-full px-6 py-3">
                    <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
                    <span>AI neural networks are creating your masterpiece...</span>
                  </div>
                </div>
              )}
            </div>

            {/* AI Process Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Zap className="h-5 w-5 text-cyan-400" />
                <span>AI Creation Process</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-white/70 text-sm">
                <div className="space-y-2">
                  <p>• <strong>Style Analysis:</strong> AI analyzes your selected artistic style</p>
                  <p>• <strong>Color Processing:</strong> Neural networks apply your chosen palette</p>
                  <p>• <strong>Pattern Generation:</strong> Algorithms create unique visual patterns</p>
                </div>
                <div className="space-y-2">
                  <p>• <strong>Complexity Mapping:</strong> AI adjusts detail levels dynamically</p>
                  <p>• <strong>Composition Balance:</strong> Machine learning optimizes visual harmony</p>
                  <p>• <strong>Final Rendering:</strong> Advanced algorithms polish the masterpiece</p>
                </div>
              </div>
            </div>

            {/* Style Preview */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Current Style: {styles.find(s => s.id === currentStyle)?.name}</h4>
              <p className="text-white/70 mb-4">{styles.find(s => s.id === currentStyle)?.description}</p>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-white/60">
                  <span className="font-medium">Palette:</span> {palettes.find(p => p.id === colorPalette)?.name}
                </div>
                <div className="flex space-x-1">
                  {palettes.find(p => p.id === colorPalette)?.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-white/20"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIArtCreator;