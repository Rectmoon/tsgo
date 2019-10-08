const fs = require('fs')

const ignoreRegex = /node_modules|dist|\.git/
const onlyFolder = false
const characters = {
  border: '|',
  contain: '├',
  line: '─',
  last: '└'
}

function dirToJson(p) {
  const stats = fs.lstatSync(p)
  const dirName = p.replace(/.*\/(?!$)/g, '')
  if (!stats.isDirectory()) return dirName
  const result = {}
  const a = fs
    .readdirSync(p)
    .filter(v => !ignoreRegex.test(v))
    .filter(v => (onlyFolder ? fs.lstatSync(`${p}/${v}`).isDirectory() : true))
    .map(v => dirToJson(`${p}/${v}`))
  result[dirName] = sortDir(a)
  return result
}

function sortDir(arr) {
  let i = arr.length - 1
  while (i >= 0) {
    if (typeof arr[i] === 'object') {
      const obj = arr.splice(i, 1)
      arr.push(obj[0])
    }
    i--
  }
  return arr
}

function drawDirTree(data, placeholder) {
  let outputString = ''
  const { border, contain, line, last } = characters
  for (const i in data) {
    if (typeof data[i] === 'string') {
      outputString += '\n' + placeholder + data[i]
    } else if (Array.isArray(data[i])) {
      outputString += '\n' + placeholder + i
      placeholder = placeholder.replace(new RegExp(`${contain}`, 'g'), border).replace(new RegExp(`${line}`, 'g'), ' ')
      placeholder = placeholder + Array(Math.ceil(i.length / 2)).join(' ') + contain + line
      data[i].forEach((val, index, arr) => {
        let pl = placeholder
        if (index === arr.length - 1) pl = placeholder.replace(new RegExp(`${contain}${line}$`, 'g'), last)
        if (typeof val === 'string') outputString += '\n' + pl + val
        else outputString += drawDirTree(val, placeholder)
      })
    }
    return outputString
  }
}

module.exports = {
  dirToJson,
  drawDirTree
}
