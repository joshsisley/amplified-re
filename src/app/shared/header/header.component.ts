import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() user: any;
  @Output() signOutEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  signOut() {
    this.signOutEvent.emit();
  }

}
