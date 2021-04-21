import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetalleAdminComponent } from './producto-detalle-admin.component';

describe('ProductoDetalleAdminComponent', () => {
  let component: ProductoDetalleAdminComponent;
  let fixture: ComponentFixture<ProductoDetalleAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoDetalleAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoDetalleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
