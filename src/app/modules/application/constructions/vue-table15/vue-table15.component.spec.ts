import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueTable15Component } from './vue-table15.component';

describe('VueTable15Component', () => {
  let component: VueTable15Component;
  let fixture: ComponentFixture<VueTable15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueTable15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueTable15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
