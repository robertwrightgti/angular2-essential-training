import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {

  //use input value to set internal property value
  @Input()
  set mwFavorite(value) {
    this.isFavorite = value;
  }
  
  //listen for event on parent element (mouse enter and leave)
  //set hovering property accordingly
  @HostListener('mouseenter') onmouseenter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.hovering = false;
  }

  //bind to class property of parent element
  //set class depending on value of internal properties
  @HostBinding('class.is-favorite') 
  isFavorite = true;

  @HostBinding('class.is-favorite-hovering')
  hovering = false;
  
}