import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducibilityComponent } from './reducibility.component';

describe('ReducibilityComponent', () => {
  let component: ReducibilityComponent;
  let fixture: ComponentFixture<ReducibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReducibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReducibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
