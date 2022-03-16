/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CapitalessonsComponent } from './capitalessons.component';

describe('CapitalessonsComponent', () => {
  let component: CapitalessonsComponent;
  let fixture: ComponentFixture<CapitalessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
