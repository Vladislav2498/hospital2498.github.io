import visitsArray from "../index.js";
import VisitCards from "../classes/renderVisitCards.js";
import checkAndFilterCard from "./checkAndFilterCards.js";
let renderFilteredCards = (array) => {
  array.forEach((element) => {
    const { doctor, display } = element;
    checkAndFilterCard(doctor, element, display);
    // const { name, doctor, description, priority, visitPurpouse, status, id } =
    //   element;
    // if (element.display === "none") {
    //   new VisitCards(
    //     name,
    //     doctor,
    //     description,
    //     priority,
    //     visitPurpouse,
    //     status,
    //     id,
    //     "none"
    //   ).render();
    // } else {
    //   new VisitCards(
    //     name,
    //     doctor,
    //     description,
    //     priority,
    //     visitPurpouse,
    //     status,
    //     id,
    //     "block"
    //   ).render();
    // }
  });
};

export default renderFilteredCards;
