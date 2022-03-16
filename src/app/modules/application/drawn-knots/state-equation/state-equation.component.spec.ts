import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateEquationComponent } from './state-equation.component';

describe('StateEquationComponent', () => {
  let component: StateEquationComponent;
  let fixture: ComponentFixture<StateEquationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateEquationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateEquationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
