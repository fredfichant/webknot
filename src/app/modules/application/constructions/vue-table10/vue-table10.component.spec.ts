import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueTable10Component } from './vue-table10.component';

describe('VueTable10Component', () => {
  let component: VueTable10Component;
  let fixture: ComponentFixture<VueTable10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueTable10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueTable10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
