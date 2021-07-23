/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

// Create your Objects here.

function Traveler(name){
    this.name = name,
    this.food = 1,
    this.isHealthy = true
}

function Wagon(number){
    this.capacity = number
    this.passengers = []
}

Traveler.prototype.hunt = function(){
    this.food += 2
}
const george = new Traveler("George")
george.hunt()
console.assert(george.food === 3, {
    test: "Food should increase by and interval of 2",
    expected: 3,
    result: george.food
})
// Prototype.eat()
Traveler.prototype.eat = function(){
    this.food--
    if(this.food === 0){
        this.isHealthy = false
    }
}
george.eat()
console.assert(george.food === 2,{
    test:"Food should decrease by 1",
    expected: 2,
    result: george.food
})
// Prototype.getAvailableSeatCount()
const pineBox = new Wagon(3)
Wagon.prototype.getAvailableSeatCount = function(){
   let seatCount =  this.capacity - this.passengers.length
   return seatCount
}
console.assert(pineBox.getAvailableSeatCount() === 3,{
    test: "seatCount is equal to 3",
    expected: 3,
    result:pineBox.getAvailableSeatCount()
})

// Prototype.join(traveler)
Wagon.prototype.join = function(traveler){
    if(this.capacity <= this.passengers.length){
        console.log(`Wagon is full. ${traveler.name} is unable to join.`)
        return
    } else {
        this.passengers.push(traveler)
        return
    }
}
pineBox.join(george)
console.assert(pineBox.passengers.length === 1,{
    test: "Add Traveler to pinebox",
    expected: 1,
    result:pineBox.passengers.length
})

// Prototype.shouldQuarantine
Wagon.prototype.shouldQuarantine = function(){
    for(let i = 0; i < this.passengers.length;i++){
        const passenger = this.passengers[i]
        if(passenger.isHealthy === false) {
            console.log(`${passenger.name} is sick. They need to Quarantine.`)
            return true
        } else if (
            passenger.isHealthy === true){
            console.log(`${passenger.name} is healthy.`)
        }
    }
}

george.eat()
george.eat()

console.assert(pineBox.shouldQuarantine() === true,{
    test:"Returns that one traveler is unhealthy",
    expected: true,
    result:pineBox.shouldQuarantine()
})

// Prototype.totalFood()

Wagon.prototype.totalFood = function(){
    let foodSum = 0
    for (let i = 0; i < this.passengers.length;i++){
        passenger = this.passengers[i]
        if (passenger.food >= 0){
            foodSum += passenger.food
        } 
    }
    console.log(`The wagon has this much ${foodSum} food total.`)
    return foodSum
}

console.assert(pineBox.totalFood()=== 0,{
    test:"Total All food in the wagon",
    expected: 0,
    result:pineBox.totalFood()
})
