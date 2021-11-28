import fs from 'fs'
import path from 'path'
import YAML from 'yaml'

import { adminClient, fetch } from '@/lib/gql'

const yamlPath = path.resolve(__dirname, '../data/tags.yaml')

export const insertTags = async () => {
  const str = fs.readFileSync(yamlPath).toString()
  const data = YAML.parse(str)
  const namespaces = Object.keys(data)
    .filter((e) => e.startsWith('@namespace'))
    .reduce((res, key) => {
      res.push(data[key])
      return res
    }, [] as any)

  const { insert_namespace } = await fetch(adminClient, 'AddNamespace', {
    objects: namespaces.map((e: any) => ({
      name: e.name,
      explanation: e.content[0],
    })),
  })

  const tags = Object.keys(data)
    .filter((e) => !e.startsWith('@namespace') && !e.startsWith('@class'))
    .reduce((res, key) => {
      for (const namespace of data[key].namespaces) {
        const item = {
          name: key,
          namespace_id: insert_namespace?.returning.find(
            (e) => e.name === namespace,
          )?.id,
          ...data[key],
        }
        delete item.namespaces
        res.push(item)
      }
      return res
    }, [] as any)

  try {
    await fetch(adminClient, 'AddTag', {
      objects: tags,
    })
  } catch (err) {
    console.log(err)
  }
}
