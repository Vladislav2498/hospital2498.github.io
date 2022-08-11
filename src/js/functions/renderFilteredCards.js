import visitsArray from "../index.js";
import VisitCards from "../classes/renderVisitCards.js";
import checkAndFilterCard from "./checkAndFilterCards.js";
let renderFilteredCards = (array) => {
  array.forEach((element) => {
    const { doctor, display } = element;
    checkAndFilterCard(doctor, element, display);
  });
};

export default renderFilteredCards;
