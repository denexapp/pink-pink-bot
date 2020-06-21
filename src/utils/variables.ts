import { JsonDecoder } from 'ts.data.json'
import decode from './decode'

type Variables = {
  password: string
  channel: string
}
const variablesDecoder = JsonDecoder.object<Variables>({
  password: JsonDecoder.string,
  channel: JsonDecoder.string
}, 'Variables Decoder')

const values = process.env

const variables = decode(values, variablesDecoder)

export default variables