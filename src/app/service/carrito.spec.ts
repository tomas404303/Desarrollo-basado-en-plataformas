import { TestBed } from '@angular/core/testing';

import { Carrito } from '../services/carrito';

describe('Carrito', () => {
  let service: Carrito;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Carrito);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
