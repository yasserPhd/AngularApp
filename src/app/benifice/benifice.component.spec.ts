import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenificeComponent } from './benifice.component';

describe('BenificeComponent', () => {
  let component: BenificeComponent;
  let fixture: ComponentFixture<BenificeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenificeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenificeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
