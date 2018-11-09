import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from "../../services/product-service.service";
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private addToServiceArray: ProductServiceService, private _router :Router) {


   }

  ngOnInit() {
  }

  saveData(data :any) {
    console.log(data.value);
    this.addToServiceArray.addToArray(data.value);
    this._router.navigate(['product']);

  }
}
