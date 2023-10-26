//const http = require('http')
//CommonJS => require -> obsoleto

//ESModules => import/export
import http, { get } from 'node:http' //node: por ser módulo interno
//GET => Buscar um recurso no back-end
//POST => Criar um recurso no back-end
//PUT => Atualizar um recurso no back-end
//PATCH => Atualizar uma informação específica de um recurso no back-end
//DELETE => Deletar um recurso no back-end

const server = http.createServer(function(req, res) {
  const { method, url } = req  //const method = req.method

  if(method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários')
  }
  
  if(method === 'POST' && url === '/users') {
    return res.end('Criação de usuários')
  }

  return res.end('Hello World')
})

server.listen(3333)