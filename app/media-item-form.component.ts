import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {

  form;
  
  ngOnInit() {
    //define a model to represent the form
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl(''),
      category: new FormControl(''),
      year: new FormControl('')
    });
  }

  //function to handle form submission
  onSubmit(mediaItem) {
    console.log(mediaItem)
  }
}
