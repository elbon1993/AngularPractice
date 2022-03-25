import { TestBed } from '@angular/core/testing';

import { HttpRestClientService } from './http-rest-client.service';

describe('HttpRestClientService', () => {
  let service: HttpRestClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRestClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
