import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainScreenPage } from './main-screen';

@NgModule({
  declarations: [
    MainScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(MainScreenPage),
  ],
  exports: [
    MainScreenPage
  ]
})
export class MainScreenPageModule {}
