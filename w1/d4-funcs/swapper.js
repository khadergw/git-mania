
// fetch the value stored in key1 in object1, and then store that value in key2 of object2.
// take the original value stored in key2 of object2, and store that in key1 of object1.
// not need to return anything.

const swapper = function(key1, object1, key2, object2) {
  console.log('Swap!');
  
  let first = object1[key1];
  console.log("first: ", first);
  let second = object2[key2];
  console.log("second: ", second);
  
  
  object2[key2] = first
  object1[key1] = second
  
  console.log('object1: ', object1);
  console.log('object2: ', object2);
};




swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });


// Swap!
// object1: { a: 5 , b: 2, c: 3 }
// object2: { a: 4, b: 3, c: 1 }
// Swap!
// object1: { a: 8 , b: 12, c: 6 }
// object2: { a: 5, b: 1, c: 2, d: 7}
// Swap!
// object1: { a: 1 , b: 3, c: 5, d: 7 }
// object2: { a: 4, b: 0, c: 3 }

// paired with Yaser Ibrahim//
