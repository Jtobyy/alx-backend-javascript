type USD = Brand<number, 'USD'>
type EUR = Brand<number, 'EUR'>

const usd = 10 as USD
const eur = 10 as EUR
function euroToUsd(euro: EUR): USD {
  return (euro * 1.18 as USD)
}
console.log(`USD: ${euroToUsd(eur)}`)