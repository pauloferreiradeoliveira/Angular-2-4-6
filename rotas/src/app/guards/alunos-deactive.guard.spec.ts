import { TestBed, async, inject } from '@angular/core/testing';

import { AlunosDeactiveGuard } from './alunos-deactive.guard';

describe('AlunosDeactiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunosDeactiveGuard]
    });
  });

  it('should ...', inject([AlunosDeactiveGuard], (guard: AlunosDeactiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
