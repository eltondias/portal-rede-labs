import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComumTemaComponent } from './comum-tema.component';

describe('ComumTemaComponent', () => {
  let component: ComumTemaComponent;
  let fixture: ComponentFixture<ComumTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComumTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComumTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
