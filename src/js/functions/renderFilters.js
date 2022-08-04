import filterArr from "./filterCards.js";
import visitsArray from "../index.js";
import filterBySelect from "./filterCardsBySelect.js";
const renderSearchFilters = () => {
  const container = document.querySelector(".main__wrapper");
  const searchInput = document.createElement("input");
  const searchDropMenu = document.createElement("input");
  const formStatus = document.createElement("form");
  const formPriority = document.createElement("form");
  formStatus.insertAdjacentHTML(
    "afterbegin",
    `
  <label>Choose a status</label>
<select>
  <option selected disabled hidden>Status</option>
  <option>Open</option>
  <option>Done</option>
</select>
  `
  );
  formPriority.insertAdjacentHTML(
    "afterbegin",
    `
    <label>Choose a visit priority</label>
  <select>
  <option selected disabled hidden>Priority</option>
  <option>High</option>
  <option>Medium</option>
  <option>Low</option>
</select>
  `
  );

  formStatus.addEventListener("change", (e) => {
    console.log(e.target.value);
    filterBySelect();
  });
  formPriority.addEventListener("change", (e) => {
    console.log(e.target.value);
    filterBySelect();
  });
  searchInput.addEventListener("input", (e) => {
    filterArr(visitsArray, e.target.value);
  });
  container.prepend(searchInput, formPriority, formStatus);
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

{
  /* <form class="select__status">
<label>Choose a status</label>
<select>
  <option selected disabled hidden>Status</option>
  <option>Open</option>
  <option>Done</option>
</select>
</form>

<form class="select__priority">
<label>Choose a visit priority</label>
<select>
  <option selected disabled hidden>Priority</option>
  <option>High</option>
  <option>Medium</option>
  <option>Low</option>
</select>
</form> */
}
