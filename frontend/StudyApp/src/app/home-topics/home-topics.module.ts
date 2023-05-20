import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomeTopicsPage } from './home-topics.page';
import { HomeTopicsPageRoutingModule } from './home-topics-routing.module';
import { MessageComponentModule } from '../message/message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomeTopicsPageRoutingModule
  ],
  declarations: [HomeTopicsPage]
})
export class HomeTopicsPageModule {}
