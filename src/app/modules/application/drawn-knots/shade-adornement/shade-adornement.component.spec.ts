import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadeAdornementComponent } from './shade-adornement.component';

describe('ShadeAdornementComponent', () => {
  let component: ShadeAdornementComponent;
  let fixture: ComponentFixture<ShadeAdornementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadeAdornementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadeAdornementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
