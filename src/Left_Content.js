import React from "react";
import './style.css';



const Left_Content = () => {
  return (
    <div className="left_content">

    <div className="title"><span className="title_icon"><img src="assets/images/bullet1.gif" alt="" /></span>Featured products</div>
    <div className="feat_prod_box">
      <div className="prod_img"><a href="http://all-free-download.com/free-website-templates/"><img src="assets/images/prod1.gif" alt="" border="0" /></a></div>
      <div className="prod_det_box">
        <div className="box_top"></div>
        <div className="box_center">
          <div className="prod_title">Product name</div>
          <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <a href="http://all-free-download.com/free-website-templates/" className="more">- more details -</a>
          <div className="clear"></div>
        </div>
        <div className="box_bottom"></div>
      </div>
      <div className="clear"></div>
    </div>
    <div className="feat_prod_box">
      <div className="prod_img"><a href="http://all-free-download.com/free-website-templates/"><img src="assets/images/prod2.gif" alt="" border="0" /></a></div>
      <div className="prod_det_box">
        <div className="box_top"></div>
        <div className="box_center">
          <div className="prod_title">Product name</div>
          <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <a href="http://all-free-download.com/free-website-templates/" className="more">- more details -</a>
          <div className="clear"></div>
        </div>
        <div className="box_bottom"></div>
      </div>
      <div className="clear"></div>
    </div>
    <div className="title"><span className="title_icon"><img src="assets/images/bullet2.gif" alt="" /></span>New products</div>
    <div className="new_products">
      <div className="new_prod_box"> <a href="http://all-free-download.com/free-website-templates/">product name</a>
        <div className="new_prod_bg"> <span className="new_icon"><img src="assets/images/new_icon.gif" alt="" /></span> <a href="http://all-free-download.com/free-website-templates/"><img src="assets/images/thumb1.gif" alt="" className="thumb" border="0" /></a> </div>
      </div>
      <div className="new_prod_box"> <a href="http://all-free-download.com/free-website-templates/">product name</a>
        <div className="new_prod_bg"> <span className="new_icon"><img src="assets/images/new_icon.gif" alt="" /></span> <a href="http://all-free-download.com/free-website-templates/"><img src="assets/images/thumb2.gif" alt="" className="thumb" border="0" /></a> </div>
      </div>
      <div className="new_prod_box"> <a href="http://all-free-download.com/free-website-templates/">product name</a>
        <div className="new_prod_bg"> <span className="new_icon"><img src="assets/images/new_icon.gif" alt="" /></span> <a href="http://all-free-download.com/free-website-templates/"><img src="assets/images/thumb3.gif" alt="" className="thumb" border="0" /></a> </div>
      </div>
    </div>
    <div className="clear"></div>
  </div>
  );
};
export default Left_Content;
