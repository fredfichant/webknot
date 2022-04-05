import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapEEeComponent } from './chap-e-ee.component';

describe('ChapEEeComponent', () => {
  let component: ChapEEeComponent;
  let fixture: ComponentFixture<ChapEEeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapEEeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapEEeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
