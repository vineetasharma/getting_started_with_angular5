import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') highlightColor: string;
  @Input('mouseLeaveColor') leaveColor: string;

  constructor(private el: ElementRef) {
    console.log('this-------------',this, this.highlightColor);
    // this.highlight('');
    
  }

  ngOnInit(){
    this.highlight(this.highlightColor);
  }

   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.leaveColor || 'orange');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color || this.highlightColor;
  }
}
