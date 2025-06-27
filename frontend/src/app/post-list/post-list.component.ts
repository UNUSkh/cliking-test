import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { PostComponent } from '../post/post.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostComponent, FormsModule],
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnChanges {
  @Input() refreshTrigger = false;
  posts: Post[] = [];
  filteredPosts: Post[] = [];

  searchTerm = '';

  constructor(private service: PostService) {}

  ngOnChanges() {
    this.loadPosts();
  }

  loadPosts() {
    this.service.getPosts().subscribe(posts => {
      this.posts = posts;
      this.filterPosts(); 
    });
  }

  filterPosts() {
    const term = this.searchTerm.toLowerCase().trim();

    if (!term) {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(post =>
        post.title.toLowerCase().includes(term) || post.content.toLowerCase().includes(term)
      );
    }
  }

  deletePost(id: number) {
    this.service.deletePost(id).subscribe(() => this.loadPosts());
  }

  updatePost(post: Post) {
    this.service.updatePost(post).subscribe(() => this.loadPosts());
  }
}
