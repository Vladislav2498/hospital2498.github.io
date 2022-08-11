import { visitDentist } from "../classes/modal-lera.js";
import { visitCardiologist } from "../classes/modal-lera.js";
import { visitTherapist } from "../classes/modal-lera.js";
const chooseDoctorListener = (targetValue, currentModal) => {
  if (targetValue === "1") {
    currentModal.deleteModal();
    new visitDentist().render();
  } else if (targetValue === "2") {
    currentModal.deleteModal();
    new visitTherapist().render();
  } else if (targetValue === "3") {
    currentModal.deleteModal();
    new visitCardiologist().render();
  } else {
    currentModal.deleteModal();
    new ModalLera().render();
  }
};
export default chooseDoctorListener;
