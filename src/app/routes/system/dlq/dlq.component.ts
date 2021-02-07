import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { APIs } from '@shared/api';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { SystemDlqViewComponent } from './view/view.component';

@Component({
  selector: 'app-system-dlq',
  templateUrl: './dlq.component.html',
})
export class SystemDlqComponent implements OnInit {
  url = `${APIs.dlq}`;
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
    { title: '原队列', width: '10%', index: 'originalTopic' },
    { title: '事件', width: '10%', index: 'businessEvent' },
    { title: '创建时间', width: '10%', type: 'date', index: 'createdAt' },
    {
      title: '是否已处理',
      index: 'handled',
      type: 'badge',
      width: '10%',
      badge: {
        true: { text: '已处理', color: 'success' },
        false: { text: '未处理', color: 'error' },
      },
    },
    {
      title: '操作',
      className: 'text-left',
      width: '10%',
      buttons: [
        {
          text: '查看',
          click: record => {
            this.modal.createStatic(SystemDlqViewComponent,  { record }, { size: 'lg' }).subscribe();
          },
        },
        {
          text: '重入队',
          type: 'static',
          click: record => {
            this.confirmServ.confirm({
              nzTitle: '确定将消息重新加入到队列吗？',
              nzOnOk: () => {
                this.http.post(`${APIs.dlq}/redo/${record.id}`, {}).subscribe(res => {
                  this.msgSrv.success('操作成功');
                  this.st.reload();
                });
              },
            });
          },
        },
        {
          text: '删除',
          type: 'static',
          click: record => {
            this.confirmServ.confirm({
              nzTitle: '确定要删除吗？',
              nzOnOk: () => {
                this.http.delete(`${APIs.dlq}/markAsDeleted/${record.id}`, {}).subscribe(res => {
                  this.msgSrv.success('操作成功');
                  this.st.reload();
                });
              },
            });
          },
        },
      ],
    },
  ];

  constructor(
    private http: _HttpClient,
    private modal: ModalHelper,
    private msgSrv: NzMessageService,
    private confirmServ: NzModalService,
  ) {}

  ngOnInit() {}

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
}
