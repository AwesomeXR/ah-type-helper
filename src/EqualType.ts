export type EqualType<T, R> = [T] extends [R] ? ([R] extends [T] ? true : false) : false;
