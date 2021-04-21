import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPerrosComponent } from './productos-perros.component';

describe('ProductosPerrosComponent', () => {
  let component: ProductosPerrosComponent;
  let fixture: ComponentFixture<ProductosPerrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosPerrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosPerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
