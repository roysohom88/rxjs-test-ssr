// Import RxJS;
import { of, Observable, interval, fromEvent } from 'rxjs';
import { map, filter, take, takeWhile, delay } from 'rxjs/operators';
interval(1000)
  .pipe(
    takeWhile(() => true),
    take(3),
    map(v => Date.now())
  )
  .subscribe(value => console.log('Subscriber: ' + value));
//emit 1,2,3,4,5
//const source = of(1, 2, 3, 4, 5);

const clicks = fromEvent(document, 'click');
const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
delayedClicks.subscribe(x => console.log(x));
