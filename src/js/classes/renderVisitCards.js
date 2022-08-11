import visitsArray from "../index.js";
import ModalEdit from "./modal-edit.js";
import ModalEditCardiologist from "./modal-editCardiologist.js";
import DentistEdit from "./modal-editDentist.js";
import ModalEditTherapist from "./modal-editTherapist.js";
import ModalLera from "./modal-lera.js";
import deleteCards from "../api/deleteCards.js";

class VisitCards {
  constructor(
    name,
    doctor,
    description,
    urgency,
    purpose,
    status,
    id,
    display,
    showMoreBtnText
  ) {
    this.name = name;
    this.doctor = doctor;
    this.description = description;
    this.priority = urgency;
    this.visitPurpouse = purpose;
    this.status = status;
    this.cardWrapper = document.createElement("div");
    this.cardWrapper.classList.add("card__unit");
    this.moreInfo = document.createElement("div");
    this.id = id;
    this.display = display;
    this.showMoreBtnText = showMoreBtnText;
    this.cardCross = document.createElement("div");
    this.cardCross.classList.add("svg-width");
    this.cardCross.insertAdjacentHTML(
      "beforeend",
      `<svg class="close-cross" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 80 80" style="enable-background:new 0 0 80 80;" xml:space="preserve" width="80" height="80">
<g>
\t<polygon style="" points="40,49.007 15.714,73.293 6.707,64.286 30.993,40 6.707,15.714 15.714,6.707 40,30.993    64.286,6.707 73.293,15.714 49.007,40 73.293,64.286 64.286,73.293  "/>
\t<path style="fill:#000000" d="M15.714,7.414l23.578,23.578L40,31.7l0.707-0.707L64.286,7.414l8.3,8.3L49.007,39.293L48.3,40   l0.707,0.707l23.578,23.579l-8.3,8.3L40.707,49.007L40,48.3l-0.707,0.707L15.714,72.586l-8.3-8.3l23.579-23.579L31.7,40   l-0.707-0.707L7.414,15.714L15.714,7.414 M64.286,6L40,30.286L15.714,6L6,15.714L30.286,40L6,64.286L15.714,74L40,49.714L64.286,74   L74,64.286L49.714,40L74,15.714L64.286,6L64.286,6z"/>
</g>
</svg>`
    );
  }

  createElements() {
    this.cardWrapper.classList.add(`card-id__${this.id}`);
    this.moreInfo.style.display = `${this.display}`;
    this.showMoreBtn = document.createElement("button");
    this.showMoreBtn.innerText = this.showMoreBtnText;
    this.editBtn = document.createElement("button");
    this.editBtn.innerText = "edit";
    this.editBtn.addEventListener("click", () => {
      if (this.doctor === "Dentist") {
        new DentistEdit(this).render();
      } else if (this.doctor === "Therapist") {
        new ModalEditTherapist(this).render();
      } else if (this.doctor === "Cardiologist") {
        new ModalEditCardiologist(this).render();
      } else {
        console.log("UNKNOWN DOCTOR");
      }
    });
    this.moreInfo.insertAdjacentHTML(
      "afterbegin",
      `
        <p><span>DESCRIPTION</span>: ${this.description}</p>
        <p><span>VISIT PURPOUSE</span>:${this.visitPurpouse}</p>
        `
    );
    this.showMoreBtn.addEventListener("click", (e) => {
      if (this.display === "none") {
        this.moreInfo.style.display = "block";
        this.showMoreBtn.innerText = "show less";
        this.display = "block";
        visitsArray.find((el) => {
          if (el.id === this.id) {
            el.display = "block";
            el.showMoreBtn.innerText = "show less";
          }
        });
      } else {
        this.moreInfo.style.display = "none";
        this.showMoreBtn.innerText = "show more";
        this.display = "none";
        visitsArray.find((el) => {
          if (el.id === this.id) {
            el.display = "none";
            el.showMoreBtn.innerText = "show more";
          }
        });
      }
    });
    this.cardWrapper.append(this.cardCross);
    this.cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
            <h2><span>NAME</span>: ${this.name}</h2>
            <h3><span>DOCTOR</span>: ${this.doctor}</h3>
            <p><span>PRIORITY</span>: ${this.priority}</p>
            <p><span>STATUS</span>: ${this.status}</p>
            `
    );
    this.cardWrapper.append(this.moreInfo, this.showMoreBtn, this.editBtn);
    this.cardCross.addEventListener("click", async (e) => {
      await deleteCards(this.id, this.cardWrapper);
    });
  }
  render(selector = document.querySelector(".card_container")) {
    this.createElements();
    selector.append(this.cardWrapper);
  }
}

export default VisitCards;

// // NEW DATA
// // doctor,
// //   name,
// //   purpose,
// //   description,
// //   urgency,
// //   lastVisit,
// //   age,
// //   pressure,
// //   massIndex,
// //   diseases,
// //   status;

// // name,
// // doctor,
// // showmoreBtn,
// // description,
// // visitPurpouse,
// // status,
// // priority

// // Кардиолог
// // Normal pressure,
// // Body mass index,
// // diseases of the cardiovascular system,
// // age,

// // Dentist
// // last visit Date

// // Therapist
// // age
