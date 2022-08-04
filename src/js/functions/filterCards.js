import renderFilteredCards from "./renderFilteredCards.js";

// export let inputFilteredArr = [];

const container = document.querySelector(".card_container");
const filterArr = async (dataArray, filterByValue) => {
  let filteredArr = await dataArray.filter(
    ({ name, description }) =>
      name.toLowerCase().includes(filterByValue.toLowerCase()) ||
      description.toLowerCase().includes(filterByValue.toLowerCase())
  );
  // inputFilteredArr = filteredArr;
  // card_container
  if (filteredArr.length !== 0) {
    container.innerHTML = "";
    renderFilteredCards(filteredArr);
  } else {
    return (container.innerHTML = "<h2>No results found</h2>");
  }
};

export default filterArr;
