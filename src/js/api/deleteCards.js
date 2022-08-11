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
};
export default deleteCards;
