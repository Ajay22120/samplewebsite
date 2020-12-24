import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";
import Img from "../img/img-9.jpg";
import Img1 from "../img/img-2.jpg";
import Img2 from "../img/img-3.jpg";
import Img3 from "../img/img-4.jpg";
import Img4 from "../img/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wraper">
          <ul className="cards__items">
            <Carditem
              src={Img} 
              text="Explore the hidden waterfall deep
                    inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <Carditem
              src={Img1} 
              text="Travel through ths Islands of Bali in
              Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src={Img2} 
              text="Explore the hidden waterfall deep
                    inside the Amazon Jungle"
              label="Mystery"
              path="/services"
            />
            <Carditem
              src={Img3} 
              text="Travel through ths Islands of Bali in
              Private Cruise"
              label="Adventure"
              path="/services"
            />
            <Carditem
              src={Img4} 
              text="Travel through ths Islands of Bali in
              Private Cruise"
              label="Adrenaline"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
