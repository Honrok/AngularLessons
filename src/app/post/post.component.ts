import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
//TODO ми імплементимся від інтефейса онініт, який зобовязує нас реалізувати онініт
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  //TODO почитати за декоратор @input
  @Input() post: Post = {
    title: '',
    text: ''
  };
  @Output() onRemove:EventEmitter<number> = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef?: ElementRef;
  constructor() {
    console.log('constructor')
  }
  ngOnInit(){
    // console.log(this.infoRef?.nativeElement)
    console.log('ngOnInit')
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges', changes);
  }
  //TODO ngDoCheck є одним із життєвих циклів компонента в Angular і використовується для виконання власного ручного перевірки змін у властивостях компонента.
  // TODO Цей метод викликається при кожній зміні властивостей компонента, або при будь-якому іншому події, що впливає на зміну стану компонента.
  // TODO ngDoCheck дає можливість виконувати додаткову перевірку на зміни, які не піддаються автоматичному виявленню змін Angular (наприклад, зміни у вкладених об'єктах або масивах, або зміни у властивостях, які не є вхідними параметрами компонента).
  // TODO Цей метод повинен бути реалізований в компоненті, якщо він потребує власного механізму перевірки змін. При виконанні ручної перевірки змін, необхідно враховувати, що неправильне використання цього методу може призвести до низької продуктивності та проблем з пам'яттю.
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  //TODO ngAfterContentInit ініціалізується тоді, коли ми передаємо контент в компонент (в середину тега)
  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked() {
    console.log('afterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  removePost(){
    this.onRemove.emit(this.post.id);
  }
}
