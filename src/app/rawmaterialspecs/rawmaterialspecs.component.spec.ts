import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmaterialspecsComponent } from './rawmaterialspecs.component';

describe('RawmaterialspecsComponent', () => {
  let component: RawmaterialspecsComponent;
  let fixture: ComponentFixture<RawmaterialspecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawmaterialspecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawmaterialspecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
