import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from 'src/app/shared/product.service';
import { WebsocketService } from 'src/app/shared/websocket.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

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
  isWatched = false;
  bid: number;
  webStatus: Subscription;
  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService,
    private wsService: WebsocketService
    ) {
  }

  ngOnInit() {
    const id = Number(this.routeInfo.snapshot.params['productId']);
    this.productService.getProduct(id)
      .subscribe(res => {
        this.product = res;
        this.bid = this.product.price;
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

  onWatch() {
    if (this.webStatus) {
      this.webStatus.unsubscribe();
      this.webStatus = null;
    } else {
      this.webStatus = this.wsService.createObservableSocket('ws://localhost:8085', this.product.id)
      .pipe(map(message => {
        return JSON.parse(message);
      }))
      .subscribe(
        data => {
          this.bid = data.find(p => p.productId === this.product.id).bid;
        },
        err => console.log(err),
        () => console.log('会话结束')
      );
    }
    this.isWatched = !this.isWatched;
  }

}
