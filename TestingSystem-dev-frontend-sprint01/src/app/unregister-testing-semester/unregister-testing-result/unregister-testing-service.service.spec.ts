import { TestBed } from '@angular/core/testing';
import { UnUserTestingServiceService } from '../Unreister-testing-service.service';

describe('UserTestingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnUserTestingServiceService = TestBed.get(UnUserTestingServiceService);
    expect(service).toBeTruthy();
  });
});
