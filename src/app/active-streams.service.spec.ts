import { TestBed } from '@angular/core/testing';

import { ActiveStreamsService } from './active-streams.service';

describe('ActiveStreamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveStreamsService = TestBed.get(ActiveStreamsService);
    expect(service).toBeTruthy();
  });
});
