import WishList from "./classes/wishlist";

console.log("Working");

let form = document.querySelector("#submitForm");

let wishlist = new WishList();

form.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();

  let make = event.target[0].value;
  let model = event.target[1].value;
  let year = event.target[2].value;

  wishlist.add(make, model, year);
});

document.querySelector(".removeBtn").addEventListener("click", (event) => {
  let carId = event.target.parentElement.getAttribute("data-carId");
  wishlist.remove(carId);
});
