import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DiaogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(){
    this.dialog.open(MatConfirmDialogComponent,{
      width: '390px',
      disableClose: true
    });
  }
}
