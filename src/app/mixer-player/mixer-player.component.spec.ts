import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixerPlayerComponent } from './mixer-player.component';

describe('MixerPlayerComponent', () => {
  let component: MixerPlayerComponent;
  let fixture: ComponentFixture<MixerPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixerPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixerPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
