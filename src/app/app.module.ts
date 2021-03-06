import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { StarsComponent } from './components/stars/stars.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductService } from './shared/product.service';
import { FilterProductPipe } from './pipe/filter-product.pipe';
import { WebsocketService } from './shared/websocket.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    CarouselComponent,
    ProductsComponent,
    FooterComponent,
    StarsComponent,
    ProductDetailComponent,
    FilterProductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
