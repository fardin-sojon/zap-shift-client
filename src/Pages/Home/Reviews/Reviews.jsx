import React, { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewsPromise.then((data) => {
      setReviews(data);
    });
  }, [reviewsPromise]);

  // console.log(reviews);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold mt-15">Reviews</h2>
        <p className="my-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          perferendis deserunt cumque! Tenetur odio doloribus laboriosam dolorem
          consequatur? Deleniti labore quisquam unde sunt voluptates possimus
          fugit ab dicta a obcaecati.
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          scale: 0.75,
          modifier: 1,
          slideShadows: true,
        }}
       loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
