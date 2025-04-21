import { useState, useEffect } from "react";

// Separate modal component for better organization
function ImageModal({ image, onClose }) {
  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full">
        <button
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          src={image.src}
          alt="Selected photography"
          className="max-h-[80vh] w-auto mx-auto"
        />
      </div>
    </div>
  );
}

// Image grid item component
function ImageGridItem({ image, index, isLoaded, onClick }) {
  return (
    <div
      className={`relative group cursor-pointer mb-4 break-inside-avoid ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onClick={onClick}
    >
      <div className="relative w-full overflow-hidden">
        <img
          src={image.src}
          alt={`${image.category} photography ${index + 1}`}
          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>
    </div>
  );
}

function GalleryLayout({ title, description, images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);

  // Improved animation logic with better timing
  useEffect(() => {
    const loadImages = () => {
      setLoadedImages((prev) => [...prev, 0]);
      images.slice(1).forEach((_, index) => {
        setTimeout(() => {
          setLoadedImages((prev) => [...prev, index + 1]);
        }, (index + 1) * 200); // Reduced delay for smoother animation
      });
    };

    const timer = setTimeout(loadImages, 300);
    return () => clearTimeout(timer);
  }, [images]);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-600">{description}</p>
        </div>

        <div className="columns-3 gap-4">
          {images.map((image, index) => (
            <ImageGridItem
              key={index}
              image={image}
              index={index}
              isLoaded={loadedImages.includes(index)}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </div>
  );
}

export default GalleryLayout;
