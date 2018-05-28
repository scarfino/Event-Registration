/*
@scarfino 2018

This code checks registration criteria (age, pre-registration) and assigns them a number and a race time.
*/

let registeredEarly = false //did they pre-register?
let raceNumber = Math.floor(Math.random() * 1000) //assign a racer number
let runnersAge = 18 //age of the runner?
if (registeredEarly === false) {
  raceNumber += 1000; //racer number magic

}
if (runnersAge = 18 && registeredEarly === true) {
  console.log('Please see the registration desk.')
} else if (runnersAge = 18 && registeredEarly === false) {
  console.log('Please see the registration desk.')
} else if (registeredEarly === true && runnersAge <= 18) {
  console.log('Your race number is ' + raceNumber + ' and your race is at 12:30pm')
} else if (registeredEarly === false && runnersAge <= 18) {
  console.log('Your race number is ' + raceNumber + ' and your race is at 12:30pm')
} else if (runnersAge > 18 && registeredEarly === true) {
  console.log('Your race number is ' + raceNumber + ' and your race is at 9:30am')
} else if (runnersAge > 18 && registeredEarly === false) {
  console.log('Your race number is ' + raceNumber + ' and your race is at 11:00am')

} else {
  console.log('If you are unsure of your registration status, please see the registration desk')
}
