import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        At Lars Pizzeria, we believe that pizza is more than just food—it’s an experience, a celebration of flavors, and a way to bring people together. Our passion for creating the perfect slice starts with the finest ingredients, from freshly made dough to the ripest vegetables and the best cheese.

We’re proud to serve our community with love, one pizza at a time. Whether you’re here for a quick bite, a family dinner, or a slice of comfort, our goal is to make sure every bite leaves you smiling.

From our kitchen to your table, thank you for being a part of our story. Come in, take a seat, and enjoy pizza the way it was meant to be!


        </p>
      </div>
    </div>
  );
}

export default About;
