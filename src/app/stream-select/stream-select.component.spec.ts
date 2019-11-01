import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamSelectComponent } from './stream-select.component';

describe('StreamSelectComponent', () => {
  let component: StreamSelectComponent;
  let fixture: ComponentFixture<StreamSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
