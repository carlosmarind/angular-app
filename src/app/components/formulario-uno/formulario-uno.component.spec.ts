import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUnoComponent } from './formulario-uno.component';

describe('FormularioUnoComponent', () => {
  let component: FormularioUnoComponent;
  let fixture: ComponentFixture<FormularioUnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioUnoComponent]
    });
    fixture = TestBed.createComponent(FormularioUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
