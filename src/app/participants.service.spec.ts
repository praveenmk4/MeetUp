import { TestBed, inject } from '@angular/core/testing';

import { ParticipantsService } from './participants.service';

describe('ParticipantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticipantsService]
    });
  });

  it('should ...', inject([ParticipantsService], (service: ParticipantsService) => {
    expect(service).toBeTruthy();
  }));
});
