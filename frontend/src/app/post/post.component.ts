import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../models/post.model';
import { PostEditDialogComponent } from '../post-edit-dialog/post-edit-dialog.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, PostEditDialogComponent],
  templateUrl: './post.component.html',
})
export class PostComponent {
  @Input() post!: Post;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Post>();

  showEditDialog = false;

  onDelete() {
    this.delete.emit(this.post.id!);
  }

  onUpdate(post: Post) {
    this.update.emit(post);
  }
}
