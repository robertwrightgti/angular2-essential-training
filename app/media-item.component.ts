import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output()
  delete = new EventEmitter();

  onDelete() {
    console.log("delete!")
    this.delete.emit(this.mediaItem);
  }
}