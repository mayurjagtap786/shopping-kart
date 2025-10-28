import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appErrorAlert]'
})
export class ErrorAlertDirective implements OnInit {

  //constructor(private element : ElementRef) {}

    constructor(private eleRef : ElementRef, private renderer : Renderer2){}

  //  ngOnInit(){
  //   this.element.nativeElement.style.backgroundColor='red';
  //  }

  ngOnInit(){
    //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color','red');
    this.renderer.addClass(this.eleRef.nativeElement,'alert')
    this.renderer.addClass(this.eleRef.nativeElement,'alert-danger')

    setTimeout(() => {
      this.renderer.setStyle(this.eleRef.nativeElement,'display','none');
    },2000)
  }

  

}
