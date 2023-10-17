import { TestBed } from '@angular/core/testing';

import { RoutedataService } from './routedata.service';

describe('RoutedataService', () => {
  let service: RoutedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
