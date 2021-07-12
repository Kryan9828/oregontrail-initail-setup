/**
 * TESTS -----------------------------------------------------------
 * Do not modify these, but use them to verify that your code works.
 */

// Create a wagon that can hold 2 people
let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let maude = new Traveler("Maude");


let result = wagon.getAvailableSeatCount();
console.assert(result === 2, {
  test: "There should be two available seats left in the empty wagon",
  expected: 2,
  result: result
});

wagon.join(henrietta);
result = wagon.getAvailableSeatCount();
console.assert(result === 1, {
  test: "There should be one available seat left after henrietta joins",
  expected: 1,
  result: result
});

wagon.join(juan);
wagon.join(maude); // There isn't room for her!

result = wagon.getAvailableSeatCount();
console.assert(result === 0, {
  test: "There should be no available seats left",
  expected: 0,
  result: result
});

henrietta.hunt(); // get more food
juan.eat();
juan.eat(); // juan is now hungry (sick)

result = wagon.shouldQuarantine();
console.assert(result === true, {
  test: "The wagon should quarantine because juan is sick",
  expected: true,
  result: result
});

result = wagon.totalFood();
console.assert(result === 3, {
  test: "The wagon should have 3 food",
  expected: 3,
  result: result
});
