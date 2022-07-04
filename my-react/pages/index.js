import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <h1>Next JS</h1>
     <ul>
      <li><Link href="/contato"><a>Contato</a></Link></li>
      <li><Link href="/about"><a>Sobre nós</a></Link></li>
     </ul> 
    </div>
  )
}
