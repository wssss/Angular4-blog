import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostService } from '../posts/posts.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
	public post: Post = new Post();
	public postList: Array<Post> = [];

	constructor(public postService: PostService) { }

	ngOnInit() {
		this.getPost();

		this.getList();
	}

	public getPost(){
		this.postService.getPost()
		.subscribe(
			data => {
				this.post = data
				console.log(data)
			},
			error => console.error(error)
		);
	}

	getList(): void{
		this.postService.getPostList()
		.subscribe(res => {
			this.postList = res["items"];
		})
	}  



}
