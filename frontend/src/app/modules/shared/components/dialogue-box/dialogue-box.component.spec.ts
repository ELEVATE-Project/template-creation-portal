import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDialogueBoxComponent } from './dialogue-box.component';

describe('InputDialogueBoxComponent', () => {
  let component: InputDialogueBoxComponent;
  let fixture: ComponentFixture<InputDialogueBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDialogueBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDialogueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
