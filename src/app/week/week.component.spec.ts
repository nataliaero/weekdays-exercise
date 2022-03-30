import { DayModule } from '../day';
import { TestBed } from '@angular/core/testing';
import { WeekComponent } from './week.component';

const dateConstructor = Date;

async function setup() {
  await TestBed.configureTestingModule({
    imports: [DayModule],
    declarations: [WeekComponent],
  }).compileComponents();
}

interface TestData {
  date: Date;
  index: number;
}

describe('WeekComponent', () => {
  afterEach(() => {
    jest.clearAllMocks();
    global.Date = dateConstructor;
  });

  test.each`
    date                                   | index
    ${new Date('March 28, 2022 00:00:00')} | ${0}
    ${new Date('March 29, 2022 00:00:00')} | ${1}
    ${new Date('March 30, 2022 00:00:00')} | ${2}
    ${new Date('March 31, 2022 00:00:00')} | ${3}
    ${new Date('April 1, 2022 00:00:00')}  | ${4}
    ${new Date('April 2, 2022 00:00:00')}  | ${5}
    ${new Date('April 3, 2022 00:00:00')}  | ${6}
  `(
    'validPaymentMethod: $type / $liabilityShifted / $details',
    ({ date, index }: TestData) => {
      global.Date.now = jest.fn(() => date.getTime());
      setup();
      const fixture = TestBed.createComponent(WeekComponent);
      const app = fixture.componentInstance;

      app.ngOnInit();
      expect(app.weekConfig[index].selected).toBe(true);
    }
  );
});
