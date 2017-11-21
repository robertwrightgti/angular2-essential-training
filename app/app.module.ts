import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { 
  //components
  AppComponent, 
  MediaItemComponent, 
  MediaItemFormComponent,
  MediaItemListComponent,  
  //directives
  FavoriteDirective,  
  //pipes
  CategoryListPipe
 } from './pages';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemFormComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

