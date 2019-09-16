console.log('generics>>>')

/**
 *  泛型可以支持不特定的数据类型， 要求传入的参数和返回的参数类型一致, 具体什么类型在调用的时候确定
 *
 *
 */

function getData<T>(value: T): T {
  return value
}

console.log(getData<number>(6))
console.log(getData<string>('555'))

const getArray = <T>(v: T, times: number = 5): T[] => {
  return new Array(times).fill(v)
}

console.log(getArray<number>(666, 3).map(v => v.toFixed()))
console.log(getArray<string>('222', 3).map(v => v.length))

type GenericIdentityFn = <T>(arg: T) => T

function identity<T>(arg: T): T {
  return arg
}

let myIdentity: GenericIdentityFn = identity

console.log(myIdentity<number>(123))

interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(args: T): T {
  console.log(args.length)
  return args
}

loggingIdentity('888')
loggingIdentity([1, 2, 3, 4, 5])
loggingIdentity({
  length: 69
})

const getProps = <T, U extends keyof T>(obj: T, propName: U) => {
  return obj[propName]
}

const o = {
  a: 1,
  b: 2
}

console.log(getProps(o, 'a'))
console.log(getProps(o, 'b'))
// console.log(getProps(o, 'c')) // error

class MinClass<T> {
  public list: T[] = []

  add(value: T) {
    this.list.push(value)
  }

  min(): T {
    let min = this.list[0]

    for (let i = 0; i < this.list.length; i++) {
      if (min > this.list[i]) {
        min = this.list[i]
      }
    }

    return min
  }
}

const min1 = new MinClass<number>()
min1.add(1)
min1.add(2)
min1.add(3)

console.log(min1.min())

const min2 = new MinClass<string>()
min2.add('a')
min2.add('b')
min2.add('c')

console.log(min2.min())
