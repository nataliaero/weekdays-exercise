import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeekModule } from './week';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WeekModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
