import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})


export class CarsComponent {
  addCarStatus = false;
  carName = '';
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Acura', 'Bentley'];


  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
}
