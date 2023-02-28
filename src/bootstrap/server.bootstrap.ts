import http from 'http'
import { IncomingMessage, ServerResponse } from 'http'

export abstract class Bootstrap {
   abstract initialize(): Promise<string | Error>
}

export default class extends Bootstrap {
   constructor(private readonly requestListener: (req: IncomingMessage, res: ServerResponse) => void) {
      super()
   }

   initialize(): Promise<string | Error> {
      return new Promise<string | Error>((resolve, reject) => {
         const server = http.createServer(this.requestListener)
         server
            .listen(3000)
            .on('listening', () => {
               resolve('Promise resolved successfully')
               console.log('listening on port: 3000')
            })
            .on('error', error => {
               reject(error)
               console.log(error)
            })
      })
   }
}
