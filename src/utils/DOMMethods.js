export function displayCarInfo(car, id) {
  const carMake = document.getElementById("car-make");
  const carModel = document.getElementById("car-model");
  const carYear = document.getElementById("car-year");

  const [removeBtn] = document.getElementsByClassName("removeBtn");
  removeBtn.id = id;

  carMake.textContent = `Make: ${car.make}`;
  carModel.textContent = `Model ${car.model}`;
  carYear.textContent = `Year: ${car.year}`;
}
