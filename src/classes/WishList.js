export class WishList {
  constructor() {
    this.list = [];
  }

  add(car) {
    this.list.push(car);
  }

  remove(id) {
    this.list = this.list.filter((car, i) => i != id);
  }
}
