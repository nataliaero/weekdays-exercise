import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week',
  template: `<div class="week-container">
    <div *ngFor="let day of weekConfig" class="day-container">
      <app-day [name]="day.name" [selected]="day.selected"></app-day>
    </div>
  </div>`,
  styleUrls: ['./week.component.scss'],
})
export class WeekComponent implements OnInit {
  weekConfig = [
    { name: 'Mon', selected: false },
    { name: 'Tue', selected: false },
    { name: 'Wed', selected: false },
    { name: 'Thu', selected: false },
    { name: 'Fri', selected: false },
    { name: 'Sat', selected: false },
    { name: 'Sun', selected: false },
  ];

  ngOnInit() {
    let dayOfWeek = new Date(Date.now()).getDay() - 1;
    if (dayOfWeek === -1) {
      dayOfWeek = 6;
    }
    this.weekConfig[dayOfWeek].selected = true;
  }
}
