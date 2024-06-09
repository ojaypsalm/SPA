import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import About from "./About";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div>
      <Header />
      <div id="home">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          style={{
            marginTop: "10%",
            width: "50%",
            height: 600,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SwiperSlide>
            <img
              src="./asset/p1.jpg"
              alt="pictures"
              
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./asset/p2.jpg" alt="pictures" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./asset/p3.jpg" alt="pictures" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./asset/p4.jpg" alt="pictures" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./asset/p5.jpg" alt="pictures" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./asset/p6.jpg" alt="pictures" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./asset/p7.jpg" alt="pictures" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./asset/p8.jpg" alt="pictures" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./asset/p1.jpg" alt="pictures" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div id="contact">
        <Contact />
      </div>
      <div id="about">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
