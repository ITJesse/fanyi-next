import { insertTags } from './insertTags'

const [cmd, argv] = process.argv.slice(2)

if (cmd === 'insertTags') {
  insertTags()
}
