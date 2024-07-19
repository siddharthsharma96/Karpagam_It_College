// // // console.log(fullName);
// // // var fullName = "Siddharth";
// // // console.log(fullName);

// // // printFullName();

// // // function printFullName() {
// // //   console.log("Siddharth", age);
// // //   var age = 27;
// // // }

// // // printFullName();
// // // a();

// // // var a = function () {
// // //   console.log("Function execution");
// // // };

// // // a();

// // var a = 10;
// // let b = 12;
// // const c = 12;
// // // c = 13;
// // console.log(a, b, c);

// // // function printFullName() {
// // //   var aa = 20;
// // // }
// // // // printFullName();

// // // printFullName();

// // function printFullName() {
// //   console.log("Siddharth");
// //   //   var age = 27;
// // }

// // printFullName();
// // // a();

// // var a = function () {
// //   console.log("Function execution");
// // };

// // a();

// // // hello();
// // var hello = () => {
// //   console.log("gddsgdgg");
// // };
// // hello();

// // const arr = [1, 2, 3, 4];
// // console.log(arr);
// // // arr = [1, 2, 3, 4, 5];
// // arr.push(9);
// // console.log(arr);

// // if ([] == []) {
// //   console.log("same");
// // } else {
// //   console.log("not same");
// // }

// function asyncCode() {
//   setTimeout(() => {
//     console.log("SetTimeoput");
//   }, 0);
// }

// asyncCode();
// console.log("sync part called");

// // const a = [1, 2, 3, 4, 5];

// // for (let i = 0; i < a.length; i++) {
// //   console.log(a[i]);
// // }

// // a.map((element) => {
// //   console.log(element);
// // });

// // // var hello = (parameter) => {
// // //   console.log("gddsgdgg", parameter);
// // // };
// // hello(argument);

// const render = new Promise((resolve, reject) => {
//   var a = true;
//   if (a) {
//     resolve("fulfilled");
//   } else {
//     reject("Promise rejected");
//   }
// });

// // how to use promise using .then
// render
//   .then((resp) => {
//     console.log(resp);
//   })
//   .catch((err) => console.log(err));

// // how to use promise using async
// const ab = async () => {
//   try {
//     const res = await render();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };

const fetchData = async () => {
  const resp = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );
  console.log(resp);
  const data = await resp.json();
  console.log(data);
};
fetchData();

//
function sum(a, b, c) {
  let sumofNo = a + b + c;
  console.log(sumofNo);
}
sum(1, 2, 3);
const curryingSum = (a) => {
  return (b) => {
    return (c) => {
      let sumofNo = a + b + c;
      console.log(sumofNo);
    };
  };
};

const add = curryingSum(1);
const add2 = add(2);
add2(4);

curryingSum(1)(2)(3);
