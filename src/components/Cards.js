import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {


  return (
    <div>
      <div className="cards">
        <h1>My Project - Ing</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="img/img1.jpg"
                text="HTML / CSS3 / JAVASCRIPT 로 만든 영어 타자연습게임 입니다:)"
                label="Eng / 타자연습"
                path="/project"
              />
              <CardItem
                src="img/img2.jpg"
                text="Explore the hidden ㅋㅋㅋㅋ"
                label="Adventure"
                path="/project"
              />
            </ul>
            <ul className="cards__items">
            <CardItem
              src="img/img1.jpg"
              text="Explore the hidden ㅋㅋㅋㅋzzzzzzz"
              label="Adventure"
              path="/project"
            />
            <CardItem
              src="img/img2.jpg"
              text="Explore the hidden ㅋㅋㅋㅋzzzzz"
              label="Adventure"
              path="/project"
            />
            <CardItem
            src="img/img2.jpg"
            text="Explore the hidden ㅋㅋㅋㅋzzzzz"
            label="Adventure"
            path="/project"
          />
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
