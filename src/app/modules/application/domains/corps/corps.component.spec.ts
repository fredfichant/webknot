/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CorpsComponent } from './corps.component';

describe('CorpsComponent', () => {
  let component: CorpsComponent;
  let fixture: ComponentFixture<CorpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
