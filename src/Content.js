import React from "react";
import Left_Content from "./Left_Content";
import Right_Content from "./Right_Content";
import '../public/assets/css/style.css';
import '../public/assets/css/lightbox.css';


const Content = () => {
  return (
    <div className="center_content">
      <Left_Content/>
      <Right_Content/>
      <div className="clear">
        
      </div>
    </div>
  );
};
export default Content;
