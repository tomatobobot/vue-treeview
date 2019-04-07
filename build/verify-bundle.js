const fs = require('fs')
const path = require('path')
const shallowEqual = require('shallow-equal/arrays')
const config = require('../config')

const expectedDistFiles = [
  'vue-treeview.js',
  'vue-treeview.js.map',
  'vue-treeview.css',
  'vue-treeview.css.map',
  'vue-treeview.min.js',
  'vue-treeview.min.css',
]
const actualFiles = fs.readdirSync(config.bundle.assetsRoot)
if (!shallowEqual(expectedDistFiles.sort(), actualFiles.sort())) {
  throw new Error('Built files are not as expected.')
}

function readFile(fileName) {
  return fs.readFileSync(path.join(config.bundle.assetsRoot, fileName))
}

function shouldReplaceEnvOrNot(expected, fileName) {
  const source = readFile(fileName)
  const actual = !source.includes('process.env.NODE_ENV')
  if (expected !== actual) {
    throw new Error('The bundle file was not built correctly.')
  }
}
shouldReplaceEnvOrNot(false, 'vue-treeview.js')
shouldReplaceEnvOrNot(true, 'vue-treeview.min.js')

function shouldReplaceCssEasings(fileName) {
  const source = readFile(fileName)
  return source.includes('cubic-bezier(')
}
shouldReplaceCssEasings('vue-treeview.css')
shouldReplaceCssEasings('vue-treeview.min.css')
