import { EqualType } from './EqualType';

export type PickByEqualType<T, U> = {
  [P in keyof T as EqualType<T[P], U> extends true ? P : never]: T[P];
};
