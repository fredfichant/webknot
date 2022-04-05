/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AmourVraieComponent } from './amour-vraie.component';

describe('AmourVraieComponent', () => {
  let component: AmourVraieComponent;
  let fixture: ComponentFixture<AmourVraieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmourVraieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmourVraieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
