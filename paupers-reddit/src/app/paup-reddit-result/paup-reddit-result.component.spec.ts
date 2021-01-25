import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaupRedditResultComponent } from './paup-reddit-result.component';

describe('PaupRedditResultComponent', () => {
  let component: PaupRedditResultComponent;
  let fixture: ComponentFixture<PaupRedditResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaupRedditResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaupRedditResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
