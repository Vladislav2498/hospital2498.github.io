import renderFilteredCards from "./renderFilteredCards.js";

// export let inputFilteredArr = [];

// const container = document.querySelector(".card_container");
// const filterArr = async (dataArray, filterByValue) => {
//   let filteredArr = await dataArray.filter(
//     ({ name, description }) =>
//       name.toLowerCase().includes(filterByValue.toLowerCase()) ||
//       description.toLowerCase().includes(filterByValue.toLowerCase())
//   );
//   // inputFilteredArr = filteredArr;
//   // card_container
//   if (filteredArr.length !== 0) {
//     container.innerHTML = "";
//     renderFilteredCards(filteredArr);
//     return filteredArr;
//   } else {
//     container.innerHTML = "<h2>No results found</h2>";
//     return filteredArr;
//   }
// };

// export default filterArr;

const container = document.querySelector(".card_container");
const filterArr = async (
  dataArray,
  filterByValue,
  priorityValue,
  statusValue
) => {
  let filteredArr = await dataArray.filter(
    ({ name, description }) =>
      name.toLowerCase().includes(filterByValue.toLowerCase()) ||
      description.toLowerCase().includes(filterByValue.toLowerCase())
  );

  const filterByPrior = filteredArr.filter((el) => {
    const { priority } = el;
    if (priorityValue === "Priority") {
      return true;
    } else if (priorityValue !== "Priority" && priorityValue === priority) {
      return true;
    } else {
      return false;
    }
  });

  const filterByStatus = filterByPrior.filter((el) => {
    const { status } = el;
    if (statusValue === "Status") {
      return true;
    } else if (statusValue !== "Status" && statusValue === status) {
      return true;
    } else {
      return false;
    }
  });

  if (filteredArr.length !== 0) {
    container.innerHTML = "";
    // renderFilteredCards(filteredArr);
    renderFilteredCards(filterByStatus);

    return filteredArr;
  } else {
    container.innerHTML = "<h2>No results found</h2>";
    return filteredArr;
  }
};

export default filterArr;
