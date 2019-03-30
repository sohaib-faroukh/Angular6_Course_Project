import { TestBed } from '@angular/core/testing';

import { QuestionMangementService } from './question-mangement.service';

describe('QuestionMangementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionMangementService = TestBed.get(QuestionMangementService);
    expect(service).toBeTruthy();
  });
});
