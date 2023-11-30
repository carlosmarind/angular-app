import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetChildComponent } from '../bottom-sheet-child/bottom-sheet-child.component';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatBottomSheetModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent {

  constructor(private _bottomSheet: MatBottomSheet) { }
  data = [
    {
      link: 'https://keep.google.com/',
      title: 'Google Keep',
      description: 'Añadir una nota'
    },
    {
      link: 'https://docs.google.com/',
      title: 'Google Docs',
      description: 'Abrir un documento'
    },
    {
      link: 'https://plus.google.com/',
      title: 'Google Plus',
      description: 'Compartir con amigos'
    },
    {
      link: 'https://hangouts.google.com/',
      title: 'Google Hangouts',
      description: 'Chatear con tus amigos'
    }
  ];

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetChildComponent, { data: this.data });
  }
}
