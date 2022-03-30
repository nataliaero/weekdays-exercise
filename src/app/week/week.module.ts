import { CommonModule } from '@angular/common';
import { DayModule } from '../day';
import { NgModule } from '@angular/core';
import { WeekComponent } from './week.component';

@NgModule({
  imports: [CommonModule, DayModule],
  declarations: [WeekComponent],
  exports: [WeekComponent],
})
export class WeekModule {}
