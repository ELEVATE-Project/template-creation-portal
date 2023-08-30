import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCreationComponent } from './template-creation.component';

describe('TemplateCreationComponent', () => {
  let component: TemplateCreationComponent;
  let fixture: ComponentFixture<TemplateCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateCreationComponent]
    });
    fixture = TestBed.createComponent(TemplateCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
