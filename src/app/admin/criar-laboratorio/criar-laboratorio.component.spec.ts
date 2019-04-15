import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarLaboratorioComponent } from './criar-laboratorio.component';

describe('CriarLaboratorioComponent', () => {
  let component: CriarLaboratorioComponent;
  let fixture: ComponentFixture<CriarLaboratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarLaboratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
