import { TestBed } from '@angular/core/testing';

import { UserNameService } from '../../services/userName/user-name.service';

describe('UserNameService', () => {
  let service: UserNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
