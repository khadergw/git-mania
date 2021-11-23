function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
getRandomIntInclusive(1,6) 
const y=3;
for(let i=0; i< y; i++) console.log(getRandomIntInclusive(min,max).join())
//const results = ['Fire', 'Air', 'Water'];

//console.log(results.join());