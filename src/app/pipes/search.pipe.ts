import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText:string): any {
    

    if(!value || !searchText){
      return value;
    }
     
    return  value.filter(v => v.productName.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1);
     



  }

}
