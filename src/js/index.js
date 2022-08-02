"use strict";
import openLoginModal from "./functions/login.js";
const logInBtn = document.querySelector(".header__logIn--btn");

logInBtn.addEventListener("click", openLoginModal);

let visitsArray = [];

export default visitsArray;
