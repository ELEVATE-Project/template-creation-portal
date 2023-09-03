import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.scss']
})
export class InputDialogueBoxComponent implements OnInit {
  data!: string;
  constructor(private dialogRef: MatDialogRef<InputDialogueBoxComponent>, @Inject(MAT_DIALOG_DATA) public dialogueData: any) { }

  ngOnInit(): void {
  }
}
