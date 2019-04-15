import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasAtuacaoComponent } from './areas-atuacao.component';

describe('AreasAtuacaoComponent', () => {
  let component: AreasAtuacaoComponent;
  let fixture: ComponentFixture<AreasAtuacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasAtuacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasAtuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
