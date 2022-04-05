/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViesexeComponent } from './viesexe.component';

describe('ViesexeComponent', () => {
  let component: ViesexeComponent;
  let fixture: ComponentFixture<ViesexeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViesexeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViesexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
