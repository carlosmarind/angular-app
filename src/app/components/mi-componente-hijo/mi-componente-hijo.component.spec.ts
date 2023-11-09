import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiComponenteHijoComponent } from './mi-componente-hijo.component';

describe('MiComponenteHijoComponent', () => {
  let component: MiComponenteHijoComponent;
  let fixture: ComponentFixture<MiComponenteHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiComponenteHijoComponent]
    });
    fixture = TestBed.createComponent(MiComponenteHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
