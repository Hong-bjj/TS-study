//type SomeType = T extendsU ? X:Y

// type SomeType = number;
// type ConditionalType = SomeType extends string ? string : null;

// function fn1<T>(value: T) {
//   const fn2 = (arg: T extends boolean ? "a" : "b") => {};
//   return fn2;
// }

// const result = fn1(true);

// type StringOrNot<T> = T extends string ? string : never;

// type AUnion = string | boolean | never;

// const A: StringOrNot<string> = "string";

// type ResultType = Exclude<"a" | "b" | "c", "a" | "b">;

// type AType<T> = T extends string | number ? T : never;

// type AType<T> = (() => T) extends () => string | number ? T : never;

// type MyResult = AType<string | number | boolean>;

type AType<T> = [T] extends [string | number] ? T : never;

type MyResult = AType<string | number | boolean>;
