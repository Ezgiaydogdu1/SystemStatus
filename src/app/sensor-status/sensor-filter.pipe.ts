import { Pipe, PipeTransform } from '@angular/core';
import { SystemStatus } from './sensor-model';

@Pipe({
  name: 'sensorFilter'
})
export class SensorFilterPipe implements PipeTransform {

  transform(value: SystemStatus[], filterText:string): SystemStatus[] {
    filterText=filterText?filterText.toLocaleLowerCase():'';
    
    
    return filterText?value.filter((s:SystemStatus)=>s.system
    .toLocaleLowerCase().indexOf(filterText)!==-1) : value;
   
  }
  }


