import visitsArray from "../index.js";
const getServerData = async () => {
  const getCards = await fetch("https://ajax.test-danit.com/api/v2/cards/", {
    headers: {
      "Content-type": "application/json",
      Authorization: `${localStorage.getItem("Authorization")}`,
    },
  }).then((res) => res.text());
  if (JSON.parse(getCards).length === 0) {
    document.querySelector(".header__logIn--btn").innerText = "Create Visit";
    document.querySelector(
      ".card_container"
    ).innerHTML = `<h2>the visits is empty</h2>`;
  } else {
    document.querySelector(".header__logIn--btn").innerText = "Create Visit";
    // переписать на вызов модалки ивент листенер обязателен
    JSON.parse(getCards).forEach((element) => {
      const {
        title,
        description,
        doctor,
        bp,
        age,
        weight,
        case: status,
      } = element;
      visitsArray.push(element);
      document.querySelector(".card_container").insertAdjacentHTML(
        "afterbegin",
        `
        <div class="card">
        <h2>${title}</h2>
        <h3>${doctor}</h3>
        <p>${description}</p>
        <p>${age}</p>
        <p>${bp}</p>
        <p>${weight}</p>
        <p>${status}</p>
        </div>
      `
      );
    });
  }
};

export default getServerData;
