import { Component, OnInit, AfterViewInit, AfterViewChecked} from '@angular/core';

import { MainService } from '../main.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit,AfterViewInit, AfterViewChecked {

  currentImage:number=0;

  activeScreen:boolean=false;

  mainImages:any[]=[
    {path:"assets/images/image-product-1.jpg",loc:0},
    {path:"assets/images/image-product-2.jpg",loc:1},
    {path:"assets/images/image-product-3.jpg",loc:2},
    {path:"assets/images/image-product-4.jpg",loc:3}
  ]

  thumbnailImages:any[]=[
    "assets/images/image-product-1-thumbnail.jpg",
    "assets/images/image-product-2-thumbnail.jpg",
    "assets/images/image-product-3-thumbnail.jpg",
    "assets/images/image-product-4-thumbnail.jpg"
  ]



  constructor(public mainService:MainService) { }

  ngOnInit(): void {
    
  }

  
  ngAfterViewInit(){
    document.querySelectorAll('.thumbnails img')[0].className='active';
  }

  ngAfterViewChecked(): void {
    setTimeout(()=>{
      if(this.mainService.clicked && this.mainService.itemsNumber != 0){
        this.mainService.getCartItems({
          name:"Fall Limited Edition Sneakers",
          price:`125 x ${this.mainService.itemsNumber}`,
          totalPrice:125 * this.mainService.itemsNumber,
          img:this.thumbnailImages[this.getActive()]
        })
      }
    },1)
  }
  getActive():number{
    let activeIndex:number=0;
    document.querySelectorAll('.thumbnails img').forEach((el,i)=>{
          
       el.classList.contains('active')?activeIndex = i:"";
      
    })
    return activeIndex
  }

  slideToImage(index:number){
    this.currentImage = this.mainImages[index].loc * 100;
    document.querySelectorAll('.thumbnails img').forEach((el,i)=>{
      el.classList.remove('active')
      if(index == i){
        el.classList.add('active')
      }
    })
  }

  sliderButtons(button:string){
    if(button == 'next'){
      this.currentImage == 300?
      this.currentImage = 0:
      this.currentImage= this.currentImage + 100

    }else if(button == 'previous'){
      this.currentImage == 0?
        this.currentImage = this.currentImage + 300:
        this.currentImage = this.currentImage - 100;
     }
  }

  toggleScreen(element:HTMLElement,show:boolean){
    show?
    element.classList.add('active'):
    element.classList.remove('active');
  }
}
