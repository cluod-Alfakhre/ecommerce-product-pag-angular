import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleList(element:HTMLElement,open:boolean){
    if(open){
      element.classList.add('active');
    }else{
      element.classList.remove('active')
    }
  }
}
