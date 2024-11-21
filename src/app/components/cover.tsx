export default function Cover() {
  return (
    <div
      style={{
        backgroundImage: "url('/cover1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        objectPosition: "fit",
      }}
      className=" shadow-inner shadow-slate-500  place-content-center flex justify-center"
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-delay="100"
    ></div>
  );
}
