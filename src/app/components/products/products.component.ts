import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from "../../services/product-service.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private pData: ProductServiceService) {

    let callData;

  }
  getData;
  product;
  myArray = [];

  ngOnInit() {

    this.getData = this.pData.sendData();
    console.log("data is", this.getData)
    this.product = this.getData;

    this.myArray = this.product

  }

  addToArray(newData) {
    console.log("clicked and data is :", this.getData)
    console.log('Array is', this.myArray);
    // this.product = this.pData.addToArray(newData);
    this.product.push(newData)
  }

  searchText: string = "";
  showImage: boolean = false;
  imageWidth = 50;
  imageMargin = 5;

  toggleImage() {
    this.showImage = !this.showImage
  }


}
