import {NgModule} from '@angular/core';
import {AppMaterialModule} from './app-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [AppRoutingModule, AppMaterialModule, FlexLayoutModule],
  exports: [AppRoutingModule, AppMaterialModule, FlexLayoutModule]
})
export class SharedModule {
}
