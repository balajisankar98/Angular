import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
   selector : '[highlighter]'
})
export class HightlighterDirective {
   
    constructor(private elementRef : ElementRef,private render :Renderer2){    
        console.log("hello")
    }

    ngOnInit() {
        console.log("this.elementRef.nativeElement");
        console.log(this.elementRef.nativeElement);
        this.elementRef.nativeElement.style.background = "blue";
        this.render.setStyle(this.elementRef.nativeElement,'background-color','blue');
    }

}