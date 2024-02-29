type Properties = "propA" | "propB";

type MyNewType = MyMappedType<{ a: "a"; b: "b" }>;

type MyMappedType<T> = {
  readonly [P in keyof T]: T[P];
};
