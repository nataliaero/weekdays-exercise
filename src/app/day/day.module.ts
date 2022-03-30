import { CommonModule } from '@angular/common';
import { DayComponent } from './day.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [DayComponent],
  exports: [DayComponent],
})
export class DayModule {}
