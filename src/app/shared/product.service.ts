import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): any {
    return this.http.get('/api/products');
  }

  getProduct(id: number): any {
    // return this.products.find(product => product.id === id);
    return this.http.get(`/api/product/${id}`);
  }

  getCommentsByProductId(productId: number): any {
    // return this.comments.filter(comment => comment.productId === productId);
    return this.http.get(`/api/product/${productId}/comments`, {
    });
  }
  private encodeParams(params: ProductSearchParams) {

  }
  getCategories(): string[] {
    return ['电子产品', '书籍', '数码产品'];
  }

  search(): any {
    return this.http.get('/api/products');
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

export class ProductSearchParams {
  constructor(
    public title: string,
    public price: number,
    public category: string
  ) {}
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
