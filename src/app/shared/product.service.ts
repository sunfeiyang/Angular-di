import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private logger: LoggerService) { }

  getProduct(): Product {
    this.logger.log('getProduct方法被调用！');
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
