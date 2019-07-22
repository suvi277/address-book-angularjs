import { TestBed } from '@angular/core/testing';

import { AddressBookDataService } from './address-book-data.service';

describe('AddressBookDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddressBookDataService = TestBed.get(AddressBookDataService);
    expect(service).toBeTruthy();
  });
});
