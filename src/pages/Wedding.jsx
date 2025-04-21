import { getCategoryImages } from '../config/images';
import GalleryLayout from '../components/GalleryLayout';

function Wedding() {
  const images = getCategoryImages('wedding');

  return (
    <GalleryLayout
      title="Wedding Gallery"
      description="Capturing your special day"
      images={images}
    />
  );
}

export default Wedding;
