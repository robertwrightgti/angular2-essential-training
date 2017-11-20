import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, MediaItemComponent } from './pages';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

