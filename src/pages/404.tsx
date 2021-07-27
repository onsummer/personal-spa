import styles from './index.less'
import {useLocation, useHistory} from 'umi'

export default (props: any) => {
  const l = useLocation()
  const h = useHistory()
  return <div className={styles.errorPage}>
    <span>噢, 页面 <span>{l.pathname}</span> 没找着 {':('}</span>
    <br />
    <a onClick={(e) => {
      e.preventDefault()
      h.replace('/')
    }}>返回主页 {'>'} </a>
  </div>
}