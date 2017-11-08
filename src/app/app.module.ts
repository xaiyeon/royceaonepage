import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { ViewEncapsulation } from '@angular/core';
import { RoyceaYoutubeComponent } from './roycea-youtube/roycea-youtube.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    RoyceaYoutubeComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, BrowserAnimationsModule, MatSidenavModule,
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
