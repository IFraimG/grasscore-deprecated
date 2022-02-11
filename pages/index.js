import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PriceHome from '../components/home/Price'
import HomeSection from '../components/home/Section'
import * as styles from '../styles/home/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home__wrapper}>
      <div className={styles.home}>
        <div className={styles.header}>
          <ul className={styles.header__list}>
            <li className={styles.header_item}>
              <Image className={styles.header_logo} src="/images/logo.png" width="60" height="60" />
            </li>
            <div className={styles.header__center}>
              <li className={styles.header_item}>
                <p>
                  <Link href="/">Главная</Link>
                </p>
              </li>
              <li className={styles.header_item}>
                <p>
                  <Link href="/about">О сервере</Link>
                </p>
              </li>
              <li className={styles.header_item}>
                <p>
                  <Link href="/rules">Правила</Link>
                </p>
              </li>
            </div>
            <li className={`${styles.header_item} ${styles.header_auth}`}>
              <button>Авторизация</button>
            </li>
          </ul>
        </div>
        <div className={`${styles.home__container} ${styles.home__main_wrapper}`}>
          <main className={styles.home__main}>
            <div className={styles.home__left}>
              <h1>Творческий подход к <span>ванильному выживанию</span></h1>
              <p>Общие проекты, частые ивенты, дружное сообщество — идеальные условия, чтобы раскрыть свой творческий потенциал в среде ванильного выживания</p>
              <div>
                <button className={styles.home__left_btn}>Купить доступ на сервер</button>
                <button className={styles.home__left_btn}>Скопировать IP адрес</button>
              </div>
              <p>Для игры требуется лицензия, играем на Minecraft: Java Edition 1.18.1</p>
            </div>
            <div className={styles.home__right}>
              <div className={styles.auth}>
                <Image src="/images/locked.png" width="32" height="32" />
                <h1>Авторизация</h1>
                <p>Для того, чтобы попасть в личный кабинет, авторизуйтесь с помощью одной из социальных сетей</p>
                <button className={styles.btn_discord}>Войти с помощью Discord</button>
                <p>
                  Авторизовываясь, вы соглашаетесь с <Link href="/policy">политикой конфиденциальности сайта.</Link>
                </p>
                {/* <button className={styles.auth__btn_return}>
                  <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="mr-2 h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                  <span>Вернуть на главную</span>
                </button> */}
              </div>
            </div>
          </main>
        </div>
        <div className={styles.section__wrapper}>
          <div className={styles.home__container}>
            <HomeSection />
          </div>
          <div className={styles.section__price_wrapper}>
            <div className={styles.home__container}>
              <PriceHome />
            </div>
          </div>
          <div className={styles.section__footer}>
            <footer className={styles.footer}>
              <p>Сервер является частью сети серверов PepeLand.</p>
              <p>Вся размещенная информация на сайте не является публичной офертой.</p>
              <p>We are in no way affiliated with or endorsed by Mojang, AB. Apple emojis provided by Apple. Apple® is a registered trademark of Apple Inc.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
