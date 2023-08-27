import { Query } from "@datorama/akita";
import { SystemStatusState,SystemStatusStore } from "./system-status.store"
import { SystemStatus } from "src/app/sensor-status/sensor-model";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemStatusQuery extends Query<SystemStatusState>{
    constructor(private systemStateStore:SystemStatusStore){
        super(systemStateStore);
      {
  // ...
}
    }
}




