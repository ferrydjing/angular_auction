import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1, '第一个商品', 22.99, 3, '这是第一个商品，一个关于angular学习的商品', ['电子产品']),
    new Product(2, '第二个商品', 2.99, 5, '这是第二个商品，一个关于angular学习的商品', ['电子产品', '书籍']),
    new Product(3, '第三个商品', 12.99, 2.5, '这是第三个商品，一个关于angular学习的商品', ['电子产品']),
    new Product(4, '第四个商品', 1.99, 5.5, '这是第四个商品，一个关于angular学习的商品', ['电子产品', '数码产品']),
    new Product(5, '第五个商品', 23.99, 1.5, '这是第五个商品，一个关于angular学习的商品', ['电子产品']),
    new Product(6, '第六个商品', 55.99, 3.5, '这是第一个商品，一个关于angular学习的商品', ['电子产品'])
  ];
  private comments: Comment[] = [
    new Comment(1,  1, 3, '小明', '2019-1-10', '这是一个好东西'),
    new Comment(2,  1, 2, '小花', '2018-11-10', '这东西很好'),
    new Comment(3,  1, 5, '小张', '2018-12-10', '这东西一般'),
    new Comment(4,  2, 1, '小李', '2019-1-1', '这真是一个好东西')
  ];
  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(product => product.id === id);
  }

  getCommentsByProductId(productId: number): Comment[] {
    return this.comments.filter(comment => comment.productId === productId);
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

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public rating: number,
    public user: string,
    public time: string,
    public content: string
  ) {
  }
}
