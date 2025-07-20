import React from "react";
import Background2 from "../components/Background2";
import Welcome from "../components/Welcome";
import ServiceText from "../components/ServiceText";
import Title from "../components/Title";
import Gallery from "../components/Gallery";
import Testimonial from "../components/Testimonial";
import Products from "../components/Products";

export default function MainHome() {
  return (
    <Background2>
      <div>
        <div className="pt-5 ">
            <div className="flex justify-center">
            <Title text={"Welcome"} ></Title>

            </div>
          <Welcome></Welcome>
        </div>
      </div>
      <div>
        <ServiceText />
        <div>
        </div>
      </div>
      <div>
          <div className="flex justify-center">
            <Title text={"Our Projects"} colour={"black"} />
          </div>
        <div className="flex justify-center  min-h-screen">
          <Gallery />
        </div>
      </div>

      <div className="min-h-screen">
        <div className="flex justify-center mt-[80px]">
          <Title text={"Testimonial"} colour={"black"}></Title>
        </div>
        <div className="flex justify-center">
          <Testimonial />
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <Title text={"Our Products"} />
        </div>
        <div className="mb-5">

        <Products />
        </div>
      </div>
    </Background2>
  );
}
