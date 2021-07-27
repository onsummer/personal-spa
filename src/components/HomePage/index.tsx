import {} from 'react'
import { useHistory } from 'umi'

import styles from './index.less'

export default () => {

  const h = useHistory()

  return <div className={styles.homeRoot}>
    <h1> Welcome to my page. </h1>
    <h2 onClick={() => {
      // h.replace('/map2d')
      h.push('/map2d')
    }}>GOTO: Map 2d</h2>
  </div>
}