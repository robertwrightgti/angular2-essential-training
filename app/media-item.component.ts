import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})

export class MediaItemComponent {
  //input decorator
  @Input() mediaItem;
  //output decorator
  @Output() delete = new EventEmitter();

  onDelete() {
    console.log("emitting delete output")
    this.delete.emit(this.mediaItem);
  }
}
