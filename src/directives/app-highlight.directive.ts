import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective {


  @Input() appHighlight !: string;
  @Input() defaultColor !: string;
  
  constructor(private eleRef: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor);
    this.eleRef.nativeElement.style.color = 'white';
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(''); 
    this.eleRef.nativeElement.style.color = 'black';
  }

  private highlight(color: string) {
    this.eleRef.nativeElement.style.backgroundColor = color;
  }

}
