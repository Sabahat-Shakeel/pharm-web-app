import Image from "next/image";
export default function SkinCare() {
  return (
    <div
      className=" min-h-[50vh] space-y-5 "
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-delay="100"
    >
      <h2 className="space-y-4 text-center text-4xl font-sans font-semibold text-black/65 shadow-inner shadow-slate-700 ">
        Skin Care
      </h2>

      <div className="sm:grid sm:grid-cols-3 sm:ml-5 portrait:place-content-center grid  ">
        <div className=" bg-gradient-to-tl to-gray-100 via-gray-400 from-gray-100 border border-stone-400 sm:w-96 sm:h-72 portrait:w-52 rounded-lg shadow-2xl shadow-black/70 mt-16 hover:shadow-2xl hover:shadow-slate-700">
          <Image
            src="/serumm.jpg"
            alt="serum img"
            width={200}
            height={200}
            className="sm:ml-16 portrait:ml-7 mt-1 rounded-xl portrait:w-[150px]"
          />
          <h3 className="text-black/80 font-sans sm:ml-16  portrait:ml-5 font-semibold ">
            Face serum
          </h3>
          <p className="text-black/80 font-sans text-wrap sm:ml-16 font-semibold portrait:ml-5   ">
            Keep your skin hydrated all day long.
          </p>
          <div className="sm:ml-16 portrait:ml-5  ">★★★★★</div>
        </div>

        <div className=" bg-gradient-to-tl to-gray-100 via-gray-400 from-gray-100 border border-stone-400 sm:w-96 sm:h-72 portrait:w-52 rounded-lg shadow-2xl shadow-black/70 mt-16 hover:shadow-2xl hover:shadow-slate-700">
          <Image
            src="/cream2.jpg"
            alt="cream img"
            width={200}
            height={200}
            className="sm:ml-16 portrait:ml-7 mt-1 rounded-xl portrait:w-[150px]"
          />
          <h3 className="text-black/80 font-sans sm:ml-16  portrait:ml-5 font-semibold ">
            Face cream
          </h3>
          <p className="text-black/80 font-sans text-wrap sm:ml-16 font-semibold portrait:ml-5   ">
            Keep your skin hydrated all day long.
          </p>
          <div className="sm:ml-16 portrait:ml-5  ">★★★★★</div>
        </div>

        <div className=" bg-gradient-to-tl to-gray-100 via-gray-400 from-gray-100 border border-stone-400 sm:w-96 sm:h-72 portrait:w-52 rounded-lg shadow-2xl shadow-black/70 mt-16 hover:shadow-2xl hover:shadow-slate-700">
          <Image
            src="/creamm.jpg"
            alt="cream img"
            width={200}
            height={200}
            className="sm:ml-16 portrait:ml-7 mt-1 rounded-xl portrait:w-[150px]"
          />
          <h3 className="text-black/80 font-sans sm:ml-16  portrait:ml-5 font-semibold ">
            Moisturizing Cream
          </h3>
          <p className="text-black/80 font-sans text-wrap sm:ml-16 font-semibold portrait:ml-5   ">
            Keep your skin hydrated all day long.
          </p>
          <div className="sm:ml-16 portrait:ml-5  ">★★★★★</div>
        </div>
      </div>
    </div>
  );
}
