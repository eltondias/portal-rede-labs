import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosLaboratoriosComponent } from './servicos-laboratorios.component';

describe('ServicosLaboratoriosComponent', () => {
  let component: ServicosLaboratoriosComponent;
  let fixture: ComponentFixture<ServicosLaboratoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosLaboratoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosLaboratoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
