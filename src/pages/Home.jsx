import { useState } from "react";

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/DSC02007 kopya.JPG", alt: "Gallery 1" },
    { src: "/DSC01442 kopya-2.JPG", alt: "Gallery 2" },
    { src: "/DSC01456 kopya-6.jpeg", alt: "Gallery 3" },
    { src: "/DSC01464 kopya-3.JPG", alt: "Gallery 4" },
    { src: "/DSC01974 kopya.JPG", alt: "Gallery 5" },
  ];

  return (
    <div className="space-y-10 px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full md:w-1/2 object-cover cursor-pointer"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
