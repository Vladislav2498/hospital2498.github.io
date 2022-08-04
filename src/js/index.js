"use strict";
import getServerData from "./api/loginOk.js";
import openLoginModal from "./functions/login.js";
import renderSearchFilters from "./functions/renderFilters.js";
const logInBtn = document.querySelector(".header__logIn--btn");

logInBtn.addEventListener("click", openLoginModal);

let visitsArray = [];

export default visitsArray;

document.addEventListener("DOMContentLoaded", () => {
  console.log(localStorage);
  if (localStorage.Authorization) {
    getServerData();
    renderSearchFilters();
  } else {
    return;
  }
});
