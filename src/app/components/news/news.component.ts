import { ProductService, Product } from './../../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public product: Product;
  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const productId = Number(this.routeInfo.snapshot.params['id']);
    this.productService.getProduct(productId)
      .subscribe(res => {
        this.product = res;
        console.log(res);
      });
  }

}
