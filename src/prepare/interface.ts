console.log('interfalce >>>')

interface LabeledValue {
  label: string
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label)
}

let myObj = { label: 'Size 10 Object', size: 10 }

printLabel(myObj)

interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  const newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  console.log(newSquare)
  return newSquare
}

createSquare({ color: '#f00' })

let k = { clor: '#333', size: 1, color: '#666' }
createSquare(k)

interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 10 }

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a

// ro[0] = 11  // error
// ro.push(5) // error
// ro.length = 1000 // error
// let a1 = ro // error

type AddFn = (n1: number, n2: number) => number
const add1: AddFn = (n1, n2) => n1 * n2

interface RoleDic {
  [id: number]: string
}

const role1: RoleDic = {
  1: 'super'
}

type SearchFunc = (source: string, subString: string) => boolean

interface NumberDictionary {
  [index: string]: number | string
  length: number // ok, length is a number
  name: string
}

interface ReadonlyStringArray {
  readonly [index: number]: string
}
let myArray: ReadonlyStringArray = ['Alice', 'Bob']
// myArray[2] = 'Mallory' // error!

interface Counter {
  (): void
  count: number
}

const getCounter = (): Counter => {
  const c = () => {
    c.count++
    console.log('c.count :', c.count)
  }
  c.count = 0
  return c
}

let counter: Counter = getCounter()

counter()
counter()
counter()

interface Counter1 {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter1(): Counter1 {
  const counter1 = function(start: number) {} as Counter1
  counter1.interval = 1
  counter1.reset = function() {}

  return counter1
}

let counter1 = getCounter1()
counter1(10)
counter1.reset()
counter1.interval = 5.0
