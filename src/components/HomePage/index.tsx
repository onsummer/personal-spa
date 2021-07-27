import { } from 'react'
import { useHistory } from 'umi'

import styles from './index.less'

export default () => {

  const h = useHistory()

  return <div className={styles.homeRoot}>
    <div className={styles.homeContent}>
      <h1> 欢迎光临 {":)"} </h1>
      <h2 onClick={() => {
        h.push('/map2d')
      }}> 应用: Map2D </h2>
    </div>
    <a href="https://beian.miit.gov.cn/" rel="nofollow noopener">粤ICP备 2021103683 号 - 1</a>
  </div>
}