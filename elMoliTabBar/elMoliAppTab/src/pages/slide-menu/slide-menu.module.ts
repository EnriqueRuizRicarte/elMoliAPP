import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlideMenuPage } from './slide-menu';

@NgModule({
  declarations: [
    SlideMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideMenuPage),
  ],
})
export class SlideMenuPageModule {}
