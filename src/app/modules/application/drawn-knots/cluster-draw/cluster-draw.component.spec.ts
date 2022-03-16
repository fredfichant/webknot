import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterDrawComponent } from './cluster-draw.component';

describe('ClusterDrawComponent', () => {
  let component: ClusterDrawComponent;
  let fixture: ComponentFixture<ClusterDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusterDrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
