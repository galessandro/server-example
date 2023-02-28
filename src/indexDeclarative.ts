import ServerBootstrap, { Bootstrap } from './bootstrap/server.bootstrap'
import Application from './app'

const serverBootstrap: Bootstrap = new ServerBootstrap(Application.requestListener)

//forma1
const start = async () => {
   try {
      const resultServer = await serverBootstrap.initialize()
      console.log(resultServer)
   } catch (error) {
      console.log(error)
   }
}

start()

//forma2
// serverBootstrap
//    .initialize()
//    .then((message: string | Error) => console.log(message))
//    .catch((error) => console.log(error))

//forma3 - funcion autoinvocada
// ()(async () => {
//    try {
//       const resultServer = await serverBootstrap.initialize()
//       console.log(resultServer)
//    } catch(error){
//       console.log(error);
//    }
// })
