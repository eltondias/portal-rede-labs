import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLaboratorioComponent } from './page-laboratorio.component';

describe('PageLaboratorioComponent', () => {
  let component: PageLaboratorioComponent;
  let fixture: ComponentFixture<PageLaboratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLaboratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
