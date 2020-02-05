import { Directive, ElementRef, Renderer2, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBh]'
})
export class BhDirective implements OnInit{

  //can be used with [defaultColor] = "'blue'" or defaultColor = 'blue'
  //string can be binded without [] and ""
  @Input("defaultColor") default : string ;
  @Input("customColor") custom : string ;

  //binding property
  @HostBinding("style.background") backgroundColor :String  ;

  constructor(private elementRef : ElementRef,private render :Renderer2){  
    // will be undefined
    // console.log(this.default,this.custom,this.backgroundColor)
  }
  

  ngOnInit() {
      // this.elementRef.nativeElement.style.background = "blue";
      // this.render.setStyle(this.elementRef.nativeElement,'background-color','blue');
      // will have all the values except background
      // because ngoninit will be called after component is initialized
      // console.log(this.default,this.custom,this.backgroundColor)
      this.backgroundColor = this.default;
  }

  @HostListener("mouseenter") onMouseEnter(){
    this.backgroundColor=this.custom;
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.backgroundColor=this.default;
  }
}
