import VisitCards from "./renderVisitCards.js";

class VisitCardsTherapist extends VisitCards {
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
    age
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
  }
  createElements() {
    super.createElements();
    this.moreInfo.insertAdjacentHTML(
      "afterbegin",
      `
    <p>AGE: ${this.age}</p>
    `
    );
  }
  render() {
    super.render();
  }
}
export default VisitCardsTherapist;
