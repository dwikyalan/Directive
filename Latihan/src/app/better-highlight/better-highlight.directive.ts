import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';
import { MockNgModuleResolver} from '@angular/compiler/testing';
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:String='transparent';
  //menggunakan alias appBetterHighlight
  @Input('appBetterHighlight') highlightColor:String='blue';
  //@Input() highlightColor:String='blue';
  //@HostBinding('style.backgroundColor')backgroundColor:String='transparent';
  //@HostBinding('style.backgroundColor')backgroundColor:String=this.defaultColor;
  @HostBinding('style.backgroundColor')backgroundColor:String;

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
  this.backgroundColor=this.defaultColor;
   //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
  }
  @HostListener('mouseover') mouseover(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    //this.backgroundColor='blue';
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
   //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
   //this.backgroundColor='transparent';
   this.backgroundColor=this.defaultColor;
  }
}
