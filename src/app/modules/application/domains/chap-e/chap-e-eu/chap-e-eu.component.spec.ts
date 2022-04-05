import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapEEuComponent } from './chap-e-eu.component';

describe('ChapEEuComponent', () => {
  let component: ChapEEuComponent;
  let fixture: ComponentFixture<ChapEEuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapEEuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapEEuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
