import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {ProductServiceService} from '../../services/product-service.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle:string = 'Product Details';

  constructor(private routeParam:ActivatedRoute, private router:Router) { 
     
    let id = routeParam.snapshot.params['id']
    this.pageTitle +=` : ${id}`
     
  }
  onBack(){
    this.router.navigate(['/product'])
  }

  ngOnInit() {
  }

}
