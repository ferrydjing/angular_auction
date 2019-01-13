import { ProductService } from 'src/app/shared/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  categories: string[];

  constructor(private fd: FormBuilder,
              private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.searchForm = this.fd.group({
      productName: ['', Validators.minLength(3)],
      productPrice: [null, this.priceValidator],
      productCategory: ['-1']
    });
    this.categories = this.productService.getCategories();
  }

  priceValidator(productPrice: FormControl): any {
    if (!productPrice.value) {
      return null;
    }
    // tslint:disable-next-line:radix
    const num = parseInt(productPrice.value);
    if (num > 0) {
      return null;
    }
    return {productPrice: true};
  }

  onSearch() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
    }
  }
}
