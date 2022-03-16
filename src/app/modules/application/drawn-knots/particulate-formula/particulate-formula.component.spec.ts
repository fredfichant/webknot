import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticulateFormulaComponent } from './particulate-formula.component';

describe('ParticulateFormulaComponent', () => {
  let component: ParticulateFormulaComponent;
  let fixture: ComponentFixture<ParticulateFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticulateFormulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticulateFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
