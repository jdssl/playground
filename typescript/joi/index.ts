import * as Joi from '@hapi/joi'
import 'joi-extract-type'

const shinigamiSchema = Joi.object({
  name: Joi.string()
  .min(3)
  .required(),
  zanpakuto: Joi.string().required(),
  bankai: Joi.string().required()
})

type Shinigami = Joi.extractType<typeof shinigamiSchema>

function saveShinigami(shinigami: Shinigami): Shinigami {
  const { error, value } = shinigamiSchema.validate(shinigami);
  if (error) throw new Error(`Validate Error: ${error}`)

  const { name, zanpakuto, bankai } = value

  return { name, zanpakuto, bankai }
}

// name: 'Ichigo Kurosaki',
const response = saveShinigami({
  name: 'I',
  zanpakuto: 'Zangetsu',
  bankai: 'Tensa Zangetsu'
})

// Throw error!
console.log({ saveShinigami: response })
