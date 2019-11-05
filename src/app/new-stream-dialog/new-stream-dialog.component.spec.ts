import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStreamDialogComponent } from './new-stream-dialog.component';

describe('NewStreamDialogComponent', () => {
  let component: NewStreamDialogComponent;
  let fixture: ComponentFixture<NewStreamDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStreamDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStreamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
