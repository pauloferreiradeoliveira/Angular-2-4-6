/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Dropdown.service.tsService } from './dropdown.service.ts.service';

describe('Service: Dropdown.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dropdown.service.tsService]
    });
  });

  it('should ...', inject([Dropdown.service.tsService], (service: Dropdown.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});
