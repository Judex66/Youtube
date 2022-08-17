import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MistakePageComponent } from './mistake-page.component';

describe('MistakePageComponent', () => {
  let component: MistakePageComponent;
  let fixture: ComponentFixture<MistakePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MistakePageComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MistakePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
