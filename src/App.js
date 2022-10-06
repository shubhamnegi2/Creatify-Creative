// import MobileBottomMenu from './MobileBottomMenu';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import Quote from "./Quote";
import "./css/header.css";
import "./css/footer.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Quote />
      <Footer />
    </>
  );
}

export default App;
