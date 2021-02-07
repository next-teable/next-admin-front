import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SystemAuditLogsViewComponent } from './view/view.component';
import { formatDate } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd';
import { APIs } from '@shared/api';

@Component({
  selector: 'app-system-audit-logs',
  templateUrl: './audit-logs.component.html',
})
export class SystemAuditLogsComponent implements OnInit {
  url = `${APIs.auditLogs}`;
  dateFormat = 'yyyy-MM-dd HH:mm:ss';
  searchConditions = {
    blurry: '',
    auditType: '',
    createTime: [],
  };
  // searchSchema: SFSchema = {
  //   properties: {
  //     blurry: {
  //       type: 'string',
  //       title: '关键字',
  //       ui: {
  //         placeholder: '用户名，地址，IP，描述',
  //       },
  //     },
  //     // logType: {
  //     //   type: 'string',
  //     //   title: '类型',
  //     // },
  //   },
  // };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '请求时间', type: 'date', index: 'createTime' },
    { title: '请求用户', index: 'userName' },
    { title: '描述', index: 'description' },
    { title: 'IP', index: 'outerIPAddress' },
    { title: '地址', index: 'address' },
    { title: '耗时（毫秒）', index: 'spendTime' },
    {
      title: '类型',
      index: 'auditType',
      type: 'badge',
      badge: {
        INFO: { text: 'INFO', color: 'success' },
        ERROR: { text: 'ERROR', color: 'error' },
      },
    },
    { title: '服务', index: 'serviceName' },
    {
      title: '',
      buttons: [
        {
          text: '查看',
          click: (item: any) => {
            this.modal.createStatic(SystemAuditLogsViewComponent, { record: item }, { size: 'lg' }).subscribe();
          },
        },
      ],
    },
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, private confirmServ: NzModalService) {}

  ngOnInit() {}

  query() {
    if (this.searchConditions.createTime && this.searchConditions.createTime.length > 0) {
      this.searchConditions.createTime = this.searchConditions.createTime.map((date: Date) => {
        return formatDate(date, this.dateFormat, 'zh-cn');
      });
    }

    this.st.reset({
      ...this.st.req.params,
      ...this.searchConditions,
    });
  }

  reset() {
    this.searchConditions = {
      blurry: '',
      auditType: '',
      createTime: [],
    };
    this.st.reset({
      ...this.st.req.params,
      ...this.searchConditions,
    });
  }

  delAll(type) {
    this.confirmServ.confirm({
      nzTitle: '<i>确定要删除审计日志么？（不可恢复）</i>',
      nzOnOk: () => {
        this.http.delete(`${APIs.auditLogs}/del/${type}`).subscribe(res => {
          this.st.reset({ ...this.st.req.params });
        });
      },
    });
  }
}
