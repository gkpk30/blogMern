import React from 'react';
import HeroImg from '../assets/images/eco-friendly-face-min.jpeg'
// import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';





export default function Header() {
  return (
    <div className=" mt-20  font-third  ">
        <div className=" flex flex-col items-center text-[#444] h-14 relative   ">
            <span className="  absolute top-[0%]  text-xl  ">Beauty & Fashion</span>
            <span className="absolute top-[30%]    text-8xl ">Blog</span>
        </div>
        <img className=" w-full h-5/6  object-cover " src={HeroImg} alt="lady eco friendly" />
    </div>
  )
}
