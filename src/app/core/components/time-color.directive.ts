import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTimeColor]',
})
export default class TimeColorDirective implements OnInit {
  @Input() appTimeColor!:string;

  constructor(private el: ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'border-bottom-color', this.timeColors());
  }

  timeColors():string {
    let color = 'blue';
    const today = Date.now();
    const posdate = new Date(this.appTimeColor).getTime();
    const milisec = 86400000;
    const difference = (today - posdate) / milisec;
    if (difference < 30) {
      color = 'green';
    }
    if (difference > 180) {
      color = 'red';
    }
    return color;
  }
}
