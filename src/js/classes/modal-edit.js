// import checkForDobuleSelect from "../functions/checkOptionSelect.js";

import putRequest from "../functions/changeCard.js";

class ModalEdit {
  constructor({
    name,
    doctor,
    visitPurpouse,
    description,
    priority,
    status,
    lastVisit,
    age,
    pressure,
    massIndex,
    diseases,
    id,
  }) {
    this.name = name;
    this.purpose = visitPurpouse;
    this.description = description;
    this.priority = priority;
    this.doctor = doctor;
    this.status = status;
    this.lastVisit = lastVisit;
    this.age = age;
    this.pressure = pressure;
    this.massIndex = massIndex;
    this.diseases = diseases;
    this.id = id;
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
    this.optionDoctorSelect = document.createElement("select");
    this.optionSelectLow = document.createElement("Low");
    this.optionSelectNormal = document.createElement("Normal");
    this.optionSelectHigh = document.createElement("High");
    this.options = this.checkForDobuleSelect(
      this.priority,
      "Low",
      "Normal",
      "High"
    );
  }
  deleteModal() {
    this.modalBackground.remove();
  }

  checkForDobuleSelect(currentSelector, ...args) {
    return [...args].filter((el) => el !== currentSelector);
  }
  createElement() {
    this.optionDoctorSelect.id = "inputUrgencyDentist";
    this.optionDoctorSelect.classList.add("form-select");
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
    this.closeButton.addEventListener("click", (e) => {
      this.container.innerHTML = "";
      this.container.classList.remove("modal");
      this.modalBackground.classList.remove("modal-background");
    });
    this.submitButton.addEventListener("click", (e) => {
      console.log("FETCH CHANGE PATH");
      putRequest(this);
    });
    this.submitButton.innerText = "Submit changes";
    this.wrapperDiv.append(this.chooseDoctorP, this.select);
    this.wrapperDiv.insertAdjacentHTML(
      "beforeend",
      `
  <form class=" row g-3">
  <div class="col-md-12">
      <label for="inputNameDentist" class="form-label">Name</label>
      <input type="email" class="form-control" id="inputNameDentist" value="${this.name}" >
  </div>
  <div class="col-12">
      <label for="inputWorriesDentist" class="form-label">Purpose of visit</label>
      <input type="text" class="form-control" id="inputWorriesDentist" value="${this.purpose}" >
  </div>
  <div class="col-12">
      <label for="inputDescriptionDentist" class="form-label">description of the visit</label>
      <input type="text" class="form-control" id="inputDescriptionDentist" value="${this.description}" >
  </div>
  <div class="col-md-6">
      <label for="inputUrgencyDentist" class="form-label">Urgency</label>
      <select id="inputUrgencyDentist" class="form-select">
      <option selected>${this.priority}</option>
      <option>${this.options[0]}</option>
      <option>${this.options[1]}</option>
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

export default ModalEdit;
