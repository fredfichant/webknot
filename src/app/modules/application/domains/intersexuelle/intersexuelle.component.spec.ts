/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntersexuelleComponent } from './intersexuelle.component';

describe('IntersexuelleComponent', () => {
  let component: IntersexuelleComponent;
  let fixture: ComponentFixture<IntersexuelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntersexuelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersexuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
