/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KnotNowComponent } from './knot-now.component';

describe('KnotNowComponent', () => {
  let component: KnotNowComponent;
  let fixture: ComponentFixture<KnotNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnotNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnotNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
