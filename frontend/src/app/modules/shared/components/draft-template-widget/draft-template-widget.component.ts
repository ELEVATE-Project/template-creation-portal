import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { TemplateService } from '../../services/template/template.service';



interface DraftTemplateFields {
  filename?: string;
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
  displayChild: boolean = true;
  @Input() draftTemplateData!: DraftTemplateFields; 
  isLoading: boolean = false;

  constructor(private router: Router, private localStorage: LocalStorageService, private location: Location, private toastService: ToastService, private templateService: TemplateService) {}

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

  deleteDraft() {
    this.templateService.deleteTemplate(this.draftTemplateData._id);
    this.displayChild = false;
  }

  shareTemplateLink() {
    this.copyToClipboard();
  }


  copyToClipboard() {
    try {
      var textToCopy: string = `http://localhost:4200/template/template-preview?template_code=${this.draftTemplateData.template_code}&template_id=${this.draftTemplateData._id}`; 
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      this.toastService.showMessage('Copy to Clipboard','success')
    } catch (error) {
      this.toastService.showMessage('Please Try Again !','error')

    }
  }

  previewTemplate() {
    this.router.navigate(['/template/template-preview'], {queryParams:{template_code: this.draftTemplateData.template_code, template_id: this.draftTemplateData._id}})
  }

}
