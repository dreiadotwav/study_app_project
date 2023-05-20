import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { EditTopicPageRoutingModule } from './edit-topic-routing.module';
import { EditTopicPage } from './edit-topic.page';

describe('EditTopicPage', () => {
  let component: EditTopicPage;
  let fixture: ComponentFixture<EditTopicPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [EditTopicPage],
      imports: [IonicModule.forRoot(), EditTopicPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTopicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
