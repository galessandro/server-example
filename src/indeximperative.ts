import http from 'http'

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
   if (request.url === '/user/description') {
      response.writeHead(200, { 'content-type': 'text-plain' })
      response.write('User: German Granados')
      response.end()
   } else if (request.url === '/user/list') {
      response.writeHead(200, { 'content-type': 'application/json' })
      response.write(
         JSON.stringify([
            { username: 'ggranados', active: true },
            { username: 'mgranados', active: true },
         ]),
      )
      response.end()
   } else if (request.url === '/user/detail') {
      response.writeHead(200, { 'content-type': 'application/json' })
      response.write(JSON.stringify({ username: 'ggranados', active: false }))
      response.end()
   } else {
      response.writeHead(400, { 'content-type': 'text-plain' })
      response.end('Path not found')
   }
})

server.listen(3000, () => console.log('listening on port 3000'))
