console.log('func >>>')

let addFunc: (x: number, y: number) => number

addFunc = (a: number, b: number): number => a + b
addFunc = (a: number, b: number) => a + b

type Add = (x: number, y: number) => number

let addFunc1: Add
addFunc1 = (x, y) => x * y

type Minus = (arg1: number, arg2: number, arg3?: number) => number

let m1: Minus = (x, y) => x + y
let m2: Minus = (x, y, z) => x + y + (z ? z : 0)

console.log(m1(1, 2))
console.log(m2(3, 4, 5))

let addFunc3 = (x: number, y = 6) => x + y
console.log(addFunc3(1))
console.log(addFunc3(1, 3))

function buildName(firstName: string, lastName = 'Smith') {
  return firstName + ' ' + lastName
}

let result1 = buildName('Bob')
console.log(result1)

let result2 = buildName('Bob', undefined)
console.log(result2)

// let result3 = buildName('Bob', undefined, 'kk') // error

let result4 = buildName('Bob', 'Adams')
console.log(result4)

function buildName1(firstName = 'Will', lastName: string) {
  return firstName + ' ' + lastName
}

// let result5 = buildName1('Bob')  // error, too few parameters

// let result6 = buildName1('Bob', 'Adams', 'Sr.')  // error, too many parameters

let result7 = buildName1('Bob', 'Adams')
console.log(result7)

function buildName2(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join('~')
}

console.log(buildName2('j', 'k', 'l'))

function buildName3(this: void) {
  console.log(this)
}
buildName3()

interface Card {
  suit: string
  card: number
}

interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker(this: Deck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52)
      const pickedSuit = Math.floor(pickedCard / 13)

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
    }
  }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)

interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void
}
