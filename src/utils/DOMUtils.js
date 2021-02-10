export function displayCarInfo(car, id) {
  const carMake = document.getElementById("car-make");
  const carModel = document.getElementById("car-model");
  const carYear = document.getElementById("car-year");

  const [removeBtn] = document.getElementsByClassName("removeBtn");
  removeBtn.id = id;

  carMake.textContent = `Make: ${car.make}`;
  carModel.textContent = `Model: ${car.model}`;
  carYear.textContent = `Year: ${car.year}`;
}

export function updateDOM(wishList) {
  const listContainer = document.getElementById("wishListContainer");
  const oldList = document.getElementById("wishList");
  if (oldList) {
    listContainer.removeChild(oldList);
  }

  const list = document.createElement("ul");
  list.classList.add("list-group");
  list.id = "wishList";

  listContainer.appendChild(list);

  console.log(wishList.list);
  wishList.list.forEach((car, id) => {
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.id = id;
    li.textContent = `${car.make} ${car.model}`;
    li.addEventListener("click", () => displayCarInfo(car, id));
    list.appendChild(li);
  });
}
