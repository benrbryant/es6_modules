import { WishList } from "./classes/WishList";
import { Car } from "./classes/Car";
import { updateDOM, displayCarInfo } from "./utils/DOMUtils";

window.onload = function () {
  const makeInput = document.getElementById("makeInput");
  const modelInput = document.getElementById("modelInput");
  const yearInput = document.getElementById("yearInput");
  const form = document.getElementById("submitForm");

  const wishList = new WishList();
  const [removeBtn] = document.getElementsByClassName("removeBtn");

  removeBtn.addEventListener("click", function () {
    wishList.remove(this.id);
    displayCarInfo({ make: "", model: "", year: "" });
    updateDOM(wishList);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;

    let newCar = new Car(make, model, year);
    wishList.add(newCar);

    updateDOM(wishList);
  });
};
