import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 22.99, 3, '这是第一个商品，一个关于angular学习的商品', ['电子产品']),
      new Product(2, '第二个商品', 2.99, 5, '这是第二个商品，一个关于angular学习的商品', ['电子产品', '书籍']),
      new Product(3, '第三个商品', 12.99, 2.5, '这是第三个商品，一个关于angular学习的商品', ['电子产品']),
      new Product(4, '第四个商品', 1.99, 5.5, '这是第四个商品，一个关于angular学习的商品', ['电子产品', '数码产品']),
      new Product(5, '第五个商品', 23.99, 1.5, '这是第五个商品，一个关于angular学习的商品', ['电子产品']),
      new Product(6, '第六个商品', 55.99, 3.5, '这是第一个商品，一个关于angular学习的商品', ['电子产品'])
    ];
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public category: string[]
  ) {
  }
}
