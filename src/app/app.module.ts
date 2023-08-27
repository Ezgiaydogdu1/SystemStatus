import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule ,Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SensorStatusComponent } from './sensor-status/sensor-status.component';
import { HeaderComponent } from './header/header.component';
import { SensorFilterPipe } from './sensor-status/sensor-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SensorStatusComponent,
    HeaderComponent,
    SensorFilterPipe,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
    RouterModule.forRoot([
      {
      path:'login',
      component:LoginComponent
      },
      {
        path:'sensor-status',
        component:SensorStatusComponent
        },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
