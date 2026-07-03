// A function will always remember its lexical scope
// A function bundled with lexical scope is called closures

// function counter() {
//   let count = 0;

//   function enter() {
//     count++;
//     console.log(count);
//   }

//   function exit() {
//     count--;
//     console.log(count);
//   }

//   const obj = {
//     enter1: enter,
//     exit1: exit,
//   };
//   return obj;
// }

function counter() {
  let count = 0;

  return {
    enter: function () {
      count++;
      console.log(count);
    },
    exit: function () {
      count--;
      console.log(count);
    },
  };
}

const obj = counter();

obj.enter();
obj.enter();
obj.exit();
obj.enter();
count = 60;
obj.enter();
obj.exit();
// Destrucing

const { enter, exit } = counter();

enter();
enter();
exit();
enter();
count = 60;
enter();
exit();
