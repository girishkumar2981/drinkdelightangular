import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateporderComponent } from './updateporder.component';

describe('UpdateporderComponent', () => {
  let component: UpdateporderComponent;
  let fixture: ComponentFixture<UpdateporderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateporderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateporderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
