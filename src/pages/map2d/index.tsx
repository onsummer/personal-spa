import { useEffect } from 'react'
import styles from './index.less'
import OlMap from '@/components/OlMap'

export default (props: any) => {
  const { match } = props
  const { params } = match

  useEffect(() => {
    console.log(Date.now.toString())
    console.log(params)
  }, [])

  return <div className={styles.olRoute}>
    <OlMap></OlMap>
  </div>
}