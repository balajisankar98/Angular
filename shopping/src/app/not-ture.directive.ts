import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNotTure]'
})
export class NotTureDirective {

  @Input() set appNotTure(condition : boolean){
    if(!condition){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else{
      this.viewContainer.clear();
    }
  }
  constructor(private templateRef : TemplateRef <any>,private viewContainer : ViewContainerRef) { }

}
