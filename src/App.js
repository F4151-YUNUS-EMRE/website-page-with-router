import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import HTML from "./pages/Html";
import Css from "./pages/Css";
import Logo from "./pages/Logo";

function App() {
  return (
    <>
    <Navbar/>
    <Routes> 
    <Route path="/" element={<Home/>}></Route>
    <Route path="/html" element={<HTML />}></Route>
    <Route path="/css" element={<Css />}></Route>
    <Route path="/logo" element={<Logo />}></Route>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
