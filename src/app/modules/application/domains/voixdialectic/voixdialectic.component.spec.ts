/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VoixdialecticComponent } from './voixdialectic.component';

describe('VoixdialecticComponent', () => {
  let component: VoixdialecticComponent;
  let fixture: ComponentFixture<VoixdialecticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoixdialecticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoixdialecticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
