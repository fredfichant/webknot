/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InternationaleComponent } from './internationale.component';

describe('InternationaleComponent', () => {
  let component: InternationaleComponent;
  let fixture: ComponentFixture<InternationaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
