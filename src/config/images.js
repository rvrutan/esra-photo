export const imageCategories = {
  home: {
    path: '/home',
    images: [
      { src: 'DSC02007 kopya.JPG', size: 'large' },
      { src: 'DSC01442 kopya-2.JPG', size: 'small' },
      { src: 'DSC01456 kopya-6.jpeg', size: 'small' },
      { src: 'DSC01464 kopya-3.JPG', size: 'small' },
      { src: 'DSC01974 kopya.JPG', size: 'small' }
    ]
  },
  medical: {
    path: '/medical',
    images: [
      { src: 'DSC_3139 kopya.jpeg', size: 'medium' },
      { src: 'DSC_3142 kopya.jpeg', size: 'small' },
      { src: 'DSC_3147 kopya.jpeg', size: 'large' },
      { src: 'DSC_3394 kopyason.jpeg', size: 'medium' },
      { src: 'IMG_5151 kopyaaaaa.jpeg', size: 'large' },
      { src: 'IMG_5201 kopya.jpeg', size: 'medium' }
    ]
  },
  personal: {
    path: '/personal',
    images: [
      { src: 'DSCF6454 kopya.jpeg', size: 'medium' },
      { src: 'DSCF6375.jpeg', size: 'medium' },
           { src: 'DSCF6374-2.jpeg', size: 'medium' },
 { src: 'DSCF6454 kopya-2.jpeg', size: 'small' },
      { src: 'DSCF6454 kopya-3.jpeg', size: 'small' }
    ]
  }
};

// Helper function to get full image path
export const getImagePath = (category, filename) => {
  return `${imageCategories[category].path}/${filename}`;
};

// Helper function to get all images for a category
export const getCategoryImages = (category) => {
  return imageCategories[category].images.map(img => ({
    ...img,
    src: getImagePath(category, img.src),
    category
  }));
};

// Helper function to get mixed images from multiple categories
export const getMixedImages = (categories = ['home', 'medical', 'personal']) => {
  return categories.flatMap(category => getCategoryImages(category));
};