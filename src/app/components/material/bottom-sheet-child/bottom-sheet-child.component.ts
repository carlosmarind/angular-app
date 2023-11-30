import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-child',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './bottom-sheet-child.component.html',
  styleUrls: ['./bottom-sheet-child.component.css']
})
export class BottomSheetChildComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetChildComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { link: string, title: string, description: string }[]
  ) { console.log(data); }

  openLink(item: { link: string, title: string, description: string }): void {
    this._bottomSheetRef.dismiss();
    console.log("mi logica");
    window.open(item.link, '_blank');

  }
}
