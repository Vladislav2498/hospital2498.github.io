import filterArr from "./filterCards.js";
import visitsArray from "../index.js";
// import filterBySelect from "./filterCardsBySelect.js";
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
  <option selected>Status</option>
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
  <option selected>Priority</option>
  <option>High</option>
  <option>Normal</option>
  <option>Low</option>
</select>
  `
  );

  formStatus.addEventListener("change", async (e) => {
    filterArr(
      visitsArray,
      e.target.closest(".main__wrapper").children[0].value,
      e.target.closest(".main__wrapper").children[1].children[1].value,
      e.target.value
    );
  });
  formPriority.addEventListener("change", (e) => {
    filterArr(
      visitsArray,
      e.target.parentNode.previousSibling.value,
      e.target.value,
      e.target.parentNode.nextSibling.children[1].value
    );
  });
  searchInput.addEventListener("input", (e) => {
    filterArr(
      visitsArray,
      e.target.value,
      e.target.nextSibling.children[1].value,
      e.target.nextSibling.nextSibling.children[1].value
    );
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
