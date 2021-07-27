import HomePage from '@/components/HomePage' 

import styles from './index.less'

export default (props: any) => {
  // const { match } = props
  // const { params } = match

  return <div className={styles.root}>
    <HomePage />
  </div>
}