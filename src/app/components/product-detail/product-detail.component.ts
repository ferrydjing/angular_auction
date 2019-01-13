import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  comments: Comment[];
  newRating = 5;
  newComment = null;
  isHiddenComment = true;
  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService
    ) {
  }

  ngOnInit() {
    const id = Number(this.routeInfo.snapshot.params['productId']);
    this.productService.getProduct(id)
      .subscribe(res => {
        this.product = res;
      });
    this.productService.getCommentsByProductId(id)
      .subscribe(res => {
        this.comments = res;
      });
  }
  addComment() {
    const comment = new Comment(0, this.product.id, this.newRating, 'aaa', new Date().toISOString(), this.newComment);
    const xx = this.comments.reduce((sum: number, Ccomment: Comment) => sum + Ccomment.rating, 0);
    this.product.rating = xx / this.comments.length;
    this.comments.unshift(comment);
    this.newRating = 5;
    this.newComment = null;
    this.isHiddenComment = true;
  }

}
