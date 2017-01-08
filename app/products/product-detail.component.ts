import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product} from './product';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product detail';
    product: Product;

    constructor(private _route: ActivatedRoute, private _router: Router){
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += ` ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}