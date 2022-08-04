const renderFilteredCards = (array) => {
  const container = document.querySelector(".card_container");
  array.forEach(
    ({ title, doctor, description, age, bp, weight, status, prioriy }) => {
      container.insertAdjacentHTML(
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
        <p>${prioriy}</p>

        </div>
      `
      );
    }
  );
};

export default renderFilteredCards;
