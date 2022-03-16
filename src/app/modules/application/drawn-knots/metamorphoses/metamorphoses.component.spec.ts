import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetamorphosesComponent } from './metamorphoses.component';

describe('MetamorphosesComponent', () => {
  let component: MetamorphosesComponent;
  let fixture: ComponentFixture<MetamorphosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetamorphosesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetamorphosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
