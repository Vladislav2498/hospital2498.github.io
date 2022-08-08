import VisitCards from "./renderVisitCards.js";
class VisitCardsDentist extends VisitCards {
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
    lastVisit
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
    this.lastVisit = lastVisit;
  }
  createElements() {
    super.createElements();
    this.moreInfo.insertAdjacentHTML(
      "afterbegin",
      `
    <p>LAST VISIT DATE: ${this.lastVisit}</p>
    `
    );
  }
  render() {
    super.render();
  }
}

export default VisitCardsDentist;
