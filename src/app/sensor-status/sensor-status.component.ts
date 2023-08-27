import { Component, OnInit } from '@angular/core';
import { SystemStatus, NodeStatus } from './sensor-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService} from  'src/state/system-status.service';
import { systemStatusQuery } from 'src/state/system-status.query';



@Component({
  selector: 'app-sensor-status',
  templateUrl: './sensor-status.component.html',
  styleUrls: ['./sensor-status.component.scss']
})
export class SensorStatusComponent implements OnInit {
  title='Sensor Status'
  filterText:string=''
  systemStatusList:SystemStatus[]=[]
  
 
  constructor(private http:HttpClient,private dataService:DataService, private systemStatusQuery: systemStatusQuery){}
  
  
  ngOnInit(): void {
    this.dataService.getSystemStatusList().subscribe(data => {
      this.systemStatusList = data.systemStatusList
        console.log(data.systemStatusList);
        


      
    });
  }
}
 




