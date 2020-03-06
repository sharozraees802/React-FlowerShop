import React from "react";


const Header = () => {
  return (
    <div class="header">
      <div class="logo">
        <a href="http://all-free-download.com/free-website-templates/">
          <img src="assets/images/logo.gif" alt="" border="0" />
        </a>
      </div>
      <div id="menu">
        <ul>
          <li class="selected">
            <a href="http://all-free-download.com/free-website-templates/">
              home
            </a>
          </li>
          <li>
            <a href="about.html">about us</a>
          </li>
          <li>
            <a href="category.html">flowers</a>
          </li>
          <li>
            <a href="specials.html">specials gifts</a>
          </li>
          <li>
            <a href="myaccount.html">my accout</a>
          </li>
          <li>
            <a href="register.html">register</a>
          </li>
          <li>
            <a href="details.html">prices</a>
          </li>
          <li>
            <a href="contact.html">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
