const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  }
};

//  const findWaldo = function(names, found) {
  
//    let i=0;
//    let name = names[i];
   
    
//     // let name = names[i];
//      if (name === "Waldo") {
//        found(i);   // execute callback
//      }
   
//      names.forEach(findWaldo(names, found)) {
//       let name = names[i];
//       if (name === "Waldo") {
//         found(i); 
//      }

    function actionWhenFound(i) {

      console.log("Found Waldo at index " + i);
    }

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);