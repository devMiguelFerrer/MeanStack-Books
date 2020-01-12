import { TestBed } from '@angular/core/testing';

import { AppbarService } from './appbar.service';

describe('AppbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppbarService = TestBed.get(AppbarService);
    expect(service).toBeTruthy();
  });
});
