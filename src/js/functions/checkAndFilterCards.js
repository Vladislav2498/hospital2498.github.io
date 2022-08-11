import visitsArray from "../index.js";
import VisitCardsDentist from "../classes/renderVisitCardsDentist.js";
import VisitCardsCardiologist from "../classes/renderVisitCardsCardiologist.js";
import VisitCardsTherapist from "../classes/renderVisitCardsTherapist.js";

const checkAndFilterCard = (doctor, element, display) => {
  if (display === "none") {
    if (doctor === "Cardiologist") {
      const {
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status,
        id,
        age,
        pressure,
        massIndex,
        diseases,
      } = element;
      const newElement = new VisitCardsCardiologist(
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status,
        id,
        "none",
        "show more",
        age,
        pressure,
        massIndex,
        diseases
      );
      newElement.render();
    } else if (doctor === "Dentist") {
      const {
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status,
        id,
        lastVisit,
      } = element;
      const newElement = new VisitCardsDentist(
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status,
        id,
        "none",
        "show more",
        lastVisit
      );
      newElement.render();
    } else {
      const {
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status,
        id,
        age,
      } = element;
      const newElement = new VisitCardsTherapist(
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status,
        id,
        "none",
        "show more",
        age
      );
      newElement.render();
    }
  } else {
    if (doctor === "Cardiologist") {
      const {
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status,
        id,
        age,
        pressure,
        massIndex,
        diseases,
      } = element;
      const newElement = new VisitCardsCardiologist(
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status,
        id,
        "block",
        "show less",
        age,
        pressure,
        massIndex,
        diseases
      );
      newElement.render();
    } else if (doctor === "Dentist") {
      const {
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status,
        id,
        lastVisit,
      } = element;
      const newElement = new VisitCardsDentist(
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status,
        id,
        "block",
        "show less",
        lastVisit
      );
      newElement.render();
    } else {
      const {
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status,
        id,
        age,
      } = element;
      const newElement = new VisitCardsTherapist(
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status,
        id,
        "block",
        "show less",
        age
      );
      newElement.render();
    }
  }
};

export default checkAndFilterCard;
