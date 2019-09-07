const requireAll = (context: any) => context.keys().map(context)
const modules = require.context('./prepare', false, /\.ts$/)
requireAll(modules)

console.log('main>>>')
document.title = 'hello tsgo'

const add = (pre: number, next: number) => pre + next

console.log(add(10, 20))

console.log([1, 2, 3].includes(1))

function sleep(t: number) {
  return new Promise(resolve => setTimeout(resolve, t * 1000))
}

async function main() {
  await sleep(3)
  console.log(269)
}

main()
