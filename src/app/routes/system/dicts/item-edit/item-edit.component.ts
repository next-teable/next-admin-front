import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { APIs } from '@shared/api';

@Component({
  selector: 'app-system-dicts-item-edit',
  templateUrl: './item-edit.component.html',
})
export class SystemDictsItemEditComponent implements OnInit {
  record: any = {};

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {}

  save(value: any) {
    if (this.record.id) {
      this.http.put(`${APIs.dictItems}/${this.record.id}`, this.record).subscribe(res => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
    } else {
      this.http.post(`${APIs.dictItems}`, this.record).subscribe(res => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
    }
  }

  close() {
    this.modal.destroy();
  }
}
