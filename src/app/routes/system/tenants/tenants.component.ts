import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { APIs } from '@shared/api';

@Component({
  selector: 'app-system-tenants',
  templateUrl: './tenants.component.html',
})
export class SystemTenantsComponent implements OnInit {
  url = `${APIs.tenants}/page`;
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号',
      },
    },
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '租户标识', index: 'name' },
    { title: '名称', width: '50px', index: 'displayName' },
    { title: '更新时间', type: 'date', index: 'modifiedAt' },
    {
      title: '',
      buttons: [
        { text: '查看', click: (item: any) => `/form/${item.id}` },
        {
          text: '访问',
          click: (item: any) => {
            this.http.post(`${APIs.token}/exchangeWithJWT`, {}).subscribe(res => {
              // window.open(`http://${item.name}.local.dm84.com:59999/#/passport/login?token=${res}`);
              window.open(`http://${item.name}.local.vanish.com/#/passport/login?token=${res}`);
            });
          },
        },
      ],
    },
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) {}

  ngOnInit() {}

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
}
