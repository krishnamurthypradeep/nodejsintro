import ReadFilePublisher from "./readFilePubSub";
const emitter = new ReadFilePublisher()


emitter.on('data',data => console.log(data.toString()))
.on('error',console.error)
.on('completed',console.log)

console.log('Outside Readfile')

emitter.readFile('data')
