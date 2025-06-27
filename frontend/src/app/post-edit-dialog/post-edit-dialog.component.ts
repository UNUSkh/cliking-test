import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-edit-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-edit-dialog.component.html',
})
export class PostEditDialogComponent {
  @Input() post!: Post;
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<Post>();

  editedTitle = '';
  editedContent = '';

  ngOnInit() {
    this.editedTitle = this.post.title;
    this.editedContent = this.post.content;
  }

  submitEdit() {
    this.update.emit({
      ...this.post,
      title: this.editedTitle,
      content: this.editedContent
    });
    this.close.emit();
  }

  cancel() {
    this.close.emit();
  }
}
