import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
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

