import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _ from 'lodash';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { UUID } from 'angular2-uuid';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { InputDialogueBoxComponent } from '../dialogue-box/dialogue-box.component';

@Component({
  selector: 'app-input-chip',
  templateUrl: './input-chip.component.html',
  styleUrls: ['./input-chip.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: InputChipComponent
    }
  ]
})
export class InputChipComponent implements ControlValueAccessor {

  @Input('chipControl') control: any;
  addChipLabel = "";
  touched = false;
  disabled = false;
  selectedChips: any;
  _selectAll: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  addOnBlur = true;

  constructor(private dialog: MatDialog) { }
  
  onChange = (quantity:any) => {};

  onTouched = () => {};

  ngOnInit() {
  }

  writeValue(value: any[]) {
    this.selectedChips = new Set();
    this.control.options.map((chip:any) => {
      _.some(value, chip) ? this.selectedChips.add(chip) : null
    })
    if (this.selectedChips.size === this.control.options.length) {
      this._selectAll = true;
    }
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  onChipClick(chip:any) {
    this.markAsTouched();
    if (!this.disabled && !this.selectedChips.has(chip)) {
      this.selectedChips.add(chip);
    } else if (this.selectedChips.has(chip)){
      this.selectedChips.delete(chip);
    }  else {
      return
    }
    chip.selected = !chip.selected;
    (!this.selectedChips.size) ? this.onChange([]) : this.onChange([...this.selectedChips]);
    this._selectAll = (this.selectedChips.size !== this.control.options.length) ? false : true;
  }

  selectAll() {
    this.markAsTouched();
    if (this._selectAll) {
      this.control.options.map((chip:any) => this.selectedChips.add(chip));
    } else {
      this.selectedChips.clear();
    }
    (!this.selectedChips.size) ? this.onChange('') : this.onChange([...this.selectedChips]);
  }

  async addChip(event: MatChipInputEvent) {
    this.markAsTouched();
    if (event?.value.length) {
      let obj = {
        label: event.value,
        value: UUID.UUID(),
      };
      this.onChipClick(obj);
      this.control.options.push(obj)
    }
  }

  openDialogue() {
    const dialogRef = this.dialog.open(InputDialogueBoxComponent, {
      data: {
        header: this.control.addNewPopupHeader,
        subHeader: this.control.addNewPopupSubHeader,
        required: this.control.validators.required,
        buttonText: {
          ok: 'OK',
          cancel: 'CANCEL'
        }
      },
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(
      (chip) => {
        if (chip && chip!=='') {
          let obj = {
            label: chip,
            value: UUID.UUID(),
          };
          this.control.options.push(obj)
          this.onChipClick(obj);
        }
      }
    );    
  }
  
}

