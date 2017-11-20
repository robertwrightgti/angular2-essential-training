import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {

  //use input value to set internal property value
  @Input()
  set mwFavorite(value) {
    this.isFavorite = value;
  }
  
  //bind to class property of parent element
  //set class depending on value of internal property
  @HostBinding('class.is-favorite') 
  isFavorite = true;

}