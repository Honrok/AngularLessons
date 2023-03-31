import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.less']
})
export class PostFormComponent {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  //TODO декоратори це деякі метаданні, які ми накладаємо на змінні
  @ViewChild("inputElement") inputRef?: ElementRef;
  title = ''
  text = ''

  addPost(){
    if(this.text.trim() && this.title.trim()){
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
      // console.log('new post: ', post)
    }
    this.title = this.text = '';
  }
  focusTitle(){
    console.log(this.inputRef);
    this.inputRef?.nativeElement.focus();
  }
}
