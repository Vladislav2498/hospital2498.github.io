import ModalEdit from "./modal-edit.js";

class ModalEditTherapist extends ModalEdit {
  constructor(
    name,
    doctor,
    visitPurpouse,
    description,
    priority,
    status,
    age,
    id
  ) {
    super(name, doctor, visitPurpouse, description, priority, status, age, id);
  }
  createElement() {
    super.createElement();
    this.submitButton.removeAttribute("disabled");
    this.therapistContainer = document.createElement("div");
    this.optionTherapist.setAttribute("selected", "value");
    this.therapistContainer.classList.add(".therapistContainer");
    this.therapistContainer.insertAdjacentHTML(
      "afterbegin",
      `
       <div class="col-12">
              <label for="inputAgeTherapist" class="form-label">Your age:</label>
              <input type="text" class="form-control" id="inputAgeTherapist" value="${this.age}" >
          </div>
      `
    );
    this.wrapperDiv.append(this.therapistContainer);
  }
  render(selector) {
    super.render();
  }
}

export default ModalEditTherapist;
