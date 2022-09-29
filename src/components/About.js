import React from "react";
import aboutImage from 'images/about-img.jpg'

export default function About() {
    return (
        <div className="bg-black w-full flex justify-center items-center">
            <h1 className="text-white font-Syne font-regular text-3xl leading-20 max-w-5xl py-4 absolute" >Our mission is to turn this world into a better place by creating our high-quality products from recycled materials. Let the nature rest and fellow human beings survive </h1>

            <img className="object-cover	" src={aboutImage} alt="" />
        </div>
      )
}