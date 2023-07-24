import useReview from "../../Hooks/useReview";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";



import '@smastrom/react-rating/style.css'


const Review = () => {
  const [review ]= useReview();
  return (
   <div>
    <h1 className="font-bold text-3xl underline mt-12 text-center">Reviews</h1>
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {review.map((review) => (
        <SwiperSlide key={review._id}>
          <div className="mx-24 my-16 flex flex-col items-center">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={review.student_img} />
              </div>
            </div>
            <Rating className="my-4" style={{ maxWidth: 180 }} value={review.rating} readOnly />
        
            <h2 className="text-2xl text-orange-400">{review.student_name}</h2>
            <p className="py-8">{review.review}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
   </div>
  );
};

export default Review;
