import { TestBed, inject } from '@angular/core/testing';

import { OddService } from './odd.service';

describe('OddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OddService]
    });
  });

  it('should be created', inject([OddService], (service: OddService) => {
    expect(service).toBeTruthy();
  }));
});
