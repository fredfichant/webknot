/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClitorneComponent } from './clitorne.component';

describe('ClitorneComponent', () => {
  let component: ClitorneComponent;
  let fixture: ComponentFixture<ClitorneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClitorneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClitorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
