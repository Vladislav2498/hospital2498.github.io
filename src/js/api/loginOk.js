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
  }
};

export default getServerData;
