"use strict";

import checkCard from "../functions/checkAndRenderClass.js";
import checkFields from "../functions/checkForRequiredFields.js";
import visitsArray from "../index.js";
import chooseDoctorListener from "../functions/chooseDoctorListener.js";
import getInputValuesRecieveRes from "../functions/getInputValuesRecieveRes.js";

class ModalLera {
  constructor() {
    this.modalBackground = document.createElement("div");
    this.container = document.createElement("div");
    this.divButton = document.createElement("div");
    this.closeButton = document.createElement("button");
    this.submitButton = document.createElement("button");
    this.p = document.createElement("p");
    this.select = document.createElement("select");
    this.optionDefault = document.createElement("option");
    this.optionDentist = document.createElement("option");
    this.optionTherapist = document.createElement("option");
    this.optionCardiologist = document.createElement("option");
    this.wrapperDiv = document.createElement("div");
    this.chooseDoctorP = document.createElement("p");
  }
  deleteModal() {
    this.modalBackground.remove();
  }
  createElement() {
    this.chooseDoctorP.innerText = "Select the doctor you would like to visit:";
    this.chooseDoctorP.classList.add("choose-doctor");
    this.optionDefault.innerText = "choose doctor:";
    this.select.id = "select-doctor";
    this.select.classList.add("form-select");
    this.optionDentist.innerText = "Dentist";
    this.optionTherapist.innerText = "Therapist";
    this.optionCardiologist.innerText = "Cardiologist";
    this.optionDentist.value = "1";
    this.optionTherapist.value = "2";
    this.optionCardiologist.value = "3";
    this.optionDefault.selected = true;
    this.select.append(
      this.optionDefault,
      this.optionDentist,
      this.optionTherapist,
      this.optionCardiologist
    );
    this.select.addEventListener("change", (e) => {
      chooseDoctorListener(e.target.value, this);
    });
    this.modalBackground.classList.add("modal-background");
    this.modalBackground.append(this.container);
    this.container.classList.add("container", "modal");
    this.closeButton.innerText = "CANCEL";
    this.closeButton.classList.add(
      "cancelVisit",
      "modalButton",
      "close",
      "btn",
      "btn-outline-danger"
    );
    this.submitButton.classList.add(
      "createVisit",
      "modalButton",
      "btn",
      "btn-success"
    );
    this.submitButton.type = "submit";
    this.submitButton.setAttribute("disabled", true);

    this.modalBackground.addEventListener("click", (e) => {
      if (e.target === this.modalBackground) {
        this.modalBackground.remove();
      }
    });

    this.closeButton.addEventListener("click", (e) => {
      this.container.innerHTML = "";
      this.container.classList.remove("modal");
      this.modalBackground.classList.remove("modal-background");
    });
    this.submitButton.addEventListener("click", async (e) => {
      getInputValuesRecieveRes();
    });
    this.submitButton.innerText = "CREATE VISIT";
    this.wrapperDiv.append(this.chooseDoctorP, this.select);
    this.wrapperDiv.insertAdjacentHTML(
      "beforeend",
      `
  <form class=" row g-3">
  <div class="col-md-12">
      <label for="inputNameDentist" class="form-label">Name</label>
      <input type="email" class="form-control" id="inputNameDentist" placeholder="Jhon" >
  </div>
  <div class="col-12">
      <label for="inputWorriesDentist" class="form-label">Purpose of visit</label>
      <input type="text" class="form-control" id="inputWorriesDentist" placeholder="What worries you?" >
  </div>
  <div class="col-12">
      <label for="inputDescriptionDentist" class="form-label">description of the visit</label>
      <input type="text" class="form-control" id="inputDescriptionDentist" placeholder="Briefly describe your complaints" >
  </div>
  <div class="col-md-6">
      <label for="inputUrgencyDentist" class="form-label">Urgency</label>
      <select id="inputUrgencyDentist" class="form-select">
          <option selected>Choose...</option>
          <option>Low</option>
          <option>Normal</option>
          <option>High</option>
      </select>
  </div>
  `
    );
    this.divButton.classList.add("divButton");
    this.divButton.append(this.submitButton);
    this.divButton.append(this.closeButton);
    this.container.append(this.wrapperDiv);
    this.container.append(this.divButton);
  }
  render(selector) {
    this.createElement();
    document.querySelector("body").append(this.modalBackground);
  }
}
export class visitDentist extends ModalLera {
  constructor() {
    super();
    this.dentistContainer = document.createElement("div");
  }
  deleteModal() {
    super.deleteModal();
  }
  createElement() {
    super.createElement();
    this.submitButton.removeAttribute("disabled");
    this.optionDentist.setAttribute("selected", "value");
    this.dentistContainer.classList.add(".dentistContainer");
    this.dentistContainer.insertAdjacentHTML(
      "beforeend",
      `
       <div id="dentist" class=" col-12">
              <label for="inputLastVisitDentist" class="form-label">Your last visit to doctor:</label>
              <input type="text" class="form-control" id="inputLastVisitDentist" placeholder="01.01.321" ">
        </div>
      `
    );
    this.wrapperDiv.append(this.dentistContainer);
  }
  render(selector) {
    super.render();
  }
}
export class visitCardiologist extends ModalLera {
  constructor() {
    super();
    this.cardiologistContainer = document.createElement("div");
  }
  deleteModal() {
    super.deleteModal();
  }
  createElement() {
    super.createElement();
    this.submitButton.removeAttribute("disabled");
    this.optionCardiologist.setAttribute("selected", "value");
    this.cardiologistContainer.classList.add(".cardiologistContainer");
    this.cardiologistContainer.insertAdjacentHTML(
      "afterbegin",
      `
       <div class="row input-margin">
              <div class="col-md-6">
                  <label for="inputPressureCardiologist" class="form-label">Normal pressure</label>
                  <input type="text" class="form-control" id="inputPressureCardiologist" placeholder="120/80" >
              </div>
              <div class="col-md-6">
                  <label for="inputIndexCardiologist" class="form-label">Body mass index</label>
                  <input type="text" class="form-control" id="inputIndexCardiologist" placeholder="26,64 kg/m²" >
              </div>
              <div class="col-md-12">
                  <label for="inputDiseasesCardiologist" class="form-label">if you have any previous diseases of the cardiovascular system, describe them:</label>
                  <input type="text" class="form-control" id="inputDiseasesCardiologist" >
              </div>
          </div>
          <div class="row input-margin">
              <div class="col-md-6">
                  <label for="inputAgeCardiologist" class="form-label">Your Age</label>
                  <input type="text" class="form-control" id="inputAgeCardiologist" >
              </div>
      `
    );
    this.wrapperDiv.append(this.cardiologistContainer);
  }
  render(selector) {
    super.render();
  }
}
export class visitTherapist extends ModalLera {
  constructor(container) {
    super();
  }
  deleteModal() {
    super.deleteModal();
  }
  createElement() {
    super.createElement();
    this.submitButton.removeAttribute("disabled");
    this.therapistContainer = document.createElement("div");
    this.optionTherapist.setAttribute("selected", "value");
    console.log(this.optionTherapist);
    this.therapistContainer.classList.add(".therapistContainer");
    this.therapistContainer.insertAdjacentHTML(
      "afterbegin",
      `
       <div class="col-12">
              <label for="inputAgeTherapist" class="form-label">Your age:</label>
              <input type="text" class="form-control" id="inputAgeTherapist" >
          </div>
      `
    );
    this.wrapperDiv.append(this.therapistContainer);
  }
  render(selector) {
    super.render();
  }
}

export default ModalLera;
