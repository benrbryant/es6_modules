import WishList from "./classes/wishlist";

let form = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");
let wishlistUl = document.querySelector("#wishListContainer > ul");

let wishlist = new WishList();

form.addEventListener("submit", addCar);

document.querySelector(".removeBtn").addEventListener("click", removeCar);

function updateDOMList() {
  wishlistUl.innerHTML = "";
  wishlist.list.forEach((car) => {
    const li = document.createElement("li");
    li.textContent = `${car.make} ${car.model}`;
    li.addEventListener("click", () => showCarDetails(car))
    wishlistUl.appendChild(li);
  })
}

function showCarDetails(car) {
  // todo
}

function addCar(event) {
    event.preventDefault();

  let make = makeInput.value;
  let model = modelInput.value;
  let year = yearInput.value;

  wishlist.add(make, model, year);
  
  updateDOMList();
}

function removeCar(carId) {
   wishlist.remove(carId);
  
   updateDOMList();
}
