const ansi = require('ansi')
const cursor = ansi(process.stdout)
cursor.goto(10, 5).write('Five down, ten over')
cursor.white().bg.red().write('Hello to Node.js').reset().bg.reset().write('\n')