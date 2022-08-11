import visitsArray from "../index.js";
import VisitCardsDentist from "../classes/renderVisitCardsDentist.js";
import VisitCardsCardiologist from "../classes/renderVisitCardsCardiologist.js";
import VisitCardsTherapist from "../classes/renderVisitCardsTherapist.js";

const checkCard = (doctor, element) => {
  if (doctor === "Cardiologist") {
    const {
      name,
      doctor,
      description,
      urgency,
      purpose,
      status,
      id,
      ageCardiologist: age,
      pressure,
      massIndex,
      diseases,
    } = element;
    const newElement = new VisitCardsCardiologist(
      name,
      doctor,
      description,
      urgency,
      purpose,
      status,
      id,
      "none",
      "show more",
      age,
      pressure,
      massIndex,
      diseases
    );

    visitsArray.push(newElement);
    newElement.render();
  } else if (doctor === "Dentist") {
    const {
      name,
      doctor,
      description,
      urgency,
      purpose,
      status,
      id,
      lastVisit,
    } = element;
    const newElement = new VisitCardsDentist(
      name,
      doctor,
      description,
      urgency,
      purpose,
      status,
      id,
      "none",
      "show more",
      lastVisit
    );

    visitsArray.push(newElement);
    newElement.render();
  } else {
    const {
      name,
      doctor,
      description,
      urgency,
      purpose,
      status,
      id,
      ageTherapist: age,
    } = element;
    const newElement = new VisitCardsTherapist(
      name,
      doctor,
      description,
      urgency,
      purpose,
      status,
      id,
      "none",
      "show more",
      age
    );

    visitsArray.push(newElement);
    newElement.render();
  }
};

export default checkCard;
