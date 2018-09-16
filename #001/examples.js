// simple example

const secretKeeper = (secret) => {
  return  () => `your secret is ${secret}`
}

const mySecret= secretKeeper('28')

console.log(mySecret()) //will log 'your secret is 28'

const employee = ({name, payout, raiseFactor}) => {
  const startingSalary = payout
  let workedYears = 0
  return ({isRaiseGiven}) => {
    if (isRaiseGiven) {
      payout *= raiseFactor
    }
    return `Employee name: ${name}, current salary: ${payout.toFixed(2)}k$, starting salary: ${startingSalary.toFixed(2)}k$  years worked: ${++workedYears},  raiseGivenThisYear: ${isRaiseGiven}`
  }
}

const Adam = employee({
  name: 'Adam',
  payout: 80,
  raiseFactor: 1.1
})
const Bob = employee({
  name: 'Bob',
  payout: 100,
  raiseFactor: 1.03
}) 


console.log(Adam({isRaiseGiven: false}))
console.log(Bob({isRaiseGiven: true}))

console.log(Bob({isRaiseGiven: true}))
console.log(Adam({isRaiseGiven: true}))

console.log(Adam({isRaiseGiven: false}))
console.log(Bob({isRaiseGiven: false}))