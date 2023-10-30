import React from "react";
import Button from "./Button";

/*const list = [
  "All",
  "Tamil Cinema",
  "react js",
  "Ajith kumar",
  "Javascript",
  "Rajinikanth",
  "Movies",
  "Web ",
  "Dhee",
  "Game",
  "love",
];*/

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Tamil Cinema" />
      <Button name="Ajith kumar" />
      <Button name="Game" />
      <Button name="Dhee" />
      <Button name="Web " />
      <Button name="Movies" />
      <Button name="Rajinikanth" />
      <Button name="love" />
      <Button name="Javascript" />
      <Button name="react js" />
    </div>
  );
};

export default ButtonList;
