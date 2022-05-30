import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoClassComponent } from './video-class.component';

describe('VideoClassComponent', () => {
  let component: VideoClassComponent;
  let fixture: ComponentFixture<VideoClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
