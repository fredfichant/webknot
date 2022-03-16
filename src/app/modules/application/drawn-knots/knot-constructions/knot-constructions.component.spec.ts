import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnotConstructionsComponent } from './knot-constructions.component';

describe('KnotConstructionsComponent', () => {
  let component: KnotConstructionsComponent;
  let fixture: ComponentFixture<KnotConstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnotConstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnotConstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
