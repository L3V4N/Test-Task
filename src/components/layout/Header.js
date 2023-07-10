import React from "react";

export const Header = () => {
  return (
    <div className="navigation">
      <img src="/images/logo.svg" alt="paga"/>
      <ul>
        <li>About</li>
        <li>
          <a className="selected-works" href="#selected-works">Selected Works</a>
        </li>
        <li>
          <a className="nav-contact" href="#footer">Contact </a>{" "}
        </li>
      </ul>
      <span className="Menu">Menu</span>
    </div>
  );
};
