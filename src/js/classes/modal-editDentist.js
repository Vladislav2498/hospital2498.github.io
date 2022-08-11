import modalEdit from "./modal-edit.js";
import ModalEditTherapist from "./modal-editTherapist.js";

class DentistEdit extends modalEdit {
  constructor(
    name,
    doctor,
    visitPurpouse,
    description,
    priority,
    status,
    lastVisit,
    id
  ) {
    super(
      name,
      doctor,
      visitPurpouse,
      description,
      priority,
      status,
      lastVisit,
      id
    );
    this.dentistContainer = document.createElement("div");
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
              <input type="text" class="form-control" id="inputLastVisitDentist" value="${this.lastVisit}" ">

        </div>
      `
    );

    this.wrapperDiv.append(this.dentistContainer);
  }
  render() {
    super.render();
  }
}

export default DentistEdit;
