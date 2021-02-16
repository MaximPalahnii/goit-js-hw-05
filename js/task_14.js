class Car {
    #model;
    #price;
    #brand;
  
    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.#model = model;
      this.#price = price;
    }
  
    get brand() {
      return this.#brand;
    }
  
    set brand(newBrand) {
      this.#brand = newBrand;
    }
  
    get model() {
      return this.#model;
    }
  
    set model(newModel) {
      this.#model = newModel;
    }
  
    get price() {
      return this.#price;
    }
  
    set price(newPrice) {
      this.#price = newPrice;
    }
}

const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(car);
console.log(car.price);
car.price = 35000;
console.log(car.price);
console.log(car.model);
car.model = 'A6';
console.log(car.model);
console.log(car.brand);
car.brand = 'BMW';
console.log(car.brand);