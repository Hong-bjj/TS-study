// //Parial

// interface Address {
//   email: string;
//   address: string;
// }

// const me: Partial<Address> = {};
// const you: Partial<Address> = { email: "dannyday@naver.com" };
// const all: Address = { email: "dannyday@naver.com", address: "John" };

// //Pick

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo: TodoPreview = {
//   title: "Clean Room",
//   completed: false,
// };

//omit 생략하다

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt: number;
// }

// type TodoPreview = Omit<Todo, "description">;

// const todo: TodoPreview = {
//   title: "Clean Room",
//   completed: false,
//   createdAt: 12345678,
// };

//Required

type User = {
  firstName: string;
  lastName?: string;
};

let firsUser: User = {
  firstName: "First Name",
};

let secondUser: Required<User> = {
  firstName: "Second Name",
};

//Record
interface CatInfo {
  age: number;
  bread: string;
}

type CatName = "1" | "2" | "3";

const cats: Record<CatName, CatInfo> = {
  1: { age: 10, bread: "persian" },
  2: { age: 11, bread: "maine coon" },
  3: { age: 4, bread: "british shorthair" },
};

//returnType

type T0 = ReturnType<() => string>;
type T1 = ReturnType<(s: string) => void>;

function fn(str: string) {
  return str;
}

const a: ReturnType<typeof fn> = "hello";
const b: ReturnType<typeof fn> = true;
