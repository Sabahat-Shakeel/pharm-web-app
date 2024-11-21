export default function Footer() {
  return (
    <footer
      className="font-sans pt-11 text-black/70"
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-delay="100"
    >
      <div className="space-y-12">
        <hr />
        <h3 className="flex justify-center text-2xl font-semibold">
          Our Services
        </h3>
        <p className="flex justify-center portrait:ml-9 sm:text-lg">
          Comprehensive solutions for medical, skincare, and health care needs.
        </p>

        <div className="">
          <div className="space-y-3 mt-12">
            <h4 className="text-xl text-center pb-11 font-semibold ">
              Medical Products
            </h4>
            <ul className="grid grid-cols-2 sm:grid sm:grid-cols-4 pb-8 mt-11 ml-3">
              <li>First Aid Kits</li>
              <li>Thermometers</li>
              <li>Blood Pressure</li>
              <li>Pulse Oximeters</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl text-center pb-11 pt-11 font-semibold ">
              Skincare Products
            </h4>
            <ul className="sm:grid sm:grid-cols-4 pb-8 mt-11 ml-3 portrait:grid portrait:grid-cols-2">
              <li>Moisturizing Creams</li>
              <li>Sunscreens</li>
              <li>Anti-Aging Serums</li>
              <li>Face Cleansers</li>
            </ul>
          </div>

          <div className="">
            <h4 className="text-xl text-center pb-9 pt-9 font-semibold ">
              Health Care Products
            </h4>
            <ul className="sm:grid sm:grid-cols-4 pb-6 mt-11 ml-3 portrait:grid portrait:grid-cols-2">
              <li>Protein Powders</li>
              <li>Herbal Remedies</li>
              <li>Fitness Trackers</li>
              <li>Vitamin Supplements</li>
            </ul>
          </div>
        </div>
        <hr className=" shadow shadow-cyan-800" />
        <p className="text-center sm:pb-11 text-black/65">
          &copy; 2024 sabahat medical hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
