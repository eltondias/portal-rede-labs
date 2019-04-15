import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTemaComponent } from './cliente-tema.component';

describe('ClienteTemaComponent', () => {
  let component: ClienteTemaComponent;
  let fixture: ComponentFixture<ClienteTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
