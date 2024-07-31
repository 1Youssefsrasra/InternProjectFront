import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherComponent } from './researcher.component';

describe('ResearcherComponent', () => {
  let component: ResearcherComponent;
  let fixture: ComponentFixture<ResearcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearcherComponent]
    });
    fixture = TestBed.createComponent(ResearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
