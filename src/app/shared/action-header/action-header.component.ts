import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IHeaderAction } from 'src/app/core/model/header-action';

@Component({
  selector: 'app-action-header',
  templateUrl: './action-header.component.html',
  styleUrls: ['./action-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionHeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() actions: IHeaderAction[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
