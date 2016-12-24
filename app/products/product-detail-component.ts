import { AppModule } from './../app.module';
import { Component } from '@angular/core';
import { Product } from './product';

@Component({
    templateUrl: 'app/products/product-detail-component.html'
})
export class ProductDetailComponent{
    pageTitle: string;
    product: Product;
}