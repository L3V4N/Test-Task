import React from "react";

export const WorksSection = () => {
  const item = (id, name, year, className, src) => {
    return (
      <div id={id}>
        <p>{name}</p>
        <h6>{year}</h6>
        <img className={className} src={src} alt={id} />
      </div>
    );
  };

  return (
    <>
      <div id="selected-works">
        <h2>Selected Works</h2>
      </div>
      <div id="container">
        {item(
          "mauris",
          "Mauris ligula elit",
          "2013",
          "mauris-photo",
          "https://longlifeproject.cz/wp-content/uploads/2022/04/longlife_front-page_thumbnail-final.2-min.webp",
        )}
        {item(
          "nullam",
          "Nullam varius",
          "2015",
          "nullam-photo",
          "https://longlifeproject.cz/wp-content/uploads/2022/03/longlife_hover-5-min.webp",
        )}
        {item(
          "nunc",
          "Nunc et turpis nec",
          "2014",
          "nunc-photo",
          "https://longlifeproject.cz/wp-content/uploads/2022/03/longlife_hover-1-min.webp",
        )}
        {item(
          "ut",
          "Ut iaculis purus",
          "2013",
          "ut-photo",
          "https://longlifeproject.cz/wp-content/uploads/2022/03/longlife_hover-3-min.webp",
        )}
        {item(
          "praesent",
          "Praesent nisl nis",
          "2016",
          "praesent-photo",
          "https://longlifeproject.cz/wp-content/uploads/2022/03/longlife_hover-4-min.webp",
        )}
      </div>
    </>
  );
};
