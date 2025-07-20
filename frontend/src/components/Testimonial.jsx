import React from 'react'
import TestimonialCard from './TestimonialCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Testimonial() {
    function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" ,borderRadius: "100%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" ,borderRadius: "100%"}}
      onClick={onClick}
    />
  );
}
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />
  };
    const testimonials = [
  {
    name: "Aarav Sharma",
    profession: "Supply Chain Manager",
    message: "This platform transformed the way I manage logistics. It's efficient, fast, and incredibly user-friendly."
  },
  {
    name: "Meera Iyer",
    profession: "Operations Analyst",
    message: "The insights and analytics provided here helped our team reduce delivery delays by 30%."
  },
  {
    name: "Rohan Patel",
    profession: "Logistics Coordinator",
    message: "Seamless experience from start to finish. The interface is intuitive and the customer support is excellent."
  },
  {
    name: "Priya Nair",
    profession: "Procurement Specialist",
    message: "The tools offered here have streamlined our procurement process and improved vendor relationships."
  },
  {
    name: "Devansh Mehta",
    profession: "Warehouse Manager",
    message: "I’ve never had a better experience managing inventory. Real-time updates make all the difference."
  },
  {
    name: "Anjali Deshmukh",
    profession: "Freight Operations Lead",
    message: "Great support team and powerful logistics tools. It’s made my day-to-day work much more manageable."
  },
  {
    name: "Rahul Varma",
    profession: "E-commerce Logistics Specialist",
    message: "Perfect solution for startups and scaling businesses looking for smarter logistics workflows."
  }
];

  return (
    <div className= 'w-[85vw] p-5 '>
        <Slider {...settings}>
        {
           testimonials.map((t)=>{
            return (
                <TestimonialCard name={t.name} prof={t.profession} message={t.message} />
            )
           }) 
        }
        </Slider>
    </div>
  )
}
