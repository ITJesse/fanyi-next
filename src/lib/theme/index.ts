import { extendTheme, theme as baseTheme } from '@chakra-ui/react'

import styles from './styles'

const theme = extendTheme(
  { styles },
  {
    ...baseTheme,
    components: {
      ...baseTheme.components,
    },
  },
)

export type Theme = typeof theme
export default theme
