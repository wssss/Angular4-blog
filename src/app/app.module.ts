import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule, Http } from "@angular/http";

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

import { PostService } from "./posts/posts.service";
import { PostComponent } from './post/post.component';

 
const appRoutes: Routes=[
    { path: 'posts', component: PostsComponent },
    { path: 'post/:id', component: PostComponent},
    { path: '',redirectTo: 'posts', pathMatch: 'full' }
]

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        PostService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
