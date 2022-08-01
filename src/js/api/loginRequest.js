import checkResStatus from "../functions/checkStatus.js";
import getServerData from "./loginOk.js";
const userLogin = async (email, password) => {
  const token = await fetch("https://ajax.test-danit.com/api/v2/cards/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: `${email}`, password: `${password}` }),
  }).then((res) => checkResStatus(res));
  if (token) {
    localStorage.setItem("Authorization", `Bearer ${token}`);
    document.querySelector(".modal__background").remove();
    getServerData();
    return true;
  } else {
    console.log("Incorrect data");
  }
};

export default userLogin;
