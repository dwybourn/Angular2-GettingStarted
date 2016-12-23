import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list-component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: Product[];
    errorMessage: string;

    constructor(private _productService: ProductService){
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        console.log('Init');
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                       errorMessage => this.errorMessage = errorMessage);
    }

    onRatingClicked(message:string): void {
        this.pageTitle = message;
    }
}