/*
 * @Author: Rectmoon
 * @Date: 2019-09-08 04:24:43
 * @Last Modified by: Rectmoon
 * @Last Modified time: 2019-09-08 06:04:39
 */

console.log('boolean>>>')

let flag: boolean = true

console.log(flag)

// number
console.log('number>>>')
let n1: number = 123

console.log(n1)

let n2: number = 0b1111011

console.log(n2)

let n3: number = 0o173

console.log(n3)

let n4: number = 0x7b

console.log(n4)

// string
console.log('string>>>')

let s1: string = 'abc'
console.log(`我是${s1}`)

// array
console.log('array>>>')

let a1: number[] = [1, 2, 3]
console.log(a1)

let a2: Array<number> = [4, 5, 6]
console.log(a2)

let a3: Array<number | string> = [7, '8', 9]
console.log(a3)

let a4: (number | string)[] = [7, '8', '9']
console.log(a4)

// tuple
/**
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 *
 */
console.log('tuple>>>')
let t1: [string, number, boolean] = ['1', 2, true]
console.log(t1)
// Accessing an element outside the set of known indices fails with an error
// t1[3] = true // => error

// enum
console.log('enum>>>')

enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER
}

console.log(Roles)
console.log(Roles.SUPER_ADMIN)

enum Days {
  SUNDAY = 7,
  MONDAY = 1,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
}

console.log(Days)

// any
console.log('any>>>')
let any1: any = 'ddd'
let any2: any = true
console.log(any1)
console.log(any2)

// void
console.log('void>>>')

const foo = (text: string) => {
  console.log(text)
}

foo('2')
console.log(foo('1'))

let v1: void
v1 = undefined
console.log(v1)

// null & undefined
console.log('null & undefined>>>')
let u: undefined = undefined
let n: null = null

console.log(u)
console.log(n)

// never
const errorFn = (message: string): never => {
  throw new Error(message)
}

// errorFn('嘿嘿嘿')

const infiniteFn = (): never => {
  while (true) {}
}

// object
console.log('object>>>')
let o1: object = {}
console.log(o1)

// type assertions
console.log('type assertions>>>')

let someValue = 'this is a string'
console.log((<string>someValue).length)
console.log((someValue as string).length)
