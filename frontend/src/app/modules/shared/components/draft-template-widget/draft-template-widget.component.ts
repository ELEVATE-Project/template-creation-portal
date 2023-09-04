import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';



interface DraftTemplateFields {
  name?: string;
  progress?: string;
  _id: string;
  template_code: Number,
  template_name: string,
  data: any

}

@Component({
  selector: 'app-draft-template-widget',
  templateUrl: './draft-template-widget.component.html',
  styleUrls: ['./draft-template-widget.component.scss']
})
export class DraftTemplateWidgetComponent {

  @Input() draftTemplateData!: DraftTemplateFields; 
  isLoading: boolean = false;

  constructor(private router: Router, private localStorage: LocalStorageService) {}

  async saveTemplateDataInLocal(){
    await this.localStorage.saveLocalData(`${localKeys.TEMPLATE_DATA}`+this.draftTemplateData._id, JSON.stringify({'template_code': this.draftTemplateData.template_code, 'template_name':this.draftTemplateData.template_name , 'data': this.draftTemplateData.data}))
  }

  async editDraft() {
    try {
      this.isLoading = true;
    await this.saveTemplateDataInLocal();
    this.isLoading = false;
    this.router.navigate(['/template/template-creation'], {queryParams:{template_code: this.draftTemplateData.template_code, template_id: this.draftTemplateData._id}});
  }catch(error) {
    console.error('Error saving template data in local');
  } finally {
    this.isLoading = false
  }
  }

  deleteDraft() {}

}
