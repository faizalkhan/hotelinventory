import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {


  color :string = 'red';
  @HostBinding('style.border') border : string = '';
  @HostBinding('style.padding') padding : string = '';
  constructor(private element : ElementRef, private render : Renderer2) {

    console.log(this.element.nativeElement);


   }

  ngOnInit(): void {

    this.element.nativeElement.style.backgroundColor = this.color;

    this.render.setStyle(this.element.nativeElement, 'color', '#fff');

    this.border = "5px solid green";

    this.padding = "1rem"

  }


  @HostListener('mouseenter') foo()
  {
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'green')
  }







}
