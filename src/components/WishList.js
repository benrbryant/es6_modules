import { displayCarInfo } from "../utils/DOMMethods";

class WishList {
  constructor() {
    this.list = [];
  }

  add(car) {
    this.list.push(car);
    this.updateDOM();
  }

  remove(id) {
    this.list = this.list.filter((car, i) => i != id);
    this.updateDOM();
  }

  updateDOM() {
    const listContainer = document.getElementById("wishListContainer");
    const oldList = document.getElementById("wishList");

    if (oldList) {
      listContainer.removeChild(oldList);
    }

    const list = document.createElement("ul");
    list.id = "wishList";
    list.classList.add("list-group");

    listContainer.appendChild(list);

    this.list.forEach((car, id) => {
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = `${car.make} ${car.model}`;

      li.addEventListener("click", function () {
        displayCarInfo(car, id);
      });
      list.appendChild(li);
    });
  }
}

export default WishList;
