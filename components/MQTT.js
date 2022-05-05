const mqtt = require('mqtt')
const host = 'io.adafruit.com'
const port = '1883'
const clientId = `mqtt_6969`
const connectUrl = `mqtt://${host}:${port}`

const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'GarryMS',
    password: 'aio_iAGU89txjZKR0y1tgtEJIxk5BF3f',
    reconnectPeriod: 1000,
  })

const topic = '/nodejs/mqtt'

client.on('connect', () => {
    console.log('Connected')
    client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`)
    })
})

client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString())
    })

client.on('connect', () => {
    client.publish(topic, '20', { qos: 0, retain: false }, (error) => {
        if (error) {
        console.error(error)
        }
    })
    })