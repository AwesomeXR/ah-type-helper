// 这个文件只参与 ts complier，不导出

import { PickByEqualType, PickByType } from '.';

class Cat {
  walk() {}
}

// PickByEqualType
{
  // base type
  const _a: PickByEqualType<
    {
      name: string;
      count: number;
      isReadonly: boolean;
      isEnable: boolean;
    },
    boolean
  > = { isReadonly: true, isEnable: true };

  // class type
  const _b: PickByEqualType<{ name: string; cat: Cat }, Cat> = { cat: new Cat() };

  // keyof class type
  let _c: keyof PickByEqualType<{ name: string; cat: Cat; cat2: Cat }, Cat>;
  _c = 'cat';
  _c = 'cat2';
}

// PickByType
{
  // keyof class type
  let _c: keyof PickByType<{ name: string; cat: { id: 1 }; cat2: { id: 2 } }, { id: number }>;
  _c = 'cat';
  _c = 'cat2';
}
