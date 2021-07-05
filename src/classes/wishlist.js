import Car from "./car";

class WishList {
  constructor() {
    this.list = [];
    this.nextId = 0;
  }

  add(make, model, year) {
    let car = new Car(this.nextId++, make, model, year);
    this.list.push(car);
    this.updateDOMWishList();
  }

  remove(carId) {
    this.list = this.list.filter((car) => car.id != carId);
    this.updateDOMWishList();
    document.getElementById("car-make").textContent = "";
    document.querySelector("#car-model").textContent = "";
    document.querySelector("#car-year").textContent = "";
    document.querySelector("#car-card").setAttribute("data-carId", "");

    if (this.list.length == 0) {
      document.querySelector(".removeBtn").disabled = true;
    }
  }

  updateDOMWishList() {
    let container = document.querySelector("#wishListContainer");
    let ul = document.querySelector("ul");
    ul.innerHTML = "";
    this.list.forEach((car) => {
      let li = document.createElement("li");
      li.id = car.id;
      li.textContent = car.model;
      li.addEventListener("click", () => {
        console.log("click");
        document.querySelector(".removeBtn").disabled = false;
        car.info();
      });
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }
}

export default WishList;
