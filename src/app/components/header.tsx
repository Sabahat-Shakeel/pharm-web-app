"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <header>
       <div className="overflow-x-hidden bg-gradient-to-tl to-gray-200 via-gray-400 from-gray-200 flex justify-center shadow shadow-cyan-900">
        <h1 className="text-black/70 mt-1 text-center font-sans sm:place-content-center font-bold">
          PHARMACEUTICAL
        </h1>
        <Image
          src="/sign.png"
          alt="hospital img"
          width={50}
          height={50}
          className="mix-blend-color-burn text-black/70 mt-1 text-center font-sans sm:place-content-center rounded-full"
        />
      </div>


         <div className="min-h-screen place-content-center space-y-16 bg-gradient-to-tl to-gray-400 via-gray-300 from-gray-600"
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-delay="100">

     
      <div className=" text-center">
        <h1 className="text-black/80 font-sans text-4xl sm:text-6xl font-semibold shadow shadow-cyan-900 sm:h-44 h-32 place-content-center  to-cyan-200 via-blue-300 from-cyan-700 t">
          Medical Health Skincare and Pharmacy Products
        </h1>
      </div>

      <p className="font-sans sm:font-thin text-cyan-900 text-wrap text-center sm:text-4xl leading-5">
        Your one-stop solution for quality healthcare and skincare products. We
        deliver excellence to keep you healthy and beautiful.
      </p>
      <div className="text-center place-content-center">
        <Link href="">
          {" "}
          <button className="shadow hover:text-white/70 text-black/80 rounded-lg sm:px-8 sm:py-4 border border-slate-700 px-4 py-2 min-w-fit border-dotted hover:scale-105 bg-gradient-to-tl to-blue-200 font-semibold hover:bg-gradient-to-tl hover:via-gray-900 hover:rounded-full">
            About Us
          </button>
        </Link>
      </div>
      </div>
    </header>
  );
}
