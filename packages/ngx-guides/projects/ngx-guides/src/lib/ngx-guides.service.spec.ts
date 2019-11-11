import { TestBed } from '@angular/core/testing';

import { NgxGuidesService } from './ngx-guides.service';

describe('NgxGuidesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxGuidesService = TestBed.get(NgxGuidesService);
    expect(service).toBeTruthy();
  });
});
