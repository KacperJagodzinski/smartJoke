import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {SharedModule} from '../../shared.module';



@NgModule({
  declarations: [DashboardComponent],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
