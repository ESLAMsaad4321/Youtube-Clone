import { useState } from "react";
import "./_categoriesBar.scss";
const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guiter",
  "Coding",
  "Bengali Songs",
  "Cricket",
  "Football",
  "Real Madrid",
  "Getsby",
  "Poor Coder",
  "Shwetabh",
];
const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState('All');
  return (
    <div className="CategoriesBar">
      {keywords.map((item, index) => {
        return (
          <span
            onClick={() => {
              setActiveElement(item);
            }}
            className={activeElement===item?'active':''}
            key={index}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default CategoriesBar;
