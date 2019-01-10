import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public title: string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.routeInfo.params.value);
    this.title = this.routeInfo.params.value['productTitle'];
  }

}
