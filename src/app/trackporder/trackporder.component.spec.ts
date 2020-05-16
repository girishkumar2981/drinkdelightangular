import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackporderComponent } from './trackporder.component';

describe('TrackporderComponent', () => {
  let component: TrackporderComponent;
  let fixture: ComponentFixture<TrackporderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackporderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackporderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
