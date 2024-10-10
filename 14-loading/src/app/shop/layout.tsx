import styles from '../styles/components/subnavigations.module.css'

export default function LayoutProduct({children}:{children : React.ReactNode}) {
  return (
    <div>
        <p className={styles.container}>Sub Navigation</p>
        {children}
    </div>
  )
}
