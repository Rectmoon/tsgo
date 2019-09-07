const requireAll = context => context.keys().map(context)

const modules = require.context('./modules', false, /\.js$/)

requireAll(modules)
