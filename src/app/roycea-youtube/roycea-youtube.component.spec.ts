import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyceaYoutubeComponent } from './roycea-youtube.component';

describe('RoyceaYoutubeComponent', () => {
  let component: RoyceaYoutubeComponent;
  let fixture: ComponentFixture<RoyceaYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyceaYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyceaYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
