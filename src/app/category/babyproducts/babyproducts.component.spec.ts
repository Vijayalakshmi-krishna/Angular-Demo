import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyproductsComponent } from './babyproducts.component';

describe('BabyproductsComponent', () => {
  let component: BabyproductsComponent;
  let fixture: ComponentFixture<BabyproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
