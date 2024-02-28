//call signature

// interface getLikeNumber {
//   (like: number): number;
// }

// interface post {
//   id: number;
//   title: string;
//   getLikeNumber: getLikeNumber;
// }

// const post1: post = {
//   id: 1,
//   title: "post 1",
//   getLikeNumber(like: number) {
//     return like;
//   },
// };

// post1.getLikeNumber(1);

//----------------------------------------------------------------
//index signature

interface Post {
  [key: string]: unknown;
  id: number;
  title: string;
}

const post1: Post = {
  id: 1,
  title: "post1",
};

post1["description"] = "description 1";
post1["pages"] = 300;

interface Name {
  [item: number]: string;
}

const userNames = ["John", "Kim", "Joe"];
userNames[0] === "John";
