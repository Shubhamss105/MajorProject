import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeCards from "../components/cards/HomeCards";
import Hero from "../components/Hero";
import detailAction from "../redux/actions/detailActions";

const Home = () => {
  // console.log(information);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailAction());
  }, [dispatch]);
  return (
    <>
      <Hero />
      <div className='lg:mx-[10%] lg:mt-[3%] sm:mb-5'>
      <HomeCards/>
      </div>
    </>
  );
};

export default Home;
