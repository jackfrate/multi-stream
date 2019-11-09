import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamSizeAdjusterComponent } from './stream-size-adjuster.component';

describe('StreamSizeAdjusterComponent', () => {
  let component: StreamSizeAdjusterComponent;
  let fixture: ComponentFixture<StreamSizeAdjusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamSizeAdjusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamSizeAdjusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
