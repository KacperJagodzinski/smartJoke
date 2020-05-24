import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {DashboardModule} from '../dashboard/dashboard.module';



@NgModule({
  declarations: [ProfileComponent],
    imports: [
        CommonModule,
        DashboardModule
    ]
})
export class ProfileModule { }
