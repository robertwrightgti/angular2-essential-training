import { Pipe } from '@angular/core';

@Pipe({
  name: 'categoryList',
  //pure controls whether the pipe is stateless or stateful
  //pure true: stateless. takes in and returns data without any side effects
  pure: true 
})
export class CategoryListPipe {
  transform(mediaItems) {
    var categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
  }
}
