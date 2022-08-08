import filterArr from "./filterCards.js";
import visitsArray from "../index.js";
// import filterBySelect from "./filterCardsBySelect.js";
const renderSearchFilters = () => {
  const container = document.querySelector(".main__wrapper");
  const filterContainer = document.createElement("div");
  filterContainer.classList.add("filter-container");
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
      e.target.closest(".filter-container").children[1].value,
      e.target.closest(".filter-container").children[2].children[1].value,
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
  const header = document.createElement("h1");
  header.innerText = "Find card";
  filterContainer.prepend(header, searchInput, formPriority, formStatus);
  container.prepend(filterContainer);
};

// експортируем после рендера
export default renderSearchFilters;
