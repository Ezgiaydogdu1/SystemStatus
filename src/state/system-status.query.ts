import { Query } from "@datorama/akita";
import { SystemStatusState,SystemStatusStore } from "./system-status.store"
import { SystemStatus } from "src/app/sensor-status/sensor-model";
import { Observable } from 'rxjs';


   



export class systemStatusQuery extends Query<SystemStatusState>{
    constructor(private systemStateStore:SystemStatusStore){
        super(systemStateStore);
      
    }

    add(systemStatus: SystemStatus){
        this.systemStateStore.add(systemStatus)
    }
}
