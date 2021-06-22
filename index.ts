console.clear();
// Import RxJS;
import { of, Observable, interval, fromEvent } from 'rxjs';
import { map, scan, filter, take, takeWhile, delay } from 'rxjs/operators';
//------------------------------------------------------------
interval(1000)
  .pipe(
    takeWhile(() => true),
    take(3),
    map(v => Date.now())
  )
  .subscribe(value => console.log('Subscriber: ' + value));
//-------------------------------------------------------------
//emits any number of provided values in sequence
const source = of(1, 2, 3, 4, 5);
//output: 1,2,3,4,5
const subscribe = source.subscribe(val => console.log(val));
//emits values of any type
const sourceAnyType = of({ name: 'Brian' }, [1, 2, 3], function hello() {
  return 'Hello';
});
//output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
const subscribeAnyType = sourceAnyType.subscribe(val => console.log(val));
const getNumbers = (): Observable<number> => {
  return of(1, 2, 3, 4, 5, 6, 7);
};
const calculateNumbers = (): void => {
  getNumbers()
    .pipe(
      filter(n => n % 2 === 1),
      map(n => n + 10),
      scan((sum, n) => sum + n)
    )
    .subscribe(result => console.log(result));
};
calculateNumbers();
//-------------------------------------------------------------
const clicks = fromEvent(document, 'click');
const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
delayedClicks.subscribe(x => console.log(x));
//-------------------------------------------------------------
