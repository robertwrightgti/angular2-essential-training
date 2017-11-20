import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, MediaItemComponent, MediaItemListComponent } from './pages';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

