import React, { Suspense } from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import Features from "../Features/Features";
import Banner2 from "../Banner/Banner2";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());
// console.log(reviewsPromise);

const Home = () => {
  return (
    <div className="py-7">
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <Features></Features>
      <Banner2></Banner2>
      <Suspense>
        <Reviews reviewsPromise={reviewsPromise}></Reviews>
      </Suspense>
    </div>
  );
};

export default Home;
