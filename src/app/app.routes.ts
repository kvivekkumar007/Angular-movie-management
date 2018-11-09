import {Routes} from '@angular/router';
import { from } from 'rxjs';
import { ReviewComponent } from './components/review/review.component';
import { ProductsComponent } from './components/products/products.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {LoginComponent} from './components/login/login.component';
import { AuthguardService } from './services/authguard.service';


export const MyRoutes: Routes = [
  {path: '' , redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'welcome' , component: WelcomeComponent, canActivate:[AuthguardService]},
  {path: 'product' , component: ProductsComponent,canActivate:[AuthguardService]},
  {path: 'review' , component: ReviewComponent,canActivate:[AuthguardService]},
  {path: 'product/:id',component: ProductDetailsComponent,canActivate:[AuthguardService]},
  
]
