// require('./modules/t')

// if (module.hot) {
//   module.hot.accept(['./modules/t.js'], () => {
//     require('./modules/t.js').default
//   })
// }

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  console.log('Welcome to development')
}
