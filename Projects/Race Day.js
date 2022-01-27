let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;
if (early === true && age > 18){
  raceNumber += 1000;
}
if (early && age > 18){
  console.log(`Your race number is ${raceNumber}, you will race at 9:30 am!`);
} else if (!early && age > 18){
  console.log(`Your race number is ${raceNumber}, you will race at 11:00 am!`);
} else if (age < 18){
  console.log(`Your race number is ${raceNumber}, you will race at 12:30 am!`);
} else {
  console.log('You need to see the registration desk!');
}