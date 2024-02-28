class Car {
  mileage = 0;
  price = 100;
  color = "white";

  drive() {
    return "drive";
  }

  brake() {
    return "brake!";
  }
}

interface Part {
  seats: number;
  tire: number;
}

class Ford implements Car, Part {
  mileage = 1;
  price = 2;
  color = "white";
  seats = 4;
  tire = 3;
  drive() {
    return "drive";
  }
  brake() {
    return "brake!";
  }
}
const myFordCar = new Ford();
myFordCar.brake;
