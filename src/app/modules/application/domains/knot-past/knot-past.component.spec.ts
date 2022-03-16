/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KnotPastComponent } from './knot-past.component';

describe('KnotPastComponent', () => {
  let component: KnotPastComponent;
  let fixture: ComponentFixture<KnotPastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnotPastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnotPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
