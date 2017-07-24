import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailViewComponent } from './person-detail-view.component';

describe('PersonDetailViewComponent', () => {
  let component: PersonDetailViewComponent;
  let fixture: ComponentFixture<PersonDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
