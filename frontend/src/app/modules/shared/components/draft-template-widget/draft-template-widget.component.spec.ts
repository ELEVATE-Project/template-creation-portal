import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftTemplateWidgetComponent } from './draft-template-widget.component';

describe('DraftTemplateWidgetComponent', () => {
  let component: DraftTemplateWidgetComponent;
  let fixture: ComponentFixture<DraftTemplateWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraftTemplateWidgetComponent]
    });
    fixture = TestBed.createComponent(DraftTemplateWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
