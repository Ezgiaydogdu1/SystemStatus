import { Component, OnInit } from '@angular/core';
import { SystemStatus, NodeStatus } from './sensor-status/sensor-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sidebarOpen: boolean = false;
  constructor(){}
  ngOnInit(): void {
    
}

  
}
