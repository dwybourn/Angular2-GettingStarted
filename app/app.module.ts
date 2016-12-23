import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter-pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    RouterModule ],
  declarations: [ 
    AppComponent, 
    ProductListComponent, 
    ProductFilterPipe, 
    StarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
