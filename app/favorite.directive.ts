import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[mwFavorite]' //square brackets means look for an element attr
})
export class FavoriteDirective {
  //HostBinding is used to bind a host element property to a directive property
  @HostBinding('class.is-favorite') isFavorite = true;
}