const fs = require('fs')
const path = require('path')

function getFilePath(filename) {
  return path.join(__dirname, '..', 'data', filename)
}

function readJsonFile(filename, fallback = []) {
  const filePath = getFilePath(filename)
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(fallback, null, 2))
      return fallback
    }
    const raw = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(raw)
  } catch (err) {
    console.error(`Error reading ${filename}:`, err)
    return fallback
  }
}

function writeJsonFile(filename, data) {
  const filePath = getFilePath(filename)
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

module.exports = { readJsonFile, writeJsonFile }
