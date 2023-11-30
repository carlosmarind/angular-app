import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetChildComponent } from './bottom-sheet-child.component';

describe('BottomSheetChildComponent', () => {
  let component: BottomSheetChildComponent;
  let fixture: ComponentFixture<BottomSheetChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BottomSheetChildComponent]
    });
    fixture = TestBed.createComponent(BottomSheetChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
