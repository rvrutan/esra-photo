import { useState, useEffect } from "react";

function Home() {
  const images = [
    { src: 'DSC02007 kopya.JPG', size: 'large', category: 'home' },
    { src: 'DSC_3139 kopya.jpeg', size: 'medium', category: 'medical' },
    { src: 'DSCF6454 kopya.jpeg', size: 'small', category: 'personal' },
    { src: 'DSC01442 kopya-2.JPG', size: 'small', category: 'home' },
    { src: 'DSC_3394 kopyason.jpeg', size: 'medium', category: 'medical' },
    { src: 'DSCF6375.jpeg', size: 'medium', category: 'personal' },
    { src: 'DSC01456 kopya-6.jpeg', size: 'small', category: 'home' },
    { src: 'DSC_3147 kopya.jpeg', size: 'large', category: 'medical' },
    { src: 'DSCF6454 kopya-2.jpeg', size: 'medium', category: 'personal' },
    { src: 'DSC01464 kopya-3.JPG', size: 'small', category: 'home' },
    { src: 'IMG_5151 kopyaaaaa.jpeg', size: 'large', category: 'medical' },
    { src: 'DSC01974 kopya.JPG', size: 'small', category: 'home' },
    { src: 'DSCF6454 kopya-3.jpeg', size: 'medium', category: 'personal' },
    { src: 'IMG_5201 kopya.jpeg', size: 'medium', category: 'medical' },
    { src: 'DSCF6374-2.jpeg', size: 'small', category: 'personal' }
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);

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
        return 'md:col-span-3 md:row-span-2';
      case 'medium':
        return 'md:col-span-2 md:row-span-2';
      case 'small':
        return 'md:col-span-1 md:row-span-2';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg">explore my collection of photography</p>
        </div>

        {/* Modern Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 auto-rows-[200px]">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative group cursor-pointer ${getImageClass(image.size)} ${
                loadedImages.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-x-20'
              } transition-all duration-4000 ease-out`}
              style={{ transitionDelay: `${index * 500}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={`/${image.category}/${image.src}`}
                  alt={`${image.category} photography ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
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
                src={`/${selectedImage.category}/${selectedImage.src}`}
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
