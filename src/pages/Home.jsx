import GalleryLayout from "../components/GalleryLayout";
import { getCategoryImages } from "../config/images";

function Home() {
  const images = getCategoryImages("personal");

  return <GalleryLayout images={images} />;
}

export default Home;
