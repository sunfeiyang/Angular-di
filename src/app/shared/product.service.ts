import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProduct(): Product {
    return new Product(0, 'huaweip20', 5499, '华为p系列');
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) { }
}
