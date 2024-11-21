export default function Cover2() {
  return (
    <div
      style={{
        backgroundImage: "url('/cover2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        objectPosition: "fit",
      }}
      className=" shadow-inner shadow-slate-700  place-content-center flex justify-center"
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-delay="100"
    ></div>
  );
}
