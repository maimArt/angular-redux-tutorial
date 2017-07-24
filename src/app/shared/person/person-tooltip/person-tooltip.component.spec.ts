import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTooltipComponent } from './person-tooltip.component';

describe('PersonTooltipComponent', () => {
  let component: PersonTooltipComponent;
  let fixture: ComponentFixture<PersonTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
