import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTemaComponent } from './admin-tema.component';

describe('AdminTemaComponent', () => {
  let component: AdminTemaComponent;
  let fixture: ComponentFixture<AdminTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
