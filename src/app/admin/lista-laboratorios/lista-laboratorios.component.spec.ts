import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLaboratoriosComponent } from './lista-laboratorios.component';

describe('ListaLaboratoriosComponent', () => {
  let component: ListaLaboratoriosComponent;
  let fixture: ComponentFixture<ListaLaboratoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLaboratoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLaboratoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
