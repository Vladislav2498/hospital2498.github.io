import ModalLera from "../classes/modal-lera.js";
import VisitCards from "../classes/renderVisitCards.js";
import openLoginModal from "../functions/login.js";
import visitsArray from "../index.js";
const getServerData = async () => {
  const getCards = await fetch("https://ajax.test-danit.com/api/v2/cards/", {
    headers: {
      "Content-type": "application/json",
      Authorization: `${localStorage.getItem("Authorization")}`,
    },
  }).then((res) => res.text());
  const logInBtn = document.querySelector(".header__logIn--btn");
  logInBtn.removeEventListener("click", openLoginModal);
  logInBtn.addEventListener("click", () => {
    new ModalLera().render();
  });
  if (JSON.parse(getCards).length === 0) {
    document.querySelector(".header__logIn--btn").innerText = "Create Visit";
    document.querySelector(
      ".card_container"
    ).innerHTML = `<h2>the visits is empty</h2>`;
  } else {
    document.querySelector(".header__logIn--btn").innerText = "Create Visit";
    // переписать на вызов модалки ивент листенер обязателен
    JSON.parse(getCards).forEach((element) => {
      const { name, doctor, description, priority, visitPurpouse, status } =
        element;
      new VisitCards(
        name,
        doctor,
        description,
        priority,
        visitPurpouse,
        status
      ).render();
      visitsArray.push(element);
    });
  }
};

export default getServerData;
