import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueTable14Component } from './vue-table14.component';

describe('VueTable14Component', () => {
  let component: VueTable14Component;
  let fixture: ComponentFixture<VueTable14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueTable14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueTable14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
