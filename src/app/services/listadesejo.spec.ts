import { TestBed } from '@angular/core/testing';

import { Listadesejo } from './listadesejo';

describe('Listadesejo', () => {
  let service: Listadesejo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Listadesejo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
