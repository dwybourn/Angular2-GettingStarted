import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from './product';

@Injectable()
export class ProductService {
    private _url: string = 'api/products/products.json';

    constructor(private _http:Http){
    }

    getProducts() : Observable<Product[]>{
        return this._http.get(this._url)
            .map((response: Response) => <Product[]> response.json())
            .catch(this.handleError);
    }

     private handleError(error: Response){
        return Observable.throw(error.json().error || 'Server error')   ;
     }
}