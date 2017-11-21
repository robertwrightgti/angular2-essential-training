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

//import { MediaItemService } from './media-item.service';

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
  providers: [
    MediaItemService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

