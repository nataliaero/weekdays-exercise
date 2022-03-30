import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  template: ` <div class="day" [ngClass]="borderClass">{{ name }}</div> `,
  styleUrls: ['./day.component.scss'],
})
export class DayComponent {
  @Input() name: string = '';
  @Input() selected: boolean = true;

  get borderClass(): string {
    return this.selected ? 'solid' : 'dashed';
  }
}
