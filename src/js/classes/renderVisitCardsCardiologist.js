import VisitCards from "./renderVisitCards.js";

class VisitCardsCardiologist extends VisitCards {
  constructor(
    name,
    doctor,
    description,
    urgency,
    purpose,
    status,
    id,
    display = "none",
    showMoreBtnText = "show more",
    age,
    pressure,
    massIndex,
    diseases
  ) {
    super(
      name,
      doctor,
      description,
      urgency,
      purpose,
      status,
      id,
      display,
      showMoreBtnText
    );
    this.age = age;
    this.pressure = pressure;
    this.massIndex = massIndex;
    this.diseases = diseases;
  }
  createElements() {
    super.createElements();
    this.moreInfo.insertAdjacentHTML(
      "afterbegin",
      `
      <p>AGE: ${this.age}</p>
      <p>PREASSURE: ${this.pressure}</p>
      <p>MASS INDEX: ${this.massIndex}</p>
      <p>DISEASES: ${this.diseases}</p>

      `
    );
  }
  render() {
    super.render();
  }
}

export default VisitCardsCardiologist;

//   age,
//   pressure,
//   massIndex,
//   diseases,
