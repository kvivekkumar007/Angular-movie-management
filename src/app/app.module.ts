import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { GamecostPipe } from './pipes/gamecost.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { ReviewComponent } from './components/review/review.component';
import { MyRoutes } from './app.routes'
import { RouterModule } from '@angular/router'


import { from } from 'rxjs';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    GamecostPipe,
    SearchPipe,
    ReviewComponent,
    WelcomeComponent,
    ProductDetailsComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(MyRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
