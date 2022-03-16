/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChromoComponent } from './chromo.component';

describe('ChromoComponent', () => {
  let component: ChromoComponent;
  let fixture: ComponentFixture<ChromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
