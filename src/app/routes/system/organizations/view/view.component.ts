import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-system-organizations-view',
  templateUrl: './view.component.html',
})
export class SystemOrganizationsViewComponent implements OnInit {
  record: any = {};

  constructor(private modal: NzModalRef, public msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {}

  close() {
    this.modal.destroy();
  }
}
