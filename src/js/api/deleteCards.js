import visitsArray from "../index.js";
const deleteCards = async (id, cardWrapper) => {
  const token = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `${localStorage.getItem("Authorization")}`,
    },
  }).then(() => JSON.stringify(id));
  if (token) {
    localStorage.setItem(
      "Authorization",
      `${localStorage.getItem("Authorization")}`
    );
    cardWrapper.remove();
  }
  visitsArray.find((el, index) => {
    if (el.id === id) {
      visitsArray.splice(index, 1);
    }
  });
  if (visitsArray.length === 0) {
    document.querySelector(".header__logIn--btn").innerText = "Create Visit";
    document.querySelector(
      ".card_container"
    ).innerHTML = `<h2 class="empty-card">the visits is empty</h2>`;
  }
};
export default deleteCards;
