import { TestBed } from '@angular/core/testing';

import { IframeSettingService } from './iframe-setting.service';

describe('IframeSettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IframeSettingService = TestBed.get(IframeSettingService);
    expect(service).toBeTruthy();
  });
});
