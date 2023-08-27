// system-status.store.ts
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { SystemStatus } from 'src/app/sensor-status/sensor-model';

export interface SystemStatusState extends EntityState<SystemStatus> {
  
}// akita storu tanımlandı 

@Injectable({ providedIn: 'root' }) //bu servisin uygulamanın kök seviyesinden kullanılacağını belirtie.
@StoreConfig({ name: 'system-status' })//storenin adı belirlenmiş
export class SystemStatusStore extends EntityStore<SystemStatusState> {//store stateden miras almış özellikleri belirlenmiş
  constructor() {
    super();// başlangıç durumu atanır.
  }
}
