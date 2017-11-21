import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {

  onSubmit(mediaItem) {
    console.log(mediaItem)
  }
}
