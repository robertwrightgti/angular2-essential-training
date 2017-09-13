import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;

  // use a setter method to assign local variable using input value
  // this is what we passed from the element attribute:
  // [mwFavorite]="mediaItem.isFavorite"
  @Input() set mwFavorite(value) { 
    this.isFavorite = value 
  }
}
