
import { Blog } from './components/blog/blog'
import { Banner } from './components/banner/banner'
import { Menu } from './components/menu/menu'
import { Fragment } from 'react'

export default function Home() {
  const urlImagem= "https://pegadanatural.com.br/wp-content/uploads/3-maneiras-de-cuidar-do-seu-filhote-de-cachorro-com-qualidade.jpg";
  return <Fragment>
    <header>
      <Menu></Menu>
    </header>
    <main>
      <Banner title="Seu Nome" image={urlImagem}>
      lorem ipsum dolor sit amet consectetur adipiscing elit sagittis velit torquent class ornare lobortis litora a duis lectus congue porttitor cubilia turpis inceptos lacinia ex suspendisse maximus tortor enim consequat feugiat pharetra penatibus curae tristique ligula eleifend at auctor tempus 
        </Banner>
      <Blog />
    </main>
  </Fragment>
}
