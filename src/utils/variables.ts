import { JsonDecoder } from 'ts.data.json'
import decode from './decode'

type Variables = {
  username: string
  token: string
  channel: string
}
const variablesDecoder = JsonDecoder.object<Variables>({
  username: JsonDecoder.string,
  token: JsonDecoder.string,
  channel: JsonDecoder.string
}, 'Variables Decoder')

const values = process.env

const variables = decode(values, variablesDecoder)

export default variables