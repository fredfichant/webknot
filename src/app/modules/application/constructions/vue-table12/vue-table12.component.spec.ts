import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueTable12Component } from './vue-table12.component';

describe('VueTable12Component', () => {
  let component: VueTable12Component;
  let fixture: ComponentFixture<VueTable12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueTable12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueTable12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
