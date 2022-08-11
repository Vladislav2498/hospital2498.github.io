import visitsArray from "../index.js";
import ModalEdit from "./modal-edit.js";
import ModalEditCardiologist from "./modal-editCardiologist.js";
import DentistEdit from "./modal-editDentist.js";
import ModalEditTherapist from "./modal-editTherapist.js";
import ModalLera from "./modal-lera.js";
// import deleteCards from "../api/deleteCards";

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
        this.cardWrapper.classList.add('card__unit');
        this.cardCross = document.createElement('div');
        this.cardCross.classList.add('close-cross')
        this.moreInfo = document.createElement("div");
        this.id = id;
        this.display = display;
        this.showMoreBtnText = showMoreBtnText;
    }

    createElements() {
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
        this.cardWrapper.append(this.cardCross)
        this.cardWrapper.insertAdjacentHTML(
            "beforeend",
            `
        <h2><span>NAME</span>:${this.name}</h2>
        <h3><span>DOCTOR</span>:${this.doctor}</h3>
        <p><span>PRIORITY</span>:${this.priority}</p>
        <p><span>STATUS</span>:${this.status}</p>
        `
        );
        this.cardWrapper.append(this.moreInfo, this.showMoreBtn, this.editBtn);

        this.cardCross.addEventListener('click', async (e) => {
            console.log(this.id)
                const token = await fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `${localStorage.getItem("Authorization")}`
                    },
                }).then(() => JSON.stringify(this.id));
                if (token) {
                    localStorage.setItem("Authorization", `${localStorage.getItem("Authorization")}`);
                    this.cardWrapper.remove();
                }
            })
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
