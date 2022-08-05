import userLogin from "../api/loginRequest.js";
class Modal {
  constructor() {
    this.body = document.querySelector("body");
    this.modalBackground = document.createElement("div");
    this.div = document.createElement("div");
    this.form = document.createElement("form");
    this.labelEmail = document.createElement("label");
    this.inputEmail = document.createElement("input");
    this.labelPassword = document.createElement("label");
    this.inputPassowrd = document.createElement("input");
    this.submitBtn = document.createElement("button");
  }

  createElement() {
    this.modalBackground.classList.add("modal__background");
    this.submitBtn.innerText = "Submit";
    this.div.classList.add("modal", "container");
    this.form.classList.add("modal__form");
    this.inputEmail.classList.add("input__information");
    this.labelEmail.classList.add("modal__label");
    this.labelEmail.innerText = "e-mail";
    this.inputPassowrd.classList.add("input__information");
    this.labelPassword.innerText = "password";

    this.labelPassword.classList.add("modal__label");
    this.form.append(
      this.labelEmail,
      this.inputEmail,
      this.labelPassword,
      this.inputPassowrd,
      this.submitBtn
    );
    this.div.append(this.form);
    this.submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      userLogin(this.inputEmail.value, this.inputPassowrd.value);
    });
    this.modalBackground.append(this.div);
    this.modalBackground.addEventListener("click", (e) => {
      if (e.target === this.modalBackground) {
        this.modalBackground.remove();
      }
    });
  }
  render(selector) {
    this.createElement();
    document.querySelector("body").append(this.modalBackground);
  }
}

export default Modal;
