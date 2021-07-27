import styles from './index.less'

export default ({ lon = 0, lat = 0 }: { lon?: number, lat?: number }) => {
  return <div className={styles.lonlatBar}>
    <span>{lon.toFixed(3)}</span>
    <span>&nbsp;&nbsp;</span>
    <span>{lat.toFixed(3)}</span>
  </div>
}