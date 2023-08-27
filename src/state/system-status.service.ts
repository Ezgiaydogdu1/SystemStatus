import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,tap } from 'rxjs';
import { SystemStatusStore } from './system-status.store';
import { SystemStatus } from 'src/app/sensor-status/sensor-model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonDataUrl = 'assets/modul.json';


  constructor(private http: HttpClient,
    private systemStatusStore:SystemStatusStore) {}
    
    getSystemStatusList(): Observable<any> {
      return this.http.get<any>(this.jsonDataUrl)
    }
    
    async updateSystemStatus(systemStatusList: SystemStatus[]) {
      try {
        await this.http.get<SystemStatus[]>(this.jsonDataUrl).toPromise();
      } catch(error) {
        this.systemStatusStore.setError(error);
      }
    }  

}