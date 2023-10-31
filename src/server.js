//const http = require('http')
//CommonJS => require -> obsoleto

//ESModules => import/export
import http, { get } from 'node:http' //node: por ser módulo interno
//GET => Buscar um recurso no back-end
//POST => Criar um recurso no back-end
//PUT => Atualizar um recurso no back-end
//PATCH => Atualizar uma informação específica de um recurso no back-end
//DELETE => Deletar um recurso no back-end

//Statefull (info salva na memoria) - Stateless (N salva em memoria - só em databate etc, é o ideal)

//JSON (javascript object notation - transitar diferentes tipos de dados em strings)

//Cabeçalhos (req/res) => Metadados

const users = []

const server = http.createServer(function(req, res) {
  const { method, url } = req  //const method = req.method

  if(method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-type', 'application/json')//setar no cabeçalho o tipo de dado especifico
    .end(JSON.stringify(users))
  }
  
  if(method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
    })

    return res.end('Criação de usuários')
  }

  return res.end('Hello World')
})

server.listen(3333)