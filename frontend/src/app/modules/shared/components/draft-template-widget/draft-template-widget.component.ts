import { Component } from '@angular/core';



interface DraftTemplateFields {
  name?: string;
  progress?: string;
  templateId?: string;
}

@Component({
  selector: 'app-draft-template-widget',
  templateUrl: './draft-template-widget.component.html',
  styleUrls: ['./draft-template-widget.component.scss']
})
export class DraftTemplateWidgetComponent {

  draftTemplateData!: DraftTemplateFields; 

  constructor() {}


  editDraft() {}

  deleteDraft() {}

}
