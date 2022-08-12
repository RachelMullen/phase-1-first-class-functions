// The receivesAFunction function should:

// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function


function receivesAFunction(callback) {
    callback();
  }
  function hello(){
    console.log("Hello!")
  }
  console.log(receivesAFunction(hello));

// function receivesAFunction(callback) {
//     console.log(callback);
//   }

// function rachel() {
//     return 'Hello!';
// }

// receivesAFunction(rachel)

// The returnsANamedFunction function should:
// take no arguments
// return a named function

function returnsANamedFunction() {
    return function nameFn() {
        console.log("this is a named function");
    }
}

// function returnsANamedFunction() {
//     return function namedFn() {
//       console.log("this is a named function");
//     };
//   }

// // // The returnsAnAnonymousFunction function should:
// // // take no arguments
// // // return an anonymous function

function returnsAnAnonymousFunction() {
    return () => {
        console.log("friday");
    }
}

// function returnsAnAnonymousFunction() {
//     return () => console.log("this is an anonymous function");
//   }
//   Footer
  
// exerciseRoutine(function () {
//     console.log("Stretch! Work that core!");
//   });
