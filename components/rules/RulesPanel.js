import * as styles from '../../styles/rules/Rules.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

const RulesPanel = (props) => {

  return (
    <div className={styles.rules__panel}>
      <h1>Правила сервера</h1>
      <div className={styles.rules__panel_list}>
        { props.list.map(item => {
          return (
            <div className={styles.rules__panel_item} key={item.num}>
              <Link href={`/rules?rule=${item.num}`}>
                <h2>{item.num}. {item.title}</h2>
              </Link>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default RulesPanel