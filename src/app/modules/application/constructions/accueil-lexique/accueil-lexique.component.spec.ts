import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilLexiqueComponent } from './accueil-lexique.component';

describe('AccueilLexiqueComponent', () => {
  let component: AccueilLexiqueComponent;
  let fixture: ComponentFixture<AccueilLexiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilLexiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilLexiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
