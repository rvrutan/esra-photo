import { useState, useEffect } from "react";
import { getMixedImages } from "../config/images";

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);
  const images = getMixedImages([ 'personal']);

  useEffect(() => {
    // Start with an initial delay for the first image
    setTimeout(() => {
      setLoadedImages(prev => [...prev, 0]);
      
      // Then trigger the rest of the images with staggered delays
      images.slice(1).forEach((_, index) => {
        setTimeout(() => {
          setLoadedImages(prev => [...prev, index + 1]);
        }, (index + 1) * 500);
      });
    }, 500); // Initial delay for the first image
  }, []);

  const getImageClass = (size) => {
    switch(size) {
      case 'large':
        return 'md:col-span-3';
      case 'medium':
        return 'md:col-span-2';
      case 'small':
        return 'md:col-span-1';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen px-4 sm:py-10">
      <div className="w-full">
        <div className="text-center mb-12">
        </div>

        {/* Modern Image Grid */}
        <div className="columns-3 gap-1">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative group cursor-pointer mb-1 break-inside-avoid ${
                loadedImages.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              } transition-all duration-4000 ease-out`}
              style={{ transitionDelay: `${index * 500}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full">
                <img
                  src={image.src}
                  alt={`${image.category} photography ${index + 1}`}
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.src}
                alt={`Selected ${selectedImage.category} photography`}
                className="max-h-[80vh] w-auto mx-auto"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
