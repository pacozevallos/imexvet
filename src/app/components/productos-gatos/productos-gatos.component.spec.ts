import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosGatosComponent } from './productos-gatos.component';

describe('ProductosGatosComponent', () => {
  let component: ProductosGatosComponent;
  let fixture: ComponentFixture<ProductosGatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosGatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
