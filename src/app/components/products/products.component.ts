import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from 'src/app/shared/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private searchTitle: FormControl = new FormControl('');
  private keyword: string;
  public products: Product[];
  constructor(
    private productService: ProductService
  ) {
    this.searchTitle.valueChanges
        .pipe(debounceTime(500))
        .subscribe(
          title => {
            this.keyword = title;
          }
        );
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}


