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
  CategoryListPipe,
  //services
  MediaItemService
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
    CategoryListPipe,
    MediaItemService
  ],
  //providers get added to the root injector
  //so they're available to the whole app
  //that's why we put services there
  providers: [
    MediaItemService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

