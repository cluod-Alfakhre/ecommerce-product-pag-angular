import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MainService } from '../main.service';
import { ProductDetailsService } from './product-details.services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Output() addItem=new EventEmitter();
  itemsNumber:number=0;
  
  constructor(public productDetailsService:ProductDetailsService,private mainService:MainService) { }

  ngOnInit(): void {
  }

  addButtonClicked(){
    this.addItem.emit(this.itemsNumber);
    this.mainService.clicked=true;
  }

  oprationButtonClicked(opration:string){
   this.itemsNumber= this.productDetailsService.controleItemsNumber(opration,this.itemsNumber)
  }
}
