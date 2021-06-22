// Import RxJS;
import { of, Observable, interval } from 'rxjs';
import { map, filter, take, takeWhile } from 'rxjs/operators';
interval(1000)
  .pipe(
    take(3),
    map(v => Date.now())
  )
  .subscribe(value => console.log('Subscriber: ' + value));
//emit 1,2,3,4,5
//const source = of(1, 2, 3, 4, 5);
//allow values until value from source is greater than 4, then complete
//const example = source.pipe(takeWhile(val => val <= 4));
//output: 1,2,3,4
//const subscribe = example.subscribe(val => console.log(val));
