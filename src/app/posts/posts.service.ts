import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post } from '../post/post.model'



@Injectable()
export class PostService {
    private postListURL = 'mock-data/post-list.json';
    private postURL = "mock-data/post-detail.json"

    constructor(public http: Http) {}

    getPostList(): Observable<Post[]>{
        let url = this.postListURL;

        return this.http
        .get(url)
        .map((res:Response) => {
            let result=res.json();
            console.log(result);
            return result;
        })
        .catch((error:any) => Observable.throw(error || 'Server error'));
    }   

    getPost(): Observable<Post>{
        let url = this.postURL;

        return this.http
        .get(url)
        .map((res:Response) => {
            let result = res.json();
            return result
        })
        .catch((error:any) => Observable.throw(error || 'Server error'));
    }
}