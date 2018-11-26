import { Injectable } from '@angular/core';
import {Product, ProductService} from './product.service';

@Injectable({
  providedIn: 'root'
})
export class AnotherProductService implements ProductService {

  getProduct(): Product {
    return new Product(1, 'huaweimate20', 5899, '华为mate系列');
  }

  constructor() { }
}
