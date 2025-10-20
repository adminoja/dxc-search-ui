import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoticeService } from 'src/app/core/shared/services/reason/notice.service';
import { IDxcNotice } from './dxc-notice.interface';

@Component({
  selector: 'app-dxc-notice',
  templateUrl: './dxc-notice.component.html',
  styleUrls: ['./dxc-notice.component.scss']
})
export class DxcNoticeComponent implements OnInit {
  @Output() noticeItem = new EventEmitter<any>();
  content: IDxcNotice;
  contentNotices: any;

  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.getContentNotice()
  }

  getContentNotice() {
    this.noticeService.getUserAccountList().subscribe(data => {
      this.contentNotices = data.content
      this.noticeItem.emit(data.content.length)
      // console.log(data.content.length)
    });
  }

}
