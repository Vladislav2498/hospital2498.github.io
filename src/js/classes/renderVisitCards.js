class VisitCards {
  constructor(name, doctor, description, priority, visitPurpouse, status) {
    this.name = name;
    this.doctor = doctor;
    this.description = description;
    this.priority = priority;
    this.visitPurpouse = visitPurpouse;
    this.status = status;
    this.cardWrapper = document.createElement("div");
    this.moreInfo = document.createElement("div");
  }
  createElements() {
    this.moreInfo.style.display = "none";
    this.showMoreBtn = document.createElement("button");
    this.showMoreBtn.innerText = "show more";
    this.moreInfo.insertAdjacentHTML(
      "afterbegin",
      `
        <p>${this.description}</p>
        <p>${this.visitPurpouse}</p>
        `
    );
    this.showMoreBtn.addEventListener("click", (e) => {
      if (this.moreInfo.style.display === "none") {
        this.moreInfo.style.display = "block";
        this.showMoreBtn.innerText = "show less";
      } else {
        this.moreInfo.style.display = "none";
        this.showMoreBtn.innerText = "show more";
      }
    });
    this.cardWrapper.insertAdjacentHTML(
      "afterbegin",
      `
        <h2>${this.name}</h2>
        <h3>${this.doctor}</h3>
        <p>${this.priority}</p>
        <p>${this.status}</p>
        `
    );
    this.cardWrapper.append(this.moreInfo, this.showMoreBtn);
  }
  render(selector = document.querySelector(".card_container")) {
    this.createElements();
    selector.append(this.cardWrapper);
  }
}

export default VisitCards;
// name,
// doctor,
// showmoreBtn,
// description,
// visitPurpouse,
// status,
// priority

// Кардиолог
// Normal pressure,
// Body mass index,
// diseases of the cardiovascular system,
// age,

// Dentist
// last visit Date

// Therapist
// age
