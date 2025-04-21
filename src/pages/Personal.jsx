import { getCategoryImages } from '../config/images';
import GalleryLayout from '../components/GalleryLayout';

function Personal() {
  const images = getCategoryImages('personal');

  return (
    <GalleryLayout
      title="Personal Gallery"
      description="Capturing moments, creating memories"
      images={images}
    />
  );
}

export default Personal;
