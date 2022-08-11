"use strict";
import getServerData from "./api/loginOk.js";
import openLoginModal from "./functions/login.js";
import renderSearchFilters from "./functions/renderFilters.js";
const logInBtn = document.querySelector(".header__logIn--btn");

logInBtn.addEventListener("click", openLoginModal);

let visitsArray = [];
console.log(visitsArray);

export default visitsArray;

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.Authorization) {
    getServerData();
    renderSearchFilters();
  } else {
    return;
  }
});
