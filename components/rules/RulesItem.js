import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as styles from '../../styles/rules/Rules.module.css'

const RulesItem = (props) => {
  const router = useRouter()

  useEffect(() => {
    if (router.query?.rule != null) {
      let element = document.getElementById(`rule${router.query.rule}`)
      if (element != null) {
        const coords = element.getBoundingClientRect()
        window.scrollTo({top: coords.y - coords.height - 40, behavior: "smooth"})
      }
    }
  }, [router])

  return (
    <div className={styles.rules__item}>
      <div>
        <h1 id={`rule${props.item.num}`} className={styles.rules__item_title}>{props.item.num}. {props.item.title}</h1>
        { props.item.list != null ? props.item.list.map((rule, index) => {
          return (
            <div className={styles.rules__item_item} key={index}>
              <span>{rule.num}</span>
              <p>{rule.text}</p>
            </div>
          )
        }) : "" }
      </div>
    </div>
  )
}

export default RulesItem