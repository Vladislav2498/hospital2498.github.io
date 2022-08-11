import checkResStatus from "../functions/checkStatus.js";
import getServerData from "./loginOk.js";
import openLoginModal from "../functions/login.js";
import renderSearchFilters from "../functions/renderFilters.js";
import Modal from "../classes/modal.js";
import ModalLera from "../classes/modal-lera.js";
const userLogin = async (email, password) => {
  const token = await fetch("https://ajax.test-danit.com/api/v2/cards/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: `${email}`, password: `${password}` }),
  }).then((res) => checkResStatus(res));
  if (token) {
    localStorage.setItem("Authorization", `Bearer ${token}`);
    document.querySelector(".login__modal--background").remove();

    getServerData();
    renderSearchFilters();
  } else {
    document.querySelector(".login__error")?.remove();
    document.querySelector(".login__modal--form").insertAdjacentHTML(
      "beforeend",
      `
    <div class="login__error" style="color:red">Incorrect username or password</div>
    `
    );
  }
};

export default userLogin;
