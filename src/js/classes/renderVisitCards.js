import visitsArray from "../index.js";

class VisitCards {
  constructor(
    name,
    doctor,
    description,
    urgency,
    purpose,
    status,
    id,
    display
  ) {
    this.name = name;
    this.doctor = doctor;
    this.description = description;
    this.priority = urgency;
    this.visitPurpouse = purpose;
    this.status = status;
    this.cardWrapper = document.createElement("div");
    this.moreInfo = document.createElement("div");
    this.id = id;
    this.display = display;
  }

  createElements() {
    this.moreInfo.style.display = `${this.display}`;
    this.showMoreBtn = document.createElement("button");
    this.showMoreBtn.innerText = "show more";
    this.editBtn = document.createElement("button");
    this.editBtn.innerText = "edit";
    this.editBtn.addEventListener("click", () => {
      console.log("modal with editing ");
    });
    this.moreInfo.insertAdjacentHTML(
      "afterbegin",
      `
        <p><span>DESCRIPTION</span>: ${this.description}</p>
        <p><span>VISIT PURPOUSE</span>:${this.visitPurpouse}</p>
        `
    );
    this.showMoreBtn.addEventListener("click", (e) => {
      console.log(e.target.textContent);
      if (this.display === "none") {
        this.moreInfo.style.display = "block";
        this.showMoreBtn.innerText = "show less";
        this.display = "block";
        visitsArray.find((el) => {
          if (el.id === this.id) {
            el.display = "block";
            el.showMoreBtn.innerText = "show less";

            console.log(
              "THIS ",
              this.showMoreBtn.textContent,
              "has to be EL",
              el.showMoreBtn.textContent
            );

            // el.showMoreBtn.innerText = "show less";
            // console.log(el.showMoreBtn);
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
            console.log(
              "THIS ",
              this.showMoreBtn.textContent,
              "has to be EL",
              el.showMoreBtn.textContent
            );

            // el.showMoreBtn.innerText = "show more";
            // console.log(el.showMoreBtn);
          }
        });
      }
    });
    this.cardWrapper.insertAdjacentHTML(
      "afterbegin",
      `
        <h2><span>NAME</span>:${this.name}</h2>
        <h3><span>DOCTOR</span>:${this.doctor}</h3>
        <p><span>PRIORITY</span>:${this.priority}</p>
        <p><span>STATUS</span>:${this.status}</p>
        `
    );
    this.cardWrapper.append(this.moreInfo, this.showMoreBtn, this.editBtn);
  }
  render(selector = document.querySelector(".card_container")) {
    this.createElements();
    selector.append(this.cardWrapper);
  }
}

export default VisitCards;

// NEW DATA
// doctor,
//   name,
//   purpose,
//   description,
//   urgency,
//   lastVisit,
//   age,
//   pressure,
//   massIndex,
//   diseases,
//   status;

// name,
// doctor,
// showmoreBtn,
// description,
// visitPurpouse,
// status,
// priority

// Кардиолог
// Normal pressure,
// Body mass index,
// diseases of the cardiovascular system,
// age,

// Dentist
// last visit Date

// Therapist
// age
