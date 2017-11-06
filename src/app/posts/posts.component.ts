import { Component, OnInit } from '@angular/core';
import { PostService } from './posts.service';

import { Post } from '../post/post.model';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
	public postList: Array <Post> 

	constructor(
		public postService:PostService
	) { 
		
	}

	ngOnInit() {
		this.getList();
	}
	
	getList(): void{
		this.postService.getPostList()
		.subscribe(res => {
			this.postList = res["items"];
		})
	}

}
