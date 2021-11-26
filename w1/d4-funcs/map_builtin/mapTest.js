const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

var lengths =  lighthouses.map(function(item) {
  return item.length
});

console.log(lengths);