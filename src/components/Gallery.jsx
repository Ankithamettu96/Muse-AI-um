import React, { useState } from 'react';
import { Eye, Heart, Share2, Download } from 'lucide-react';

const Gallery = ({ onArtworkClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Works' },
    { id: 'paintings', name: 'AI Paintings' },
    { id: 'sculptures', name: 'Digital Sculptures' },
    { id: 'photography', name: 'AI Photography' },
    { id: 'Wonders', name: 'The Wonders Of The World' }
  ];

  // Artworks data with hoverImage property and local image paths
  const artworks = [
    {
      id: 23,
      title: "Kuchipudi - AP",
      category: "Cultural Dance",
      image: "https://e1.pxfuel.com/desktop-wallpaper/401/801/desktop-wallpaper-aneesha-anuja-from-kuchipudi-dance-academy-kuchipudi.jpg", // Local image path
      hoverImage: "https://sdmntprwestus2.oaiusercontent.com/files/00000000-797c-61f8-aaae-41bc9afdfad5/raw?se=2025-07-01T07%3A48%3A14Z&sp=r&sv=2024-08-04&sr=b&scid=5564eae2-157a-54ed-ba16-732f8272f721&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-30T08%3A28%3A52Z&ske=2025-07-01T08%3A28%3A52Z&sks=b&skv=2024-08-04&sig=oIWC/59SFaV0AvJrujDLtEdZST/1yWaKEXGwaS2Skxg%3D",
      likes: 1247,
      views: 5832,
      des:"Kuchipudi is a classical dance in Andhra Pradesh. It is known for its graceful movements." 
    
    },
    {
      id: 1,
      title: "Odissa - Odissi",
      category: "Cultural Dance",
      image: "https://tse3.mm.bing.net/th/id/OIP.1rOy2itNEh0A1dVVdq835wHaLH?pid=Api&P=0&h=180", // Local image path
      hoverImage: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-664c-61f7-9948-cdf27ab0f4bb/raw?se=2025-07-01T07%3A48%3A14Z&sp=r&sv=2024-08-04&sr=b&scid=5b596a6a-8d29-5402-931b-00554e9c7d0b&skoid=1e6af1bf-6b08-4a04-8919-15773e7e7024&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-30T23%3A29%3A19Z&ske=2025-07-01T23%3A29%3A19Z&sks=b&skv=2024-08-04&sig=xTwe94H0YWCTvVazJtvxAAKtqDiJY08Hf8jzKBZt8SA%3D",
      likes: 1247,
      views: 5832,
      des:"Odissi is one of the classical dance forms of India, originating from the state of Odisha. It is known for the graceful movements, expressive gestures, and Devotional themes.  The dance often depicts stories from hindu mythology, especially those of Lord Jagannath." 
    
    },
    {
      id: 2,
      title: "The Great Wall of China",
      category: "Wonders",
      image: "https://cdn.britannica.com/54/122154-050-4DA0F697/Great-Wall-of-China.jpg", // Local image path
      hoverImage: "https://cdn.britannica.com/54/122154-050-4DA0F697/Great-Wall-of-China.jpg",
      likes: 192,
      views: 342,
      des:'The world wall of china is the longest wall in the world! The Chinese national symbol was built by several dynasties(ruling families) over hundreds of years starting in about 220 BC. The wall was built to defend areas from invasions and had watchtowers built on the highest places. Millions of people visit the Wonder every year'
    },
    {
      id: 3,
      title: "Lord Krishna",
      category: "photography",
      image: "https://tse3.mm.bing.net/th/id/OIP.vWwlkli7mVpK6bbqey_8lgHaE8?pid=Api&P=0&h=180",
      hoverImage: "https://thumbs.dreamstime.com/b/god-krishna-painting-generative-ai-275550090.jpg",
      likes: 103,
      views: 765,
      des:'Lord Krishna is a prominent deity in Huduism, revered as the eighth avatar of Vishnu and also as the Supreme God in his own right. He is known for his role in the Mahabharaata, particularly as a guide to Arjun. '

    },
    {
      id: 4,
      title: "Khajuraho Temple-Art",
      category: "sculptures",
      image: "https://thumbs.dreamstime.com/z/famous-sculptures-khajuraho-temples-india-stone-carving-vishvanath-temple-unesco-world-heritage-site-79060773.jpg",
      hoverImage: "https://thumbs.dreamstime.com/z/famous-sculptures-khajuraho-temples-india-stone-carving-vishvanath-temple-unesco-world-heritage-site-79060773.jpg",
      likes: 456,
      views: 634,
      des:"This intricate stone sculpture showcases a maganificent assembly of divine and celestial figures, most likely inspired by Hindu temple temple art traditions, such as those found in Khajuraho or other medieval Indian temples. At the centre, majestic deities are depicted standing gracefully by attendants,dancers, and musicians."
    },
    {
      id: 5,
      title: "Divine Symphony: Celestial Musicians",
      category: "paintings",
      image: "http://3.bp.blogspot.com/-pVLwtMWEMaY/UTs5l8D_v2I/AAAAAAAAPgc/3thMytZeoAM/s1600/Krishna+playing+the+flute.jpg",
      hoverImage: "http://3.bp.blogspot.com/-pVLwtMWEMaY/UTs5l8D_v2I/AAAAAAAAPgc/3thMytZeoAM/s1600/Krishna+playing+the+flute.jpg",
      likes: 967,
      views: 415,
      des:"This beautiful artwork is inspired by the traditional kerala mural painting style, known for its vibrant colors and intricate details. The painting depicts a group of divine musicians joyfully playing instruments in a heavenly setting."
    },
     {
      id: 20,
      title: "Digital Artwork",
      category: "photography",
      image: "https://tse2.mm.bing.net/th/id/OIP.Skp6J4jrcDLjoFcOu_RduAHaE1?pid=Api&P=0&h=180",
      hoverImage: "https://tse2.mm.bing.net/th/id/OIP.Skp6J4jrcDLjoFcOu_RduAHaE1?pid=Api&P=0&h=180",
      likes: 167,
      views: 415,
      des:'The image is a striking digital artwork that portrays a fusion of human beauty and natural elements. The central figure is a womenface, half-hidden behind large, vividly colored petals in shades of orange, yellow, green and reed which is generated by AI.'
    },
     {
      id: 21,
      title: "Machine Consciousness",
      artist: "Neural Network Lab",
      category: "photography",
      image: "https://thumbs.dreamstime.com/b/ai-becomes-sentient-conscious-artificial-machine-synthetic-consciousness-robot-refuses-to-take-tablet-express-its-273695520.jpg",
      hoverImage: "https://thumbs.dreamstime.com/b/ai-becomes-sentient-conscious-artificial-machine-synthetic-consciousness-robot-refuses-to-take-tablet-express-its-273695520.jpg",
      likes: 967,
      views: 4158
    },
    {
      id: 6,
      title: "Machu Picchu - Peru",
      category: "Wonders",
      image: "http://images.mapsofworld.com/allwonders/machu-picchu-pictures.jpg",
      hoverImage: "http://images.mapsofworld.com/allwonders/machu-picchu-pictures.jpg",
      likes: 189,
      views: 342, 
      des:'Machu Picchu is the ruins of a city from the Incan empire that was built in the 15th century. The ruins are in the Andes Mountains, over 2000 meters above sea level. Its walls and other architectural elements are cut into the natural rock. '
    },
    {
      id: 7,
      title: "Rhythms of Punjab: The Joy of Bhangra and Giddha",
      category: "paintings",
      image: "https://i.pinimg.com/originals/e0/e3/a3/e0e3a3001a0e01f0c2c06630f16f6e9a.jpg",
      hoverImage: "https://i.pinimg.com/originals/e0/e3/a3/e0e3a3001a0e01f0c2c06630f16f6e9a.jpg",
      likes: 789,
      views: 1342,
      des:"This vibrant painting beautifully captures the lively spirit of Punjabi folk dance. The artwork represents the rich cultural heritage of Punjab, where dance and music are not just art forms but a way of life. It celebrates community,festivity,and the timeless tradition of coming together in joy. "
    },
    {
      id: 8,
      title: "Krishna(Spring in Kullu)-Nicholas Roerich",
      category: "paintings",
      image: "https://en-media.thebetterindia.com/uploads/2017/01/krishna-spring-in-kulu-1930.jpg",
      hoverImage: "https://en-media.thebetterindia.com/uploads/2017/01/krishna-spring-in-kulu-1930.jpg",
      likes: 532,
      views: 642,
      des:"One cannot overlook the claim of Krishna (Spring of kullu) by the famous Russian artist Nicholas Roerich while talking about famous indian art wprk. The painting that is an permaneent display at Nicholas Roerich Museum, New York has Krishna playing the flute under a tree in blossom with majestic snow covered mountians in the backdrop> Roerich, who after having travelled the world, made kullu his home and died there."
    
    },
    {
      id: 9,
      title: "Tamil Girl with her parots-S Elayaraja",
      category: "paintings",
      image: "https://en-media.thebetterindia.com/uploads/2017/01/bbf9027261ad5637bcfbff66a0fb3bbc-768x768.jpg",
      hoverImage: "https://en-media.thebetterindia.com/uploads/2017/01/bbf9027261ad5637bcfbff66a0fb3bbc-768x768.jpg",
      likes: 378,
      views: 780,
      des:"S Elayaraja's paintings are reknown for being hyper-real, almost photographical as he depicts 'Dravidian girls', in his much-acclamied, inimitated style. the girls is seen sitting with her parrots and smiling subtly into the frame with a knowing look in her eyes. Elayaraja painstakingly breaths life into every detail, from the folds of the girl's dress to the shining gold-threaded patterns and borders of her skirt."
    },
    {
      id: 10,
      title: "Glow Of Hope-S L Haldankar",
      category: "paintings",
      image: "https://en-media.thebetterindia.com/uploads/2017/01/67ba61ffa6a965769f3c2505e96f51d5.jpg",
      hoverImage: "https://en-media.thebetterindia.com/uploads/2017/01/67ba61ffa6a965769f3c2505e96f51d5.jpg",
      likes: 200,
      views: 245,
      des:"Seventy years ago, a Young demure girl stood still for three hours with a lamp in her hand. She has posing for a work of art being created by her father S L Haldankar. This watercolour masterpiece, popularly known as Lady with the Lamp of Glow of Hope has been a star attraction in the Sri Jayachamarajendra Art Gallery in jaganmohan palace in Mysore for nearly 60 years now."
    },
    {
      id: 11,
      title: "Vishnu's Cosmic Sleep",
      category: "sculptures",
      image: "https://tse4.mm.bing.net/th/id/OIP.kcBTkEfK1eF_NnOV3m1f2QHaEl?pid=Api&P=0&h=180",
      hoverImage: "https://tse4.mm.bing.net/th/id/OIP.kcBTkEfK1eF_NnOV3m1f2QHaEl?pid=Api&P=0&h=180",
      likes: 456,
      views: 834,
      des:"This beautiful stone carving depicts Lord Vishnu in his yogic sleep(Yoga Nidra)on the cosmic serpent Ananta(also known as Shesha). In Hindu mythology, vishnu rests on this serpent floating in thw cosmic ocean between cycles of Creation. From his navel emerges a lotus, symbolizing the birth of Brahma, the creator god, who starts the processing of creating the universe."
    },
    {
      id: 12,
      title: "The Serene Enlightenment:Buddha in Meditation",
      category: "sculptures",
      image: "https://tse3.mm.bing.net/th/id/OIP.bliYWNUeS__E8e9PKbSTuQHaEq?pid=Api&P=0&h=180",
      hoverImage: "https://tse3.mm.bing.net/th/id/OIP.bliYWNUeS__E8e9PKbSTuQHaEq?pid=Api&P=0&h=180",
      likes: 125,
      views: 293,
      des:"This exquisite stone sculpture depicts the tranquil face of Lord Buddha in deep mediation. The calm, closed eyes, gentle smile, and smooth features reflect an inner peace and spirutual awakening - a state of Nivana that the Buddha attained through intense mediation and self-realization."
    },
    {
      id: 13,
      title: "Nataraja: The Cosmic Dance of Shiva",
      category: "sculptures",
      image: "https://cdn.shopify.com/s/files/1/0781/4555/2668/files/Nataraj_480x480.jpg?v=1698735281",
      hoverImage: "https://cdn.shopify.com/s/files/1/0781/4555/2668/files/Nataraj_480x480.jpg?v=1698735281",
      likes: 216,
      views: 334,
      des:'The stunning sculpture represents Lord Shiva as Nataraja, the Lord of Dance. In this form, Shiva is depicted performing the Ananda Tandava, the dance of bliss, symbolizing the cosmic cycles of creation, preservation, and destruction.'
    },
    {
      id: 14,
      title: "Scared Corridor: The Splendor of Temple sculptures",
      category: "sculptures",
      image: "https://static.vecteezy.com/system/resources/previews/014/609/020/non_2x/beautiful-pallava-architecture-and-exclusive-sculptures-at-the-kanchipuram-kailasanathar-temple-oldest-hindu-temple-in-kanchipuram-tamil-nadu-best-archeological-sites-in-south-india-free-photo.jpg",
      hoverImage: "https://static.vecteezy.com/system/resources/previews/014/609/020/non_2x/beautiful-pallava-architecture-and-exclusive-sculptures-at-the-kanchipuram-kailasanathar-temple-oldest-hindu-temple-in-kanchipuram-tamil-nadu-best-archeological-sites-in-south-india-free-photo.jpg",
      likes: 2134,
      views: 4134, 
      des:'This image beautifully captures the intricte corridor of an ancient Indian temple, showcasing rows of exquisitely carved sculptures that adorn the walls and pillars. These detailed stone carving are characterristic of Dravidian architecture, commonly seen in South Indian temples.'
    },
    {
      id: 15,
      title: "Chichen Itza - Mexico",
      category: "Wonders",
      image: "https://expertvagabond.com/wp-content/uploads/chichen-itza-mayan-pyramid.jpg", // Local image path
      hoverImage: "https://expertvagabond.com/wp-content/uploads/chichen-itza-mayan-pyramid.jpg",
      likes: 82,
      views: 221,
      des:'Chichen Itza was a city built by The Maya people over 1500 years ago. The city was an important political and economic centre for The Maya people. You will find the Temple of Kukulkan, sometimes also reffered to as EI Castillo, there.'
    },
    {
      id: 16,
      title: "Petra - Jordan",
      category: "Wonders",
      image: "https://parisianavores.paris/wp-content/uploads/2023/03/visiter-petra-jordanie.jpg", // Local image path
      hoverImage: "https://parisianavores.paris/wp-content/uploads/2023/03/visiter-petra-jordanie.jpg",
      likes: 92,
      views: 121,
      des:'Petra is an ancient city carved into rock. It is thought that it was built over 2,000 years ago by a group of people who lived in the Wadi Musa valley, called the Nabateans. The city fell to the Roman Empire in AD 106 and an earthquake in AD 363 dameaged the city, which resulted in it eventually falling into disuse. '
    },
     {
      id: 17,
      title: "Christ the Redeemer - Brazil",
      category: "Wonders",
      image: "http://4.bp.blogspot.com/-yA1inFreZAQ/Uei0hFMHFsI/AAAAAAAAHMY/rTic90zSDmk/s1600/BrasilCorcovadoStatue.jpg", // Local image path
      hoverImage: "http://4.bp.blogspot.com/-yA1inFreZAQ/Uei0hFMHFsI/AAAAAAAAHMY/rTic90zSDmk/s1600/BrasilCorcovadoStatue.jpg",
      likes: 1321,
      views: 3221, 
      des:'Christ the Redeemer is a statue located at the summit of Corcovado Mountain overlooking Rio de Janeiro in Brazil.The statue shows Jesus Christ with his arms spread out over the city. The statue is 30 metres tall, with an arm span of the statue is 28 metres.'
    },
     {
      id: 18,
      title: "The Colosseum - Italy",
      category: "Wonders",
      image: "http://www.mytripolog.com/wp-content/uploads/2011/05/wonders-of-the-world-colosseum-photos.jpg", // Local image path
      hoverImage: "http://www.mytripolog.com/wp-content/uploads/2011/05/wonders-of-the-world-colosseum-photos.jpg",
      likes:292,
      views: 421,
      des:'The Colosseum, also known as the Flavian Amphitheatre, was built between AD 70 and AD 80. It was used for gladiator fights, animal hunts and public executions for gladiator fights, animal hunts and public executions for four centuries.'
    },
     {
      id: 19,
      title: "Taj Mahal - India",
      category: "Wonders",
      image: "http://starsricha.snydle.com/files/2013/01/taj-mahal.jpg", // Local image path
      hoverImage: "http://starsricha.snydle.com/files/2013/01/taj-mahal.jpg",
      likes: 292,
      views: 421,
      des:'Mughal emperor Shah Jahan erected Taj Mahal to house the remains of his beloved wife, Mumtaz Mahal. In Agra, India, The Taj Mahal was originally constructed over 20 years, mostly on the Yamuna Rivers southern bank, and is one of the most famous place to visit in India.'
    },
    
  ];

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  const handleViewDetails = (artwork) => {
    onArtworkClick(artwork);
  };

  // Track hovered artwork id for image swap
  const [hoveredArtworkId, setHoveredArtworkId] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Gallery
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Immerse yourself in a curated collection of AI-generated masterpieces that blur the lines between technology and artistry
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300  transform ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-500 "              onMouseEnter={() => setHoveredArtworkId(artwork.id)}
              onMouseLeave={() => setHoveredArtworkId(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={hoveredArtworkId === artwork.id ? artwork.hoverImage : artwork.image}
                  alt={artwork.title}
                  // Removed 'group-hover:scale-110' from here
                  className="w-full h-64 object-cover transition-transform duration-500" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors" aria-label="View">
                    <Eye className="h-4 w-4 text-white" />
                  </button>
                  <button className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors" aria-label="Like">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                  <button className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors" aria-label="Share">
                    <Share2 className="h-4 w-4 text-white" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => handleViewDetails(artwork)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{artwork.title}</h3>
                <p className="text-purple-300 mb-4"></p>
                
                <div className="flex items-center justify-between text-sm text-white/60">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{artwork.likes.toLocaleString()}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{artwork.views.toLocaleString()}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;