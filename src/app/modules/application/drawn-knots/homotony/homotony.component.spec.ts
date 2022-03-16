import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomotonyComponent } from './homotony.component';

describe('HomotonyComponent', () => {
  let component: HomotonyComponent;
  let fixture: ComponentFixture<HomotonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomotonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomotonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
