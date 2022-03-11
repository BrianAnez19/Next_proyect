import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Devter
        </h1>

        <Link href={'/timelines'}>
          <a className={styles.navlink}>
            Timelines
          </a>
        </Link>
      </main>
    </div>
  )

}
