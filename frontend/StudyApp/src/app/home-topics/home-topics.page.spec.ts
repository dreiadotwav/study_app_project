import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MessageComponentModule } from '../message/message.module';

import { HomeTopicsPage } from './home-topics.page';

describe('HomeTopicsPage', () => {
  let component: HomeTopicsPage;
  let fixture: ComponentFixture<HomeTopicsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeTopicsPage],
      imports: [IonicModule.forRoot(), MessageComponentModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTopicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
