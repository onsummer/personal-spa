import styles from './index.less'
import { useEffect } from 'react'

export default (props: any) => {
  const { match } = props
  const { params } = match

  useEffect(() => {
    console.log(Date.now.toString())
    console.log(params)
  }, [])

  return <div className={styles.root}>
    <h1 className={styles.title}> Index Page </h1>
  </div>
}