import img1 from "../assets/CertificateResponsiveWebDesign.png";
import img2 from "../assets/CertificateResponsiveWebDesign.png";
import img3 from "../assets/CertificateResponsiveWebDesign.png";
import img4 from "../assets/CertificateResponsiveWebDesign.png";

const images = [
  { src: img1, alt: "Project 1" },
  { src: img2, alt: "Project 2" },
  { src: img3, alt: "Project 3" },
  { src: img4, alt: "Project 4" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
