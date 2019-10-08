const { dirToJson, drawDirTree } = require('./tree')

class TreePlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('TreePlugin', (compilation, callback) => {
      const result = drawDirTree(dirToJson('../tsgo'), '')

      compilation.assets['tree.txt'] = {
        source: function() {
          return result
        },
        size: function() {
          return result.length
        }
      }

      callback()
    })
  }
}

module.exports = TreePlugin
