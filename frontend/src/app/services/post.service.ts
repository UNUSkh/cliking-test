import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  private API = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.API);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.API, post);
  }
  updatePost(post: Post): Observable<any> {
    return this.http.put(`${this.API}/${post.id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}