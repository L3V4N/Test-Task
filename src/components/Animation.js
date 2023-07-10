import React from "react";

export const Animation = () => {
  return (
    <div className="shape">
      <p className="big-name">Praesent pharetra turpis nisi</p>
      <section className="container">
        <img
          className="falling-animation circle"
          src="/images/circle.svg"
          alt="circle"
        />
        <img
          className="falling-animation rectabgle"
          src="/images/rectabgle.svg"
          alt="rectabgle"
        />
        <img
          className="falling-animation polygon"
          src="/images/polygon.svg"
          alt="polygon"
        />
        <img
          className="falling-animation elipse"
          src="/images/elipse.svg"
          alt="elipse"
        />
        <img
          className="falling-animation vector"
          src="/images/vector.svg"
          alt="vector"
        />
      </section>
    </div>
  );
};
