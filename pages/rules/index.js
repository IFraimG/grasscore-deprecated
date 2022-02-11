import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import HeadComponent from "../../components/withHead"

const Rules = () => {
  return (
    <div className={styles.container}>
      <HeadComponent
        title="Правила сервера"
        metaData={[
          {metaName: "description", contentData: "Правила сервера GrassCore"}
        ]} 
        linkData={[{}]} 
      />
      efefe
    </div>
  )
}

export default Rules