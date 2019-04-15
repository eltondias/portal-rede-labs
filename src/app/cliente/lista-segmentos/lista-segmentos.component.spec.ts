import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSegmentosComponent } from './lista-segmentos.component';

describe('ListaSegmentosComponent', () => {
  let component: ListaSegmentosComponent;
  let fixture: ComponentFixture<ListaSegmentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSegmentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSegmentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
