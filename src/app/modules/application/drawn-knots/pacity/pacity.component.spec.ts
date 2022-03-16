import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacityComponent } from './pacity.component';

describe('PacityComponent', () => {
  let component: PacityComponent;
  let fixture: ComponentFixture<PacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
