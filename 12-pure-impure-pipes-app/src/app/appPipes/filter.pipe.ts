import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm:any): any {
    if(value.length===0){
      return value
    }
    return value.filter(function(search:any){
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase())>-1
    })
  }

}
