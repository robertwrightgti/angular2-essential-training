import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  
  firstMediaItem = {
    id: 1,
    name: "Firebug",
    media: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  };

  onMediaItemDelete(mediaItem) {
    console.log("delete", mediaItem)
  }
}