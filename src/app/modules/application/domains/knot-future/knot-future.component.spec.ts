/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KnotFutureComponent } from './knot-future.component';

describe('KnotFutureComponent', () => {
  let component: KnotFutureComponent;
  let fixture: ComponentFixture<KnotFutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnotFutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnotFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
