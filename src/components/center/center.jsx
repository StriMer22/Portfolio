import React from "react";
import "./center.css";
import Photo from "../../assets/About-me.jpg";

function center() {
  return (
    <div id="about-me" className="about-me_container">
      <div>
        <img src={Photo} alt="Photo of the person's portfolio" />
      </div>
      <div className="about_info">
        <h1>ABOUT ME</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quam! Et temporibus perspiciatis repudiandae. Veniam, repellendus sunt! Veritatis similique, laborum ut culpa consequuntur dicta iusto possimus consequatur est beatae perspiciatis?
        </span>
      </div>
    </div>
  );
}

export default center;
