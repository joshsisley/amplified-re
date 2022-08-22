import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
