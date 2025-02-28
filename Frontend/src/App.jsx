import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import FooterSection from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="py-[32px]"></div>
      <Outlet></Outlet>
      <FooterSection></FooterSection>
    </>
  );
}

export default App;
