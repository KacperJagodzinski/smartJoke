import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import {AppMaterialModule} from '../../app-material.module';
import {AppRoutingModule} from '../../app-routing.module';
import {SharedModule} from '../../shared.module';



@NgModule({
    declarations: [NavigationComponent],
    exports: [
        NavigationComponent
    ],
    imports: [
      CommonModule,
      SharedModule
    ]
})
export class NavigationModule { }
