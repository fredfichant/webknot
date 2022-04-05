import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapEEoComponent } from './chap-e-eo.component';

describe('ChapEEoComponent', () => {
  let component: ChapEEoComponent;
  let fixture: ComponentFixture<ChapEEoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapEEoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapEEoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
