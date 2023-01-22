import { z } from 'zod'

const shinigamiSchema = z.object({
  name: z.string()
  .min(3, { message: 'The name must be more than three characters.' })
  .transform(name => name.toUpperCase()),
  zanpakuto: z.string(),
  bankai: z.string()
})

type Shinigami = z.infer<typeof shinigamiSchema>

function saveShinigami(shinigami: Shinigami) {
  const { name, zanpakuto, bankai } = shinigamiSchema.parse(shinigami);
  return { name, zanpakuto, bankai }
}

const response = saveShinigami({
  name: 'Ichigo Kurosaki',
  zanpakuto: 'Zangetsu',
  bankai: 'Tensa Zangetsu'
})

console.log({ saveShinigami: response })
