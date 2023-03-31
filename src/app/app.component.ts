import {Component, OnInit} from '@angular/core';

//TODO за допомогою інтерфейсів, ми описуємо типи майбутній обєктів
export interface Post{
  title: string
  text: string
  id?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  posts: Post[] = [
    {title: 'Want to learnd Angular components', text: 'I learn components', id: 1},
    // {title: 'Next block', text: 'Next block will be about pipes', id: 2},
  ]
  updatePosts(post: Post){
    console.log("Post ", post)
    this.posts.unshift(post)
  }
  removePost(id: number){
    console.log(id);
    this.posts = this.posts.filter(p => p.id !== id)
  }
  ngOnInit() {
    setTimeout(()=>{
      console.log('timeout');
      this.posts[0] = {
        title: 'Changed',
        text: 'sdfsdf',
        id: 2
      };
    }, 5000)
  }
}
