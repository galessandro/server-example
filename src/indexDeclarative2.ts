import http from 'http'
import Route, { getRoute, exceptionNotFound } from './routes'

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
   const route: Route | undefined = getRoute(request.url as string)

   if (route) {
      route.execute(request, response)
   } else {
      exceptionNotFound(request, response)
   }
})

server.listen(3000, () => console.log('listening on port: 3000'))
