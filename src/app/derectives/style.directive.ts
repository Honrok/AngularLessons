//TODO тут ми створимо директиву, яка дозволяє маніпулювати різними стилями
import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";
//TODO Для того, щоб перетворити клас на директиву, ми використовуємо декоратор @Directive, в який передається обєкт з одним обовязковим параметром selector
@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  //TODO Host Binding

  // @HostBinding('style.color') elColor = '';


  @Input('appStyles') color: string = 'blue';


  //TODO тут функціонал не змінився. По суті це просто база того, як директиви працюють з елементами.
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(el.nativeElement, 'color', 'blue');
  }
  //TODO нижче версія, це для вебу, але так як Ангуляр дає більш якісь абстрактні поняття, то більше корректно писати, щоб не було проблем потім з іншими платформами, так як вище

  // constructor(private el: ElementRef) {
  //   el.nativeElement.style.color = 'red';
  // }

  //TODO Тут ми добавляємо трохи динаміки в нашу директиву, щоб не писати все в контрукторі
  @HostListener('click', ['$event.target']) onClick(event: Event){
    console.log(event);
  }
  @HostListener('mouseenter') onEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    // this.elColor = this.color;
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }
  @HostListener('mouseleave') onLeave(){
    this.renderer.setStyle(this.el.nativeElement, 'color', null);
    // this.elColor = '';
    // this.renderer.setStyle(this.el.nativeElement, 'color', null);
  }
}
