import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes } from './componentes';

describe('Componentes', () => {
  let component: Componentes;
  let fixture: ComponentFixture<Componentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
