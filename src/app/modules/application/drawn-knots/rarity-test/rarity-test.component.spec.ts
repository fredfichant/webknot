import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RarityTestComponent } from './rarity-test.component';

describe('RarityTestComponent', () => {
  let component: RarityTestComponent;
  let fixture: ComponentFixture<RarityTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RarityTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RarityTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
