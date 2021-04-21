import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMarcasComponent } from './admin-marcas.component';

describe('AdminMarcasComponent', () => {
  let component: AdminMarcasComponent;
  let fixture: ComponentFixture<AdminMarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMarcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
