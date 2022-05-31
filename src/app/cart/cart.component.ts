import { Component, OnInit, } from '@angular/core';
import { MainService } from '../main.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  showCart:boolean=false;

  constructor(public mainService:MainService) { }

  ngOnInit(): void {
  }

  toggleCart(){
    this.showCart=!this.showCart;
  }
  
  deleteClicked(i:number){
    this.mainService.cartItems.splice(i,1)
  }
}
