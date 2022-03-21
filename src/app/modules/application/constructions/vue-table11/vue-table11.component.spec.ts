import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueTable11Component } from './vue-table11.component';

describe('VueTable11Component', () => {
  let component: VueTable11Component;
  let fixture: ComponentFixture<VueTable11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueTable11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueTable11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
