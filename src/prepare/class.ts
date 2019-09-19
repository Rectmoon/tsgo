class Star {
  public readonly name: string
  private x: string = '1'

  constructor(name: string, public age: number) {
    this.name = name
  }
}

const star1 = new Star('aa', 22)

console.log(star1.name)
console.log(star1.age)

class Person {
  constructor(public name: string, protected age: number) {}

  run(): string {
    return `${this.name}在运动`
  }

  sayHi() {
    console.log(`${this.name} /${this.age}`)
  }
}

const person1 = new Person('张三', 20)
person1.sayHi()
console.log(person1.run())
console.log(person1.name)
// console.log(person1.age) // error

class Web extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }

  work() {
    console.log(`${this.name}在工作`)
  }
}

const web1 = new Web('李四', 22)
console.log(web1.run())
web1.work()

/**
 *  public 公有  在类、子类、外部都可以访问
 *  protected 保护类型 在类、子类中可以访问，外部不行
 *  private 私有 只在类里可以访问
 */

class Php {
  static sex = '男'
  public static print() {
    console.log('php是最好的语言')
    // alert(this.run) // error
    // alert(this.age)  // error
    //  静态方法 无法直接访问类的属性和方法, 可以访问静态属性和方法
    console.log(Php.sex) // ok
  }

  public name: string
  public age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  run() {
    console.log(`${this.name} 在写php`)
  }
}

Php.print()
console.log(Php.sex)

/**
 *  抽象类： 提供其他类继承的基类, 不能被直接实例化 , 使用abstract关键字定义,
 *  并且抽象方法不包含具体实现, 必须在派生类中实现。
 */

abstract class Animal {
  constructor(public name: string) {}

  abstract eat(): any
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }

  eat() {
    console.log(`${this.name}在吃肉`)
  }
}

const dog1 = new Dog('小黑')
dog1.eat()

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }

  eat() {
    console.log(`${this.name}在吃鱼`)
  }
}

const cat1 = new Cat('汤姆')
cat1.eat()
