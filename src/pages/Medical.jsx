import { getCategoryImages } from '../config/images';
import GalleryLayout from '../components/GalleryLayout';

function Medical() {
  const images = getCategoryImages('medical');

  return (
    <GalleryLayout
      title="Medical Gallery"
      description="Professional medical photography"
      images={images}
    />
  );
}

export default Medical;
