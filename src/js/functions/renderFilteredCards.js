import visitsArray from "../index.js";
import VisitCards from "../classes/renderVisitCards.js";
let renderFilteredCards = (array) => {
  array.forEach((element, index) => {
    const { name, doctor, description, priority, visitPurpouse, status, id } =
      element;
    if (element.display === "none") {
      new VisitCards(
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status,
        id,
        "none"
      ).render();
    } else {
      new VisitCards(
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status,
        id,
        "block"
      ).render();
    }
  });
};

export default renderFilteredCards;
