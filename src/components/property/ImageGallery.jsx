import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ImageGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <div className="container mx-auto px-4">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="h-[400px] rounded-lg"
      >
        <SwiperSlide>
          <img
            src="/src/assets/images/property-1.jpg"
            alt="Property view"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
      
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mt-4 h-24"
      >
        <SwiperSlide>
          <img
            src="/src/assets/images/property-1.jpg"
            alt="Property thumbnail"
            className="w-full h-full object-cover cursor-pointer rounded"
          />
        </SwiperSlide>
        {/* Add more thumbnail slides */}
      </Swiper>
    </div>
  );
};

export default ImageGallery;