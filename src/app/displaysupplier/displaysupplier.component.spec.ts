import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysupplierComponent } from './displaysupplier.component';

describe('DisplaysupplierComponent', () => {
  let component: DisplaysupplierComponent;
  let fixture: ComponentFixture<DisplaysupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaysupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaysupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
