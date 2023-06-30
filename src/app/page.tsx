import Image from 'next/image'
import styles from './page.module.css'
import { Blog } from './components/blog/blog'
import { Banner } from './components/banner/banner'
import { Menu } from './components/menu/menu'
import { Fragment } from 'react'

export default function Home() {
  return <Fragment>
    <header>
      <Menu></Menu>
    </header>
    <main>
      <Banner title="Carolina Muniz" image="https://ca.slack-edge.com/T0DSE83UH-UHKJ20U6S-ffb80a05633e-512">
        Sou de Belo Horizonte, tenho 41 anos, casada, mãe da Gabi. 
        <br></br>Trabalho como Gerente de Tecnologia na Maxmilhas. 
        </Banner>
      <Blog />
    </main>
  </Fragment>
}
