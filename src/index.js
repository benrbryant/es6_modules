import WishList from "./classes/wishlist";

let form = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");
let makeDisplay = document.querySelector("#car-make");
let modelDisplay = document.querySelector("#car-model");
let yearDisplay = document.querySelector("#car-year");
let removeBtn = document.querySelector("#removeBtn");
let wishlistUl = document.querySelector("#wishListContainer > ul");

let wishlist = new WishList();

form.addEventListener("submit", addCar);

removeBtn.addEventListener("click", removeCar);

function updateDOMList() {
  wishlistUl.innerHTML = "";
  wishlist.list.forEach((car) => {
    const li = document.createElement("li");
    li.textContent = `${car.make} ${car.model}`;
    li.addEventListener("click", () => showCarDetails(car));
    wishlistUl.appendChild(li);
  });
}

function showCarDetails(car) {
  makeDisplay.textContent = car.make;
  modelDisplay.textContent = car.model;
  yearDisplay.textContent = car.year;
  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}

function addCar(event) {
  event.preventDefault();

  let make = makeInput.value;
  let model = modelInput.value;
  let year = yearInput.value;

  wishlist.add(make, model, year);

  updateDOMList();
}

function removeCar() {
  let carId = Number(removeBtn.getAttribute("data-carId"));
  wishlist.remove(carId);

  updateDOMList();

  makeDisplay.textContent = "";
  modelDisplay.textContent = "";
  yearDisplay.textContent = "";
  removeBtn.disabled = true;
}
