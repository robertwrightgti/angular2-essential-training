import { Component, Input } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent { 

  //use @Input() decorator rather than inputs[]
  //advantage: you can define the type and accessibility
  @Input() 
  public mediaItem: any;

  onDelete() {
    console.log("delete!")
  }
}