import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { APIs } from '@shared/api';
import { PaperEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
})
export class PaperComponent implements OnInit {
  url = `${APIs.paper.messagePending}`;
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '#', index: 'no' },
    { title: '标题', type: 'number', index: 'callNo' },
    { title: '创建人', type: 'img', width: '50px', index: 'avatar' },
    { title: '最后处理人', type: 'date', index: 'updatedAt' },
    { title: '最后处理时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

  add() {

      this.modal.createStatic(PaperEditComponent, { record: {} }, { size: 'xl' }).subscribe(() => this.st.reload());
  }

}
