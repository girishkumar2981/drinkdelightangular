import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductspecsComponent } from './productspecs.component';

describe('ProductspecsComponent', () => {
  let component: ProductspecsComponent;
  let fixture: ComponentFixture<ProductspecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductspecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductspecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
