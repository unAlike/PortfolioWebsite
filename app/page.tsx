import Image from 'next/image'
import React from "react";
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from "next/link"
import { Card, Text } from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <br></br>
        <h1>Ryan</h1>
        <br></br>
        <hr color='black'></hr>
        <table className={styles.navtable}>
          <tr>
            <Link href="/">Home</Link>  
          </tr>
          <tr>
            <Link href="/news">Projects</Link>
          </tr>
          <tr>
            <Link href="/contact">Games</Link>
          </tr>

        </table>
      </div>
      

      <div className={styles.grid}>

      </div>
    </main>
  )
}
