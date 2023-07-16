import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHomePageComponent } from './template-home-page.component';

describe('TemplateHomePageComponent', () => {
  let component: TemplateHomePageComponent;
  let fixture: ComponentFixture<TemplateHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateHomePageComponent]
    });
    fixture = TestBed.createComponent(TemplateHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
