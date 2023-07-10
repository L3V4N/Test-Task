import React from "react";

export const Marquee = () => {
  const list = Array.from({ length: 50 }, () => [
    "Art Direction",
    "UI/UX Design",
    "App Development",
    "Branding",
    "Graphic Design",
    "Photography",
  ]).flat();

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {list.map((item, index) => {
          let color;

          if ((index + 1) % 6 === 1 || (index + 1) % 6 === 4) {
            color = "#E8DFF6";
          } else if ((index + 1) % 6 === 2 || (index + 1) % 6 === 5) {
            color = "#FCF081";
          } else {
            color = "#E4F2F5";
          }

          return (
            <div
              key={index}
              className="marquee-item"
              style={{
                background: color,
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
