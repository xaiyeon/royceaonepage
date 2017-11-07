import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    RoyceaYoutubeComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    RouterModule.forRoot([
      {
        path: 'royceyoutube',
        component: RoyceaYoutubeComponent

      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
