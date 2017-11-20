import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { 
  AppComponent, 
  MediaItemComponent, 
  MediaItemListComponent,

  FavoriteDirective

 } from './pages';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

