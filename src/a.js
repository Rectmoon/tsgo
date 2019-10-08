// require('./modules/t')

// if (module.hot) {
//   module.hot.accept(['./modules/t.js'], () => {
//     require('./modules/t.js').default
//   })
// }
// import ajax from '@zhulingying/ajax'

const ajax = require('@zhulingying/ajax')
console.log(ajax)
// ajax()

if (process.env.NODE_ENV === 'development') {
  console.log('Welcome to development')
}
