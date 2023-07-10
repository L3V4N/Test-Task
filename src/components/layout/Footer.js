import React from "react";

export const Footer = () => {
  return (
    <div id="footer">
      <div id="first-column">
        <h2>paga</h2>
        <address>
          2425 E Camelback Rd Suite 150,<br></br> Phoenix, AZ 85016
        </address>
        <a className="mail" href="mailto:email@example.com">
          info@paga.com
        </a>
      </div>
      <div className="second-column">
        <li id="footer-menu">Menu</li>
        <li>About</li>
        <li>Selected Works</li>
        <li>Contact</li>
      </div>

      <div className="third-column">
        <p>Follow us</p>
        <a href="https://www.instagram.com/" className="fa fa-instagram">
          instagram
        </a>
        <a href="https://www.facebook.com/" className="fa fa-facebook">
          acebook
        </a>
      </div>
    </div>
  );
};
