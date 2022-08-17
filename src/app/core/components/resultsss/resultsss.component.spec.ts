import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsssComponent } from './resultsss.component';

describe('ResultsssComponent', () => {
  let component: ResultsssComponent;
  let fixture: ComponentFixture<ResultsssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsssComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
