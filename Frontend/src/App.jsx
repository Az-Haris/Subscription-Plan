import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import FooterSection from "./components/Footer";
import { assets } from "./assets/assets";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-[32px]"></div>
      <Outlet></Outlet>
      <FooterSection></FooterSection>
      <a href="https://wa.me/8801784410162?text=Hello!... Can I get more info?" target="_blank"><img className="w-16 md:w-20 fixed right-5 md:right-10 bottom-5 md:bottom-10 z-10" src={assets.Whatsapp} alt="" /></a>
    </div>
  );
}

export default App;
