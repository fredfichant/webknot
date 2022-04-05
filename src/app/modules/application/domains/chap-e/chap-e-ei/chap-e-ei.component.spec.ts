import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapEEiComponent } from './chap-e-ei.component';

describe('ChapEEiComponent', () => {
  let component: ChapEEiComponent;
  let fixture: ComponentFixture<ChapEEiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapEEiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapEEiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
