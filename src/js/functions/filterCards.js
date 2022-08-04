import renderFilteredCards from "./renderFilteredCards.js";

export const inputFilteredArr = [];

const container = document.querySelector(".card_container");
const filterArr = (dataArray, filterByValue) => {
  const filteredArr = dataArray.filter(
    ({ title, description }) =>
      title.toLowerCase().includes(filterByValue.toLowerCase()) ||
      description.toLowerCase().includes(filterByValue.toLowerCase())
  );
  inputFilteredArr = filteredArr;
  // card_container
  if (filteredArr.length !== 0) {
    container.innerHTML = "";
    renderFilteredCards(filteredArr);
  } else {
    return;
  }
};

export default filterArr;
