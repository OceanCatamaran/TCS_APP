import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ForumPage } from './Forum.page';

describe('ForumPage', () => {
  let component: ForumPage;
  let fixture: ComponentFixture<ForumPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ForumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});