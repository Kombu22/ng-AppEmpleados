import { TestBed } from '@angular/core/testing';

import { ServiciosEmpleadosService } from './servicios-empleados.service';

describe('ServiciosEmpleadosService', () => {
  let service: ServiciosEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
