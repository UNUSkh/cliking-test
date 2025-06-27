import { Component } from '@angular/core';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostFormComponent, PostListComponent],
  templateUrl : './app.component.html'
})
export class AppComponent {
  trigger = false;
  refreshPosts() {
    this.trigger = !this.trigger;
  }
}