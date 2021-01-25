import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaupRedditComponent } from './paup-reddit.component';

describe('PaupRedditComponent', () => {
  let component: PaupRedditComponent;
  let fixture: ComponentFixture<PaupRedditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaupRedditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaupRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
