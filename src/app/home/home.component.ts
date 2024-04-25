import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
popularProducts: undefined | product[]
trendyProducts: undefined |product[]
productData: undefined | product
  constructor(private product:ProductService, private activatefRoute: ActivatedRoute){}
  ngOnInit(){
    this.product.popularProducts().subscribe((result)=>{
      if(Array.isArray(result)){   // Array.isArray is JS method to check the result is array or not. if it array then it is stored in productlist
        this.popularProducts =result;
      }
     // console.log(this.popularProducts)
    })
    this.product.trendyProducts().subscribe((result)=>{
    if(Array.isArray(result)){
      this.trendyProducts=result;
    }
    })
  }
  @ViewChild('carousel')
  carousel!: ElementRef;

  ngAfterViewInit() {
    this.startCarousel();
  }

  startCarousel() {
    // Get the carousel element
    const carouselElement = this.carousel.nativeElement;

    // Set an interval to trigger the next slide every 2 seconds
    setInterval(() => {
      // Trigger the next slide
      carouselElement
    }, 1000);
  }
}
