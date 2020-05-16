import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydistributorComponent } from './displaydistributor.component';

describe('DisplaydistributorComponent', () => {
  let component: DisplaydistributorComponent;
  let fixture: ComponentFixture<DisplaydistributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydistributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
