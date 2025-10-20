import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converseCourt',
  pure: false
})
export class ConverseCourtPipe implements PipeTransform {
  transform(court: any): any {
    let civilData = localStorage.getItem('civilDatas');
    let dataCourt = JSON.parse(civilData).filter(permistion=> permistion.abbr === court);
    return dataCourt[0].court_name;
  }
  
}
