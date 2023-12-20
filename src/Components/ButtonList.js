import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const name = [
    "All",
    "Web",
    "React",
    "Tailwind",
    "Redux",
    "Web",
    " Front End Developer",
    " PHP",
    "Javascript",
  ];
  return (
    <div className="flex  flex-col-3 sm:flex-col-6">
      {name.map((name, i) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
