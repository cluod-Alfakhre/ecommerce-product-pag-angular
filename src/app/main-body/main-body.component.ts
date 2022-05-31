import { Component, OnInit } from '@angular/core';

import { MainService } from '../main.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  constructor(public mainService:MainService) { }

  ngOnInit(): void {
  }

  addItem(itemsNumber:any){
    this.mainService.itemsNumber=itemsNumber;
    console.log(itemsNumber)
  }
}
