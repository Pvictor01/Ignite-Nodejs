//const http = require('http')
//CommonJS => require -> obsoleto

//ESModules => import/export
import http from 'node:http' //node: por ser módulo interno

const server = http.createServer((req, res) => {
  return res.end('Hello World')
})

server.listen(3333)