import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-form.component.html',
})
export class PostFormComponent {
  title = '';
  content = '';
  showForm=false;
  @Output() postCreated = new EventEmitter<void>();

  constructor(private service: PostService) {}

  submitPost() {
    if(this.content.trim() && this.title.trim()){
      this.service.createPost({ title: this.title, content: this.content }).subscribe(() => {
      this.title = '';
      this.content = '';
      this.postCreated.emit();
    });
    }
  }
  
  onPostCreated() {
    this.showForm = false;
  }
}
