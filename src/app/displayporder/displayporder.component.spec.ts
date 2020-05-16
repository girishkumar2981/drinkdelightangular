import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayporderComponent } from './displayporder.component';

describe('DisplayporderComponent', () => {
  let component: DisplayporderComponent;
  let fixture: ComponentFixture<DisplayporderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayporderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayporderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
