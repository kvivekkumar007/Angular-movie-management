import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gamecost'
})
export class GamecostPipe implements PipeTransform {

  transform(value: any): any {
    
      if(value > 3500)
        return "High Price";
      else
       return "Low Price";
  }

}
