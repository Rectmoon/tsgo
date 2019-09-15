const sy1 = Symbol()
console.log(sy1)

const sy2 = Symbol()
console.log(sy2)

const sy3 = Symbol('lisi')
const sy4 = Symbol('lisi')

const sy5 = Symbol(55)

console.log(sy5)

console.log(sy5.toString().slice(2))
console.log(Boolean(sy5))

const sy6 = Symbol('66')

const obj = {
  [sy6]: 'ok',
  name: '张三',
  age: 20
}
obj[sy6] = 'jjj'

console.log(sy6)
console.log(obj)

for (const k in obj) {
  console.log('k :', k)
}

console.log(Object.keys(obj))
console.log(Object.entries(obj))
console.log(Object.getOwnPropertyNames(obj))
console.log(JSON.stringify(obj))

console.log(Object.getOwnPropertySymbols(obj))
console.log(Reflect.ownKeys(obj))

let sy7 = Symbol.for('foo')
let sy8 = Symbol.for('foo')

console.log('sy7 === sy8 ?', sy7 === sy8)

/**
 * Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。
 * 它们的区别是，
 * 前者会被登记在全局环境中供搜索，后者不会;
 * Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
 * 比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，但是调用Symbol("cat")30 次，会返回 30 个不同的 Symbol值。
 *
 */

console.log(Symbol.for('bar') === Symbol.for('bar'))

const sy9 = Symbol('bar')
const sy10 = Symbol('bar')

console.log(Symbol('bar') === Symbol('bar'))
// console.log(sy9 === sy10)  error

let s11 = Symbol.for('foo')
console.log(s11)
console.log(Symbol.keyFor(s11))

let s12 = Symbol('jack')
console.log(Symbol.keyFor(s12))

// 注意： Symbol.for为 Symbol 值登记的名字，是全局环境的，可以在不同的 iframe 或 service worker 中取到同一个值。
// const iframe = document.createElement('iframe')
// iframe.src = String(window.location)
// document.body.appendChild(iframe)
// console.log(iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')) // true

class MyClass {
  [Symbol.hasInstance](foo: any) {
    return foo instanceof Array
  }
}
