import filterArr from "./filterCards.js";
import visitsArray from "../index.js";
const renderSearchFilters = () => {
  const container = document.querySelector(".main__wrapper");
  const searchInput = document.createElement("input");
  const searchDropMenu = document.createElement("input");
  searchInput.addEventListener("input", (e) => {
    filterArr(visitsArray, e.target.value);
  });
  container.prepend(searchInput);
};

// експортируем после рендера
export default renderSearchFilters;

// {
//   "title": "Визит к кардиологу",
//   "description": "Плановый визит",
//   "doctor": "Cardiologist",
//   "bp": "24",
//   "age": "23",
//   "weight": "70",
//   "case": "urgent"
// }
