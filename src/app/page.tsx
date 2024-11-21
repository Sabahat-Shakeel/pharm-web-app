import About from "./components/about";
import Cover from "./components/cover";
import Cover2 from "./components/cover2";
import Cover3 from "./components/cover3";

import Footer from "./components/footer";
import Header from "./components/header";
import Medicine from "./components/medicine";
import MedicalProducts from "./components/medkit";
import Nav from "./components/nav";
import SkinCare from "./components/skin";

export default function Home() {
  return (
    <div className="space-y-7">
      <Header />
      <Cover />
      <Nav />
      <MedicalProducts />
      <Cover2 />
      <SkinCare />
      <Cover3 />
      <Medicine />
      <About />

      <Footer />
    </div>
  );
}
