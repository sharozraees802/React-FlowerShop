import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import '../public/assets/css/style.css';
import '../public/assets/css/lightbox.css';



const App = () => {
  return <div id="wrap">
    <Header/>
    <Content/>
    <Footer/>
  </div>;
};
export default App;
