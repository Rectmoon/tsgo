require('./modules/t')

if (module.hot) {
  module.hot.accept(['./modules/t.js'], () => {
    require('./modules/t.js').default
  })
}
