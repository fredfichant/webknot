/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoctrinesComponent } from './doctrines.component';

describe('DoctrinesComponent', () => {
  let component: DoctrinesComponent;
  let fixture: ComponentFixture<DoctrinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctrinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctrinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
