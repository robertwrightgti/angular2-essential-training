import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { 
  AppComponent, 
  MediaItemComponent, 
  MediaItemListComponent,

  FavoriteDirective,

  CategoryListPipe

 } from './pages';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

