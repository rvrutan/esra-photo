import { useState } from 'react';

function Medical() {
    const images = [
        { src: 'DSC_3139 kopya.jpeg', size: 'large' },
        { src: 'DSC_3142 kopya.jpeg', size: 'medium' },
        { src: 'DSC_3147 kopya.jpeg', size: 'medium' },
        { src: 'DSC_3394 kopyason.jpeg', size: 'large' },
        { src: 'IMG_5151 kopyaaaaa.jpeg', size: 'small' },
        { src: 'IMG_5201 kopya.jpeg', size: 'small' }
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    const getImageClass = (size) => {
        switch(size) {
            case 'large':
                return 'md:col-span-2 md:row-span-2';
            case 'medium':
                return 'md:col-span-1 md:row-span-2';
            case 'small':
                return 'md:col-span-1 md:row-span-1';
            default:
                return '';
        }
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Medical Gallery</h1>
                    <p className="text-lg">Precision in medical photography</p>
                </div>

                {/* Modern Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className={`relative group cursor-pointer ${getImageClass(image.size)}`}
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <div className="absolute inset-0 overflow-hidden">
                                <img
                                    src={`/medical/${image.src}`}
                                    alt={`Medical photography ${index + 1}`}
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
                                src={`/medical/${selectedImage}`}
                                alt="Selected photography"
                                className="max-h-[80vh] w-auto mx-auto rounded-lg"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Medical;
