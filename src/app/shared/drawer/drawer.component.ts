import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),

      // To define animations based on trigger actions
      state('open', style({ transform: 'translateX(0%)' })),
      state('close', style({ transform: 'translateX(100%)' })),
      transition('open => close', [
        animate('300ms ease-in')
      ]),
      transition('close => open', [
        animate('300ms ease-out')
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent implements OnInit {
  @Input() open: boolean = false;
  @Input() direction: 'left' | 'right' | 'bottom' = 'right';
  @Input() className: string = '';
  @Input() onClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.open = false;
    this.onClose.emit();
  }

}
