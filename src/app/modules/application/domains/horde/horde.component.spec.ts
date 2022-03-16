/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HordeComponent } from './horde.component';

describe('HordeComponent', () => {
  let component: HordeComponent;
  let fixture: ComponentFixture<HordeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HordeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HordeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
