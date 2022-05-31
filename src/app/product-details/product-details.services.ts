import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class ProductDetailsService{
    controleItemsNumber(opration:any,number:number):number{
        
        if( opration=='decrease'){
            return number != 0 ? number -= 1: 0; /* if the number is 0 don't decrease */
        }
        else {
            console.log('dd')
            return number += 1;
        }
    }
}