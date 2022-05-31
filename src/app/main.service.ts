import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class MainService {
    cartItems:any[]=[];
    itemsNumber=0;
    clicked=false;
    getCartItems(item:object){
        if(this.clicked){
            this.cartItems.push(item);
        }
        console.log(this.cartItems)
        this.clicked=false;
    }

}