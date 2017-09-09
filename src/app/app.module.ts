import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';


const appRoutes: Routes = [
    {
        path: 'posts',
        component:'PostsComponent'
    },
    {
        path: '',
        redirectTo: 'posts',
    }
]

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
