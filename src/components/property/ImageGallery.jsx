import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ImageGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  const images = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',  // Hotel front
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025',  // Pool
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070',  // Room
    'https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2070',  // Restaurant
    'https://images.unsplash.com/photo-1617859047452-8510bcf207fd?q=80&w=2070',  // Kids pool
    'https://images.unsplash.com/photo-1599056407101-7c00fd9529ef?q=80&w=2071'   // Soccer field
  ];

  return (
    <div className="container mx-auto px-4">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="h-[500px] rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Hotel Santa Lucía - View ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mt-4 h-24"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;