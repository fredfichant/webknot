import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueTable13Component } from './vue-table13.component';

describe('VueTable13Component', () => {
  let component: VueTable13Component;
  let fixture: ComponentFixture<VueTable13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueTable13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueTable13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
