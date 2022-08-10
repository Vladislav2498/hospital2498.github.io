import ModalEdit from "./modal-edit.js";

class ModalEditCardiologist extends ModalEdit {
  constructor(
    name,
    doctor,
    visitPurpouse,
    description,
    priority,
    status,
    pressure,
    massIndex,
    diseases,
    age,
    id
  ) {
    super(
      name,
      doctor,
      visitPurpouse,
      description,
      priority,
      status,
      pressure,
      massIndex,
      diseases,
      age,
      id
    );
    this.cardiologistContainer = document.createElement("div");
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
                      <input type="text" class="form-control" id="inputPressureCardiologist" value="${this.pressure}" >
                  </div>
                  <div class="col-md-6">
                      <label for="inputIndexCardiologist" class="form-label">Body mass index</label>
                      <input type="text" class="form-control" id="inputIndexCardiologist" value="${this.massIndex}" >
                  </div>
                  <div class="col-md-12">
                      <label for="inputDiseasesCardiologist" class="form-label">if you have any previous diseases of the cardiovascular system, describe them:</label>
                      <input type="text" class="form-control" id="inputDiseasesCardiologist" value="${this.diseases}" >
                  </div>
              </div>
              <div class="row input-margin">
                  <div class="col-md-6">
                      <label for="inputAgeCardiologist" class="form-label">Your Age</label>
                      <input type="text" class="form-control" id="inputAgeCardiologist" value="${this.age}" >
                  </div>
          `
    );
    this.wrapperDiv.append(this.cardiologistContainer);
  }
  render(selector) {
    super.render();
  }
}

export default ModalEditCardiologist;
